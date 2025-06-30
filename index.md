<!-- カスタムフォントCSSの読み込み -->
<link rel="stylesheet" href="assets/css/custom.css">

## このサイトについて
「オンライン心理学調査・実験入門：GoogleフォームとJavaScript (lab.js)を用いて」で章ごとに紹介したlab.jsプログラムのソースファイルとデモ，便利ツールを提供しています。ソースファイルはJSON形式です。ソースファイルはクリックするとダウンロードできます。なお，デモを利用したデータ収集はご遠慮ください。

## ch2
### 指示忘却課題（リスト法）
 * [デモ](ch2/demo/)
 * <a href = "ch2/2-LMDF-demo.json" download>ソースファイル</a>

## ch4
### デモデータ（4-demo-deta.xlsx)
 * <a href = "ch4/4-demo-deta.xlsx" download>デモデータ</a>

## ch5
### Hello world!
 * [デモ](ch5/demo1/)
 * <a href = "ch5/5-hello-world-demo.json" download>ソースファイル</a>
 
### 図形表示（Screen canvas）
 * [デモ](ch5/demo2/)
 * <a href = "ch5/5-screen-canvas-demo.json" download>ソースファイル</a>
 
## ch6
### 心理学調査1（簡易アンケート）
 * [デモ](ch6/demo1/)
 * <a href = "ch6/6-survey1-demo.json" download>ソースファイル</a>

### 心理学調査2（日本語版TCAQ）
 * [デモ](ch6/demo2/)
 * <a href = "ch6/6-survey2-demo.json" download>ソースファイル</a>

### 心理学調査2 Scripts版（日本語版TCAQ）
 * [デモ](ch6/demo3/)
 * <a href = "ch6/6-survey2-scripts-demo.json" download>ソースファイル</a>
 
## ch7
### フランカー課題
 * [デモ](ch7/demo/)
 * <a href = "ch7/7-flanker-task-demo.json" download>ソースファイル</a>

## ch8
### ストループ課題
 * [デモ](ch8/demo1/)
 * <a href = "ch8/8-stroop-task-demo.json" download>ソースファイル</a>

### サイモン課題
 * [デモ](ch8/demo2/)
 * <a href = "ch8/8-simon-task-demo.json" download>ソースファイル</a> 

## ch9
### 評価課題（Canvas Screen）（キーボード）
 * [デモ](ch9/demo1/)
 * <a href = "ch9/9-rating-task-canvas-key-demo.json" download>ソースファイル</a>

### 評価課題（Canvas Screen）（AOI）
 * [デモ](ch9/demo2/)
 * <a href = "ch9/9-rating-task-canvas-aoi-demo.json" download>ソースファイル</a> 

## ch10
### 評価課題（Page HTML）
 * [デモ](ch10/demo1/)
 * <a href = "ch10/10-rating-task-page-html-demo.json" download>ソースファイル</a>

### 評価課題（Page HTML）（スライダー）
 * [デモ](ch10/demo2/)
 * <a href = "ch10/10-rating-task-page-html-slider-demo.json" download>ソースファイル</a> 

## ch11
### 再認記憶課題
 * [デモ](ch11/demo/)
 * <a href = "ch11/11-old-new-recognition-task.json" download>ソースファイル</a>

## ch13
### デモデータ（13-demo-deta.csv)
 * <a href = "ch13/13-demo-deta.csv" download>デモデータ</a>

## ch14
### フランカー課題
 * [デモ](ch14/demo1/)
 * <a href = "ch14/14-flanker-task-scripts-demo.json" download>ソースファイル</a>

### 再認記憶課題
 * [デモ](ch14/demo2/)
 * <a href = "ch14/14-old-new-recognition-task.json" download>ソースファイル</a>

## 便利ツール
書籍では紹介していませんが，lab.jsと合わせて使うと便利なツールをいくつか作成しました。

### [addBOM：csvへのBOM付与](tool/addBOM.html)
lab.jsで出力されるcsvにはBOMがついていないため，Excelなどで読み込むと文字化けします。このツールでcsvにBOMを付与してから読み込むと文字化けしません。変換したファイルをZIPでダウンロードします。複数ファイルを選択可能です。

### [json2csv：JSONをcsvに変換](tool/json2csv.html)
JATOSで実施した場合に出力されるJSONをcsvに変換するツールです。metaなどのネストしている部分も展開できます。