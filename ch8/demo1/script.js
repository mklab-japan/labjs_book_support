// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "rating-task-canvas-aoi",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "rating-task-canvas-AOI",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "評定課題",
          "content": "この実験では食物の画像が呈示されます。美味しさを1点（美味しそうではない）から5点（美味しそう）で評価して下さい。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "始める →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "instruction"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "image": "1.jpg"
        },
        {
          "image": "2.jpg"
        },
        {
          "image": "3.jpg"
        },
        {
          "image": "4.jpg"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "ratingTask",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 400,
                "height": 250,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[this.parameters.image] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 200,
                "angle": 0,
                "width": 416,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "美味しさを評定してください",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -200,
                "top": 250,
                "angle": 0,
                "width": 17.76,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "1",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -100,
                "top": 250,
                "angle": 0,
                "width": 17.76,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "2",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 17.76,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "3",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 100,
                "top": 250,
                "angle": 0,
                "width": 17.76,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "4",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 200,
                "top": 250,
                "angle": 0,
                "width": 17.76,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "5",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "aoi",
                "left": -200,
                "top": 250,
                "angle": 0,
                "width": 50,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "1"
              },
              {
                "type": "aoi",
                "left": -100,
                "top": 250,
                "angle": 0,
                "width": 50,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "2"
              },
              {
                "type": "aoi",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 50,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "3"
              },
              {
                "type": "aoi",
                "left": 100,
                "top": 250,
                "angle": 0,
                "width": 50,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "4"
              },
              {
                "type": "aoi",
                "left": 200,
                "top": 250,
                "angle": 0,
                "width": 50,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "5"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "1.jpg": "embedded\u002F7b56076dd337b10f9a0f20c7a44600730898ed81543ddb521eb52245f51c1e68.jpg",
              "3.jpg": "embedded\u002F53465a2456f0e8f22f6ae9003a8591cd9c956d61aa88940b95cec9e13f3ea9fc.jpg",
              "4.jpg": "embedded\u002Fa2f84196466e437c5bdcb7848ecde6251964666c45b3e90747b244591ab807fd.jpg",
              "2.jpg": "embedded\u002Fffff047f5f41bc1e7d3eb66d33a24581b380f37e3b4415d3ad3f3fb77f995211.jpg"
            },
            "responses": {
              "click @1": "1",
              "click @2": "2",
              "click @3": "3",
              "click @4": "4",
              "click @5": "5"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "stimulus"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "undefined": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "blank",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "ありがとうございました。",
          "content": "これで実験は終了です。以下の「結果のダウンロード」ボタンを押すと結果をダウンロードできます。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "結果のダウンロード →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "thanks"
    }
  ]
})

// Let's go!
study.run()