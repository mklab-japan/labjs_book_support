let rawData = [];
let selectedData = [];
let allColumns = [];
let selectedOutputColumns = [];

// file
const fileInput = document.getElementById("fileInput");
const loadMessage = document.getElementById("loadMessage");

// group_by + fill
const groupColumnSelect = document.getElementById("groupColumnSelect");
const fillColumnCheckboxes = document.getElementById("fillColumnCheckboxes");
const fillMessage = document.getElementById("fillMessage");
const selectAllFillBtn = document.getElementById("selectAllFillBtn");
const deselectAllFillBtn = document.getElementById("deselectAllFillBtn");

// select columns
const columnCheckboxes = document.getElementById("columnCheckboxes");
const selectAllBtn = document.getElementById("selectAllBtn");
const deselectAllBtn = document.getElementById("deselectAllBtn");

// sender filter
const senderCheckboxes = document.getElementById("senderCheckboxes");
const senderMessage = document.getElementById("senderMessage");
const selectAllSenderBtn = document.getElementById("selectAllSenderBtn");
const deselectAllSenderBtn = document.getElementById("deselectAllSenderBtn");

// apply / reset / preview / download
const applyAllBtn = document.getElementById("applyAllBtn");
const resetOutputBtn = document.getElementById("resetOutputBtn");
const downloadBtn = document.getElementById("downloadBtn");
const preview = document.getElementById("preview");
const previewMessage = document.getElementById("previewMessage");

// events
fileInput.addEventListener("change", handleFile);

groupColumnSelect.addEventListener("change", updateFillMessage);
selectAllFillBtn.addEventListener("click", selectAllFillColumns);
deselectAllFillBtn.addEventListener("click", deselectAllFillColumns);

selectAllBtn.addEventListener("click", selectAllColumns);
deselectAllBtn.addEventListener("click", deselectAllColumns);

selectAllSenderBtn.addEventListener("click", selectAllSenders);
deselectAllSenderBtn.addEventListener("click", deselectAllSenders);

applyAllBtn.addEventListener("click", applyAllSettings);
resetOutputBtn.addEventListener("click", resetOutput);
downloadBtn.addEventListener("click", downloadCSV);

// ------------------------------------------------------------
// 1. file loading
// ------------------------------------------------------------

function handleFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  resetState();

  const reader = new FileReader();

  reader.onload = function(e) {
    try {
      const text = e.target.result;
      const ext = getFileExtension(file.name);

      if (ext === "csv" || ext === "tsv") {
        rawData = parseCsvText(text, ext);
      } else {
        rawData = parseLabjsJson(text);
      }

      if (!Array.isArray(rawData) || rawData.length === 0) {
        throw new Error("データが空です。");
      }

      allColumns = extractColumnNames(rawData);

      if (allColumns.length === 0) {
        throw new Error("列名を抽出できませんでした。データの構造を確認してください。");
      }

      if (!allColumns.includes("sender")) {
        throw new Error("sender列が見つかりません。lab.jsデータにsender列があるか確認してください。");
      }

      selectedData = rawData.map(row => ({ ...row }));
      selectedOutputColumns = allColumns.slice();

      renderFillControls(allColumns);
      renderColumnCheckboxes(allColumns);
      renderSenderCheckboxes(rawData);

      loadMessage.textContent =
        `${rawData.length}行のデータを読み込みました。列数は${allColumns.length}列です。`;
      loadMessage.className = "message";

      enableButtons();
      renderPreview(selectedData, selectedOutputColumns);

    } catch (error) {
      resetState();
      loadMessage.textContent = `読み込みエラー: ${error.message}`;
      loadMessage.className = "message error";
    }
  };

  reader.readAsText(file, "UTF-8");
}

function getFileExtension(filename) {
  const parts = filename.split(".");
  if (parts.length < 2) return "";
  return parts.pop().toLowerCase();
}

// ------------------------------------------------------------
// CSV / TSV
// ------------------------------------------------------------

function parseCsvText(text, ext) {
  if (typeof Papa === "undefined") {
    throw new Error("Papa Parseが読み込まれていません。index.htmlでPapa Parseをscript.jsより前に読み込んでください。");
  }

  const delimiter = ext === "tsv" ? "\t" : ",";

  const result = Papa.parse(text, {
    header: true,
    skipEmptyLines: true,
    delimiter: delimiter,
    dynamicTyping: false
  });

  if (result.errors && result.errors.length > 0) {
    console.warn("CSV parse warnings:", result.errors);
  }

  const rows = result.data;

  if (!Array.isArray(rows) || rows.length === 0) {
    throw new Error("CSV/TSVのデータが空です。");
  }

  return rows;
}

// ------------------------------------------------------------
// JSON / JSON Lines
// ------------------------------------------------------------

function parseLabjsJson(text) {
  const trimmed = text.trim();

  if (trimmed.length === 0) {
    throw new Error("ファイルが空です。");
  }

  let parsedData;

  try {
    const parsed = JSON.parse(trimmed);

    if (Array.isArray(parsed)) {
      parsedData = parsed;
    } else if (
      typeof parsed === "object" &&
      parsed !== null &&
      Array.isArray(parsed.data)
    ) {
      parsedData = parsed.data;
    } else if (typeof parsed === "object" && parsed !== null) {
      parsedData = [parsed];
    }

  } catch (e) {
    // 通常JSONとして失敗したらJSON Linesとして読む
  }

  if (!parsedData) {
    const lines = trimmed
      .split(/\r?\n/)
      .map(line => line.trim())
      .filter(line => line.length > 0);

    parsedData = lines.map((line, index) => {
      try {
        return JSON.parse(line);
      } catch (error) {
        throw new Error(`${index + 1}行目をJSONとして読めませんでした。`);
      }
    });
  }

  return flattenLabjsData(parsedData);
}

function flattenLabjsData(data) {
  const rows = [];

  data.forEach((entry, participantIndex) => {
    extractRowsFromEntry(entry, rows, {
      participant_index: participantIndex + 1
    });
  });

  return rows;
}

function extractRowsFromEntry(entry, rows, baseInfo = {}) {
  if (Array.isArray(entry)) {
    entry.forEach((trial, trialIndex) => {
      extractRowsFromEntry(trial, rows, {
        ...baseInfo,
        trial_index: trialIndex + 1
      });
    });
    return;
  }

  if (typeof entry !== "object" || entry === null) {
    return;
  }

  if (Array.isArray(entry.data)) {
    entry.data.forEach((trial, trialIndex) => {
      extractRowsFromEntry(trial, rows, {
        ...baseInfo,
        trial_index: trialIndex + 1
      });
    });
    return;
  }

  if (Array.isArray(entry.resultData)) {
    entry.resultData.forEach((trial, trialIndex) => {
      extractRowsFromEntry(trial, rows, {
        ...baseInfo,
        trial_index: trialIndex + 1
      });
    });
    return;
  }

  if (Array.isArray(entry.rows)) {
    entry.rows.forEach((trial, trialIndex) => {
      extractRowsFromEntry(trial, rows, {
        ...baseInfo,
        trial_index: trialIndex + 1
      });
    });
    return;
  }

  rows.push({
    ...baseInfo,
    ...entry
  });
}

// ------------------------------------------------------------
// common helpers
// ------------------------------------------------------------

function extractColumnNames(data) {
  const columnSet = new Set();

  data.forEach(row => {
    if (typeof row === "object" && row !== null && !Array.isArray(row)) {
      Object.keys(row).forEach(key => columnSet.add(key));
    }
  });

  return Array.from(columnSet).sort(naturalSort);
}

function naturalSort(a, b) {
  return a.localeCompare(b, "ja", {
    numeric: true,
    sensitivity: "base"
  });
}

function isEmptyValue(value) {
  return (
    value === undefined ||
    value === null ||
    value === "" ||
    value === "NA" ||
    value === "NaN" ||
    value === "null" ||
    value === "undefined"
  );
}

function formatCell(value) {
  if (value === undefined || value === null) return "";

  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  return String(value);
}

// ------------------------------------------------------------
// 2. group_by + fill
// ------------------------------------------------------------

function renderFillControls(columns) {
  renderGroupColumnSelect(columns);
  renderFillColumnCheckboxes(columns);

  fillMessage.textContent =
    "補完しない場合は，グループ化する列を「補完しない」のままにしてください。";
  fillMessage.className = "message";
}

function renderGroupColumnSelect(columns) {
  groupColumnSelect.innerHTML = "";

  const noneOption = document.createElement("option");
  noneOption.value = "";
  noneOption.textContent = "補完しない";
  groupColumnSelect.appendChild(noneOption);

  columns.forEach(column => {
    const option = document.createElement("option");
    option.value = column;
    option.textContent = column;
    groupColumnSelect.appendChild(option);
  });

  const preferredGroupColumns = [
    "participantID",
    "participantId",
    "participant_id",
    "participant",
    "subject",
    "subjectID",
    "subjID"
  ];

  const matched = preferredGroupColumns.find(column => columns.includes(column));

  if (matched) {
    groupColumnSelect.value = matched;
  }
}

function renderFillColumnCheckboxes(columns) {
  fillColumnCheckboxes.innerHTML = "";

  columns.forEach(column => {
    const wrapper = document.createElement("label");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = column;

    // デフォルトでは全解除
    checkbox.checked = false;

    // fill対象にした列は，出力列にも自動でチェックを入れる
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        checkOutputColumns([column]);
      }

      updateFillMessage();
    });

    wrapper.appendChild(checkbox);
    wrapper.appendChild(document.createTextNode(" " + column));

    fillColumnCheckboxes.appendChild(wrapper);
  });
}

function getSelectedGroupColumn() {
  return groupColumnSelect.value;
}

function getSelectedFillColumns() {
  const checkedBoxes = fillColumnCheckboxes.querySelectorAll(
    "input[type='checkbox']:checked"
  );

  return Array.from(checkedBoxes).map(cb => cb.value);
}

function selectAllFillColumns() {
  const checkboxes = fillColumnCheckboxes.querySelectorAll("input[type='checkbox']");
  const selectedFillColumns = [];

  checkboxes.forEach(cb => {
    cb.checked = true;
    selectedFillColumns.push(cb.value);
  });

  checkOutputColumns(selectedFillColumns);
  updateFillMessage();
}

function deselectAllFillColumns() {
  const checkboxes = fillColumnCheckboxes.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(cb => {
    cb.checked = false;
  });

  updateFillMessage();
}

function updateFillMessage() {
  const groupColumn = getSelectedGroupColumn();
  const fillColumns = getSelectedFillColumns();

  if (!groupColumn) {
    fillMessage.textContent = "補完しない設定です。";
    fillMessage.className = "message";
    return;
  }

  if (fillColumns.length === 0) {
    fillMessage.textContent =
      `${groupColumn}列でグループ化します。補完する列はまだ選択されていません。`;
    fillMessage.className = "message";
    return;
  }

  fillMessage.textContent =
    `${groupColumn}列でグループ化して，${fillColumns.length}列をグループ内で補完します。`;
  fillMessage.className = "message";
}

function fillByGroup(data, groupColumn, fillColumns) {
  if (!groupColumn || fillColumns.length === 0) {
    return data.map(row => ({ ...row }));
  }

  const groups = new Map();

  data.forEach((row, index) => {
    const groupValue = row[groupColumn];

    if (isEmptyValue(groupValue)) {
      return;
    }

    const key = String(groupValue);

    if (!groups.has(key)) {
      groups.set(key, []);
    }

    groups.get(key).push(index);
  });

  const filledData = data.map(row => ({ ...row }));

  groups.forEach(indices => {
    fillColumns.forEach(column => {
      const fillValue = findFirstNonEmptyValue(filledData, indices, column);

      if (fillValue === undefined) {
        return;
      }

      indices.forEach(index => {
        const currentValue = filledData[index][column];

        if (isEmptyValue(currentValue)) {
          filledData[index][column] = fillValue;
        }
      });
    });
  });

  return filledData;
}

function findFirstNonEmptyValue(data, indices, column) {
  for (const index of indices) {
    const value = data[index][column];

    if (!isEmptyValue(value)) {
      return value;
    }
  }

  return undefined;
}

// ------------------------------------------------------------
// 3. select columns
// senderは固定で残すので，選択肢には出さない
// ------------------------------------------------------------

function renderColumnCheckboxes(columns) {
  columnCheckboxes.innerHTML = "";

  const selectableColumns = columns.filter(column => column !== "sender");

  selectableColumns.forEach(column => {
    const wrapper = document.createElement("label");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = column;

    // デフォルトでは全解除
    checkbox.checked = false;

    wrapper.appendChild(checkbox);
    wrapper.appendChild(document.createTextNode(" " + column));

    columnCheckboxes.appendChild(wrapper);
  });
}

function getSelectedColumns() {
  const checkedBoxes = columnCheckboxes.querySelectorAll(
    "input[type='checkbox']:checked"
  );

  return Array.from(checkedBoxes).map(cb => cb.value);
}

function checkOutputColumns(columnNames) {
  const checkboxes = columnCheckboxes.querySelectorAll("input[type='checkbox']");

  checkboxes.forEach(cb => {
    if (columnNames.includes(cb.value)) {
      cb.checked = true;
    }
  });
}

function selectAllColumns() {
  const checkboxes = columnCheckboxes.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(cb => {
    cb.checked = true;
  });
}

function deselectAllColumns() {
  const checkboxes = columnCheckboxes.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(cb => {
    cb.checked = false;
  });
}

// ------------------------------------------------------------
// 4. filter(sender)
// ------------------------------------------------------------

function renderSenderCheckboxes(data) {
  senderCheckboxes.innerHTML = "";
  senderMessage.textContent = "";

  const columns = extractColumnNames(data);

  if (!columns.includes("sender")) {
    senderMessage.textContent =
      "sender列が見つかりません。lab.jsデータにsender列があるか確認してください。";
    senderMessage.className = "message error";

    disableSenderButtons();
    return;
  }

  const senderValues = extractUniqueValues(data, "sender");

  if (senderValues.length === 0) {
    senderMessage.textContent =
      "sender列はありますが，値を抽出できませんでした。";
    senderMessage.className = "message error";

    disableSenderButtons();
    return;
  }

  senderValues.forEach(value => {
    const wrapper = document.createElement("label");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = value;

    // デフォルトでは全解除
    checkbox.checked = false;

    wrapper.appendChild(checkbox);
    wrapper.appendChild(document.createTextNode(" " + value));

    senderCheckboxes.appendChild(wrapper);
  });

  senderMessage.textContent =
    `${senderValues.length}種類のsender値を検出しました。必要なsenderにチェックしてください。`;
  senderMessage.className = "message";

  enableSenderButtons();
}

function extractUniqueValues(data, columnName) {
  const valueSet = new Set();

  data.forEach(row => {
    const value = row[columnName];

    if (!isEmptyValue(value)) {
      valueSet.add(String(value));
    }
  });

  return Array.from(valueSet).sort(naturalSort);
}

function getSelectedSenderValues() {
  const checkedBoxes = senderCheckboxes.querySelectorAll(
    "input[type='checkbox']:checked"
  );

  return Array.from(checkedBoxes).map(cb => cb.value);
}

function selectAllSenders() {
  const checkboxes = senderCheckboxes.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(cb => {
    cb.checked = true;
  });
}

function deselectAllSenders() {
  const checkboxes = senderCheckboxes.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(cb => {
    cb.checked = false;
  });
}

// ------------------------------------------------------------
// 5. apply all settings
// group_by + fill → filter(sender) → select(sender, ...)
// ------------------------------------------------------------

function applyAllSettings() {
  const selectedColumns = getSelectedColumns();
  const selectedSenderValues = getSelectedSenderValues();

  const groupColumn = getSelectedGroupColumn();
  const fillColumns = getSelectedFillColumns();

  if (!allColumns.includes("sender")) {
    previewMessage.textContent = "sender列が見つかりません。";
    previewMessage.className = "message error";
    return;
  }

  if (selectedSenderValues.length === 0) {
    previewMessage.textContent = "少なくとも1つのsender値を選択してください。";
    previewMessage.className = "message error";
    return;
  }

  if (groupColumn && !allColumns.includes(groupColumn)) {
    previewMessage.textContent = `グループ化列 ${groupColumn} が見つかりません。`;
    previewMessage.className = "message error";
    return;
  }

  const missingFillColumns = fillColumns.filter(column => !allColumns.includes(column));

  if (missingFillColumns.length > 0) {
    previewMessage.textContent =
      `補完対象列が見つかりません: ${missingFillColumns.join(", ")}`;
    previewMessage.className = "message error";
    return;
  }

  const selectedSenderSet = new Set(selectedSenderValues);

  // senderは必ず残す
  const outputColumns = Array.from(new Set(["sender", ...selectedColumns]));

  let processedData = rawData.map(row => ({ ...row }));

  // 1. group_by + fill
  processedData = fillByGroup(
    processedData,
    groupColumn,
    fillColumns
  );

  // 2. filter(sender %in% ...)
  processedData = processedData.filter(row => {
    return selectedSenderSet.has(String(row.sender));
  });

  // 3. select(sender, ...)
  processedData = processedData.map(row => {
    const newRow = {};

    outputColumns.forEach(column => {
      newRow[column] = row[column] ?? "";
    });

    return newRow;
  });

  selectedData = processedData;
  selectedOutputColumns = outputColumns;

  let fillInfo = "";

  if (groupColumn && fillColumns.length > 0) {
    fillInfo = ` ${groupColumn}でグループ化し，${fillColumns.length}列を補完しました。`;
  }

  previewMessage.textContent =
    `${selectedData.length}行，${outputColumns.length}列のデータを作成しました。${fillInfo}`;
  previewMessage.className = "message";

  renderPreview(selectedData, selectedOutputColumns);
  downloadBtn.disabled = false;
}

function resetOutput() {
  if (!rawData || rawData.length === 0) {
    previewMessage.textContent = "元に戻すデータがありません。";
    previewMessage.className = "message error";
    return;
  }

  selectedData = rawData.map(row => ({ ...row }));
  selectedOutputColumns = allColumns.slice();

  previewMessage.textContent =
    `元データに戻しました。${selectedData.length}行，${selectedOutputColumns.length}列です。`;
  previewMessage.className = "message";

  renderPreview(selectedData, selectedOutputColumns);

  downloadBtn.disabled = false;
}

// ------------------------------------------------------------
// preview / download
// ------------------------------------------------------------

function renderPreview(data, columns = null) {
  preview.innerHTML = "";

  if (!data || data.length === 0) {
    previewMessage.textContent = "表示するデータがありません。";
    previewMessage.className = "message error";
    return;
  }

  const previewRows = data.slice(0, 20);
  const displayColumns = columns || extractColumnNames(data);

  const table = document.createElement("table");

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  displayColumns.forEach(column => {
    const th = document.createElement("th");
    th.textContent = column;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  previewRows.forEach(row => {
    const tr = document.createElement("tr");

    displayColumns.forEach(column => {
      const td = document.createElement("td");
      td.textContent = formatCell(row[column]);
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  preview.appendChild(table);

  previewMessage.textContent =
    `先頭${previewRows.length}行を表示しています。現在の行数は${data.length}行です。`;
  previewMessage.className = "message";
}

function downloadCSV() {
  if (!selectedData || selectedData.length === 0) return;

  const columns = selectedOutputColumns.length > 0
    ? selectedOutputColumns
    : extractColumnNames(selectedData);

  const csv = convertToCSV(selectedData, columns);

  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8;"
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "labjs_filtered_data.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);
}

function convertToCSV(data, columns) {
  const header = columns.map(escapeCSV).join(",");

  const rows = data.map(row => {
    return columns
      .map(column => escapeCSV(formatCell(row[column])))
      .join(",");
  });

  return "\uFEFF" + [header, ...rows].join("\n");
}

function escapeCSV(value) {
  const str = String(value ?? "");

  if (
    str.includes(",") ||
    str.includes('"') ||
    str.includes("\n") ||
    str.includes("\r")
  ) {
    return '"' + str.replace(/"/g, '""') + '"';
  }

  return str;
}

// ------------------------------------------------------------
// buttons / reset
// ------------------------------------------------------------

function enableButtons() {
  groupColumnSelect.disabled = false;
  selectAllFillBtn.disabled = false;
  deselectAllFillBtn.disabled = false;

  selectAllBtn.disabled = false;
  deselectAllBtn.disabled = false;

  applyAllBtn.disabled = false;
  resetOutputBtn.disabled = false;
  downloadBtn.disabled = false;
}

function enableSenderButtons() {
  selectAllSenderBtn.disabled = false;
  deselectAllSenderBtn.disabled = false;
}

function disableSenderButtons() {
  selectAllSenderBtn.disabled = true;
  deselectAllSenderBtn.disabled = true;
}

function resetState() {
  rawData = [];
  selectedData = [];
  allColumns = [];
  selectedOutputColumns = [];

  fillColumnCheckboxes.innerHTML = "";
  columnCheckboxes.innerHTML = "";
  senderCheckboxes.innerHTML = "";

  groupColumnSelect.innerHTML = '<option value="">補完しない</option>';
  groupColumnSelect.disabled = true;

  preview.innerHTML = "";

  previewMessage.textContent = "";
  senderMessage.textContent = "";
  fillMessage.textContent = "";

  selectAllFillBtn.disabled = true;
  deselectAllFillBtn.disabled = true;

  selectAllBtn.disabled = true;
  deselectAllBtn.disabled = true;

  disableSenderButtons();

  applyAllBtn.disabled = true;
  resetOutputBtn.disabled = true;
  downloadBtn.disabled = true;
}