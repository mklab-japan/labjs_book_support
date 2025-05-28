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
      "filePrefix": "rating-task-page-html",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "rating-task-page-HTML",
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
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = \"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cimg src = ${this.files[this.parameters.image]} \u003E\u003C\u002Fimg\u003E\r\n\u003C\u002Fdiv\u003E",
                "name": ""
              },
              {
                "required": true,
                "type": "radio",
                "label": "画像のおいしさを評価してください",
                "options": [
                  {
                    "label": "美味しそうでない",
                    "coding": "1"
                  },
                  {
                    "label": "どちらかといえば美味しそうでない",
                    "coding": "2"
                  },
                  {
                    "label": "どちらともいえない",
                    "coding": "3"
                  },
                  {
                    "label": "どちらかといえば美味しそうである",
                    "coding": "4"
                  },
                  {
                    "label": "美味しそうである",
                    "coding": "5"
                  }
                ],
                "name": "rating"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = \"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cbutton type = \"submit\"\u003E次へ\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {
              "1.jpg": "embedded\u002Ffa03cdae569849721ff4d0b23d7ef570fb46c34d629bc0215ba636362aad3406.jpg",
              "2.jpg": "embedded\u002F52109d5ae355bb1ed7537069d38373dff623655e5dbd33848a1c75ed76d887f1.jpg",
              "3.jpg": "embedded\u002F14ad2487171aae42fcfddb59838e5ef9584c909e045d3e1d091c695b3fbf103b.jpg",
              "4.jpg": "embedded\u002Ff57ba8d0a9b281c8681defb745684cb99af7492986d5f5e63f680e9c7ddf8417.jpg"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "stimulus"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "blank",
            "timeout": "1000"
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