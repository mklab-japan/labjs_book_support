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
      "filePrefix": "simon-task",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "simon-task",
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
          "title": "サイモン課題",
          "content": "この実験では青色またはオレンジ色の円が呈示されます。円の色が青の場合は「fキー」を，オレンジの場合は「jキー」を押してください。"
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
          "color": "blue",
          "position": -200,
          "condition": "congruent"
        },
        {
          "color": "blue",
          "position": -200,
          "condition": "congruent"
        },
        {
          "color": "blue",
          "position": -200,
          "condition": "congruent"
        },
        {
          "color": "blue",
          "position": -200,
          "condition": "congruent"
        },
        {
          "color": "blue",
          "position": -200,
          "condition": "congruent"
        },
        {
          "color": "blue",
          "position": -200,
          "condition": "congruent"
        },
        {
          "color": "blue",
          "position": -200,
          "condition": "congruent"
        },
        {
          "color": "blue",
          "position": -200,
          "condition": "congruent"
        },
        {
          "color": "blue",
          "position": -200,
          "condition": "congruent"
        },
        {
          "color": "blue",
          "position": -200,
          "condition": "congruent"
        },
        {
          "color": "blue",
          "position": 200,
          "condition": "incongruent"
        },
        {
          "color": "blue",
          "position": 200,
          "condition": "incongruent"
        },
        {
          "color": "blue",
          "position": 200,
          "condition": "incongruent"
        },
        {
          "color": "blue",
          "position": 200,
          "condition": "incongruent"
        },
        {
          "color": "blue",
          "position": 200,
          "condition": "incongruent"
        },
        {
          "color": "blue",
          "position": 200,
          "condition": "incongruent"
        },
        {
          "color": "blue",
          "position": 200,
          "condition": "incongruent"
        },
        {
          "color": "blue",
          "position": 200,
          "condition": "incongruent"
        },
        {
          "color": "blue",
          "position": 200,
          "condition": "incongruent"
        },
        {
          "color": "blue",
          "position": 200,
          "condition": "incongruent"
        },
        {
          "color": "orange",
          "position": -200,
          "condition": "incongruent"
        },
        {
          "color": "orange",
          "position": -200,
          "condition": "incongruent"
        },
        {
          "color": "orange",
          "position": -200,
          "condition": "incongruent"
        },
        {
          "color": "orange",
          "position": -200,
          "condition": "incongruent"
        },
        {
          "color": "orange",
          "position": -200,
          "condition": "incongruent"
        },
        {
          "color": "orange",
          "position": -200,
          "condition": "incongruent"
        },
        {
          "color": "orange",
          "position": -200,
          "condition": "incongruent"
        },
        {
          "color": "orange",
          "position": -200,
          "condition": "incongruent"
        },
        {
          "color": "orange",
          "position": -200,
          "condition": "incongruent"
        },
        {
          "color": "orange",
          "position": -200,
          "condition": "incongruent"
        },
        {
          "color": "orange",
          "position": 200,
          "condition": "congruent"
        },
        {
          "color": "orange",
          "position": 200,
          "condition": "congruent"
        },
        {
          "color": "orange",
          "position": 200,
          "condition": "congruent"
        },
        {
          "color": "orange",
          "position": 200,
          "condition": "congruent"
        },
        {
          "color": "orange",
          "position": 200,
          "condition": "congruent"
        },
        {
          "color": "orange",
          "position": 200,
          "condition": "congruent"
        },
        {
          "color": "orange",
          "position": 200,
          "condition": "congruent"
        },
        {
          "color": "orange",
          "position": 200,
          "condition": "congruent"
        },
        {
          "color": "orange",
          "position": 200,
          "condition": "congruent"
        },
        {
          "color": "orange",
          "position": 200,
          "condition": "congruent"
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
      "title": "simonTask",
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
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 17.76,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
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
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "fixation",
            "timeout": "500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 200,
                "top": 400,
                "angle": 0,
                "width": 895.64,
                "height": 90.4,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "${this.parameters.word}",
                "text": "${this.parameters.word}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "80",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "circle",
                "left": "${this.parameters.position}",
                "top": 0,
                "angle": 0,
                "width": "50",
                "height": 55,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "${this.parameters.color}"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(f)": "blue",
              "keypress(j)": "green"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "stimulus",
            "correctResponse": "${this.parameters.color}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 554.11,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${this.state.correct? \"正解\" : \"不正解\"}",
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
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "feedback",
            "timeout": "1000",
            "tardy": true
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