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
      "filePrefix": "rating-task-canvas-key",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "rating-task-canvas-key",
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
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "1.jpg": "embedded\u002Ffa03cdae569849721ff4d0b23d7ef570fb46c34d629bc0215ba636362aad3406.jpg",
              "2.jpg": "embedded\u002F52109d5ae355bb1ed7537069d38373dff623655e5dbd33848a1c75ed76d887f1.jpg",
              "3.jpg": "embedded\u002F14ad2487171aae42fcfddb59838e5ef9584c909e045d3e1d091c695b3fbf103b.jpg",
              "4.jpg": "embedded\u002Ff57ba8d0a9b281c8681defb745684cb99af7492986d5f5e63f680e9c7ddf8417.jpg"
            },
            "responses": {
              "keypress(1)": "1",
              "keypress(2)": "2",
              "keypress(3)": "3",
              "keypress(4)": "4",
              "keypress(5)": "5"
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