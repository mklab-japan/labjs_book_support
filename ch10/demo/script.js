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
      "filePrefix": "10-old-new-recognition-task",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "10-old-new-recognition-task",
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
          "title": "再認記憶課題",
          "content": "この実験では最初に単語を覚えていただきます。画面に呈示された単語を覚えてください。\n\u003Cbr\u003E単語を覚えていただいた後に再認テストが行われます。呈示された単語が覚えた単語（見た単語）か覚えていない単語（見ていない単語）かを判断してください。"
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
          "item": "リンゴ"
        },
        {
          "item": "バッタ"
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
      "title": "learningPhase",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "learningTrial",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = \"content-horizontal-center content-vertical-center\"\u003E\r\n    \u003Ch1\u003E+\u003C\u002Fh1\u003E\r\n\u003C\u002Fdiv\u003E",
                "name": ""
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
            "title": "fixation",
            "timeout": "1000"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = \"content-horizontal-center content-vertical-center\"\u003E\r\n    \u003Ch1\u003E${this.parameters.item}\u003C\u002Fh1\u003E\r\n\u003C\u002Fdiv\u003E",
                "name": ""
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
            "title": "item",
            "timeout": "1000"
          },
          {
            "type": "lab.html.Page",
            "items": [],
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
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "item": "リンゴ",
          "itemType": "old"
        },
        {
          "item": "バッタ",
          "itemType": "old"
        },
        {
          "item": "ブドウ",
          "itemType": "new"
        },
        {
          "item": "チョウ",
          "itemType": "new"
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
      "title": "recognitionPhase",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "recognitionTrial",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = \"content-horizontal-center content-vertical-center\"\u003E\r\n    \u003Ch1\u003E+\u003C\u002Fh1\u003E\r\n\u003C\u002Fdiv\u003E",
                "name": ""
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
            "title": "fixation",
            "timeout": "1000"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = \"content-horizontal-center content-vertical-center\"\u003E\r\n    \u003Ch1\u003E${this.parameters.item}\u003C\u002Fh1\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv class = \"content-horizontal-space-around content-vertical-center\"\u003E\r\n    \u003Cbutton id =\"oldBtn\"\u003E見た\u003C\u002Fbutton\u003E\u003Cbutton id =\"newBtn\"\u003E見てない\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "click button#oldBtn": "old",
              "click button#newBtn": "new"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "test",
            "correctResponse": "${this.parameters.itemType}"
          },
          {
            "type": "lab.html.Page",
            "items": [],
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