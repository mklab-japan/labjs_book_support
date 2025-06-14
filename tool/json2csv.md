## lab.js JSON → CSV変換ツール

### 使い方
JSONファイルを選択後，「CSVに変換」ボタンをクリックしてください。csvファイルでダウンロードできます。ファイル形式は.jsonまたは.txtに対応しています。

### ツール
 <label for="jsonFile">JSONファイルを選択：</label><input type="file" id="jsonFile" accept=".json,.txt" />
 <button id="convertBtn" disabled>CSVに変換</button>

<script>
  // JSONフラット化（1階層ネスト展開）
  function flatten(obj) {
    const result = {};
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        for (const subKey in obj[key]) {
          result[`${key}.${subKey}`] = obj[key][subKey];
        }
      } else {
        result[key] = obj[key];
      }
    }
    return result;
  }

  // CSV作成関数
  function toCSV(data, keys) {
    const lines = [];
    lines.push(keys.join(',')); // header
    data.forEach(row => {
      const line = keys.map(k => {
        const val = row[k] !== undefined ? row[k] : '';
        const str = String(val).replace(/"/g, '""');
        return `"${str}"`;
      }).join(',');
      lines.push(line);
    });
    return lines.join('\n');
  }

  // ファイル選択・読み込み
  const inputFile = document.getElementById('jsonFile');
  const convertBtn = document.getElementById('convertBtn');
  let jsonData = null;

  inputFile.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        jsonData = JSON.parse(reader.result);
        if (!Array.isArray(jsonData)) {
          alert('JSONは配列である必要があります。');
          jsonData = null;
          convertBtn.disabled = true;
          return;
        }
        convertBtn.disabled = false;
      } catch {
        alert('JSONの読み込みに失敗しました。');
        jsonData = null;
        convertBtn.disabled = true;
      }
    };
    reader.readAsText(file, 'utf-8');
  });

  // 変換＆ダウンロード
  convertBtn.addEventListener('click', () => {
    if (!jsonData) return;

    const flatData = jsonData.map(flatten);
    const allKeys = new Set();
    flatData.forEach(item => Object.keys(item).forEach(k => allKeys.add(k)));
    const keys = Array.from(allKeys);

    const csv = toCSV(flatData, keys);
    const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);  // UTF-8 BOM
    const blob = new Blob([bom, csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'labjs_output.csv';
    a.click();
    URL.revokeObjectURL(url);
  });
</script>