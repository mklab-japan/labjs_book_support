## 複数CSV → BOM付きZIPダウンロード

### 使い方
csvファイルを選択後（複数選択可），「BOMを追加」ボタンをクリックしてください。ZIPファイルでダウンロードできます。

### ツール
 <input type="file" id="csvFiles" accept=".csv" multiple />
 <button id="convertBtn">BOMを追加</button>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>

<script>
document.getElementById('convertBtn').addEventListener('click', () => {
  const fileInput = document.getElementById('csvFiles');
  if (!fileInput.files.length) {
    alert('CSVファイルを選択してください');
    return;
  }

  const zip = new JSZip();
  const files = Array.from(fileInput.files);
  let loadedCount = 0;

  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      const text = e.target.result;

      const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
      const encoder = new TextEncoder();
      const encodedText = encoder.encode(text);

      const combined = new Uint8Array(bom.length + encodedText.length);
      combined.set(bom, 0);
      combined.set(encodedText, bom.length);

      zip.file(file.name, combined);

      loadedCount++;
      if (loadedCount === files.length) {
        zip.generateAsync({ type: "blob" }).then(content => {
          const a = document.createElement("a");
          const url = URL.createObjectURL(content);
          a.href = url;
          a.download = "converted_csv_files.zip";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        });
      }
    };
    reader.readAsText(file, 'utf-8');
  });
});
</script>
