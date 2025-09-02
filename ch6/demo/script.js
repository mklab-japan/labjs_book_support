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
      "filePrefix": "flanker-task",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "flanker-task",
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
          "title": "フランカー課題",
          "content": "この実験では「＜」または「＞」が呈示されます。中央の記号が「＜」の場合は「fキー」を，「＞」の場合は「jキー」を押してください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "始める→",
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
          "resp": "left",
          "stim": "＜＜＜＜＜",
          "condition": "congruent"
        },
        {
          "resp": "left",
          "stim": "＜＜＜＜＜",
          "condition": "congruent"
        },
        {
          "resp": "left",
          "stim": "＜＜＜＜＜",
          "condition": "congruent"
        },
        {
          "resp": "left",
          "stim": "＜＜＜＜＜",
          "condition": "congruent"
        },
        {
          "resp": "left",
          "stim": "＜＜＜＜＜",
          "condition": "congruent"
        },
        {
          "resp": "left",
          "stim": "＜＜＜＜＜",
          "condition": "congruent"
        },
        {
          "resp": "left",
          "stim": "＜＜＜＜＜",
          "condition": "congruent"
        },
        {
          "resp": "left",
          "stim": "＜＜＜＜＜",
          "condition": "congruent"
        },
        {
          "resp": "left",
          "stim": "＜＜＜＜＜",
          "condition": "congruent"
        },
        {
          "resp": "left",
          "stim": "＜＜＜＜＜",
          "condition": "congruent"
        },
        {
          "resp": "left",
          "stim": "＞＞＜＞＞",
          "condition": "incongruent"
        },
        {
          "resp": "left",
          "stim": "＞＞＜＞＞",
          "condition": "incongruent"
        },
        {
          "resp": "left",
          "stim": "＞＞＜＞＞",
          "condition": "incongruent"
        },
        {
          "resp": "left",
          "stim": "＞＞＜＞＞",
          "condition": "incongruent"
        },
        {
          "resp": "left",
          "stim": "＞＞＜＞＞",
          "condition": "incongruent"
        },
        {
          "resp": "left",
          "stim": "＞＞＜＞＞",
          "condition": "incongruent"
        },
        {
          "resp": "left",
          "stim": "＞＞＜＞＞",
          "condition": "incongruent"
        },
        {
          "resp": "left",
          "stim": "＞＞＜＞＞",
          "condition": "incongruent"
        },
        {
          "resp": "left",
          "stim": "＞＞＜＞＞",
          "condition": "incongruent"
        },
        {
          "resp": "left",
          "stim": "＞＞＜＞＞",
          "condition": "incongruent"
        },
        {
          "resp": "right",
          "stim": "＞＞＞＞＞",
          "condition": "congruent"
        },
        {
          "resp": "right",
          "stim": "＞＞＞＞＞",
          "condition": "congruent"
        },
        {
          "resp": "right",
          "stim": "＞＞＞＞＞",
          "condition": "congruent"
        },
        {
          "resp": "right",
          "stim": "＞＞＞＞＞",
          "condition": "congruent"
        },
        {
          "resp": "right",
          "stim": "＞＞＞＞＞",
          "condition": "congruent"
        },
        {
          "resp": "right",
          "stim": "＞＞＞＞＞",
          "condition": "congruent"
        },
        {
          "resp": "right",
          "stim": "＞＞＞＞＞",
          "condition": "congruent"
        },
        {
          "resp": "right",
          "stim": "＞＞＞＞＞",
          "condition": "congruent"
        },
        {
          "resp": "right",
          "stim": "＞＞＞＞＞",
          "condition": "congruent"
        },
        {
          "resp": "right",
          "stim": "＞＞＞＞＞",
          "condition": "congruent"
        },
        {
          "resp": "right",
          "stim": "＜＜＞＜＜",
          "condition": "incongruent"
        },
        {
          "resp": "right",
          "stim": "＜＜＞＜＜",
          "condition": "incongruent"
        },
        {
          "resp": "right",
          "stim": "＜＜＞＜＜",
          "condition": "incongruent"
        },
        {
          "resp": "right",
          "stim": "＜＜＞＜＜",
          "condition": "incongruent"
        },
        {
          "resp": "right",
          "stim": "＜＜＞＜＜",
          "condition": "incongruent"
        },
        {
          "resp": "right",
          "stim": "＜＜＞＜＜",
          "condition": "incongruent"
        },
        {
          "resp": "right",
          "stim": "＜＜＞＜＜",
          "condition": "incongruent"
        },
        {
          "resp": "right",
          "stim": "＜＜＞＜＜",
          "condition": "incongruent"
        },
        {
          "resp": "right",
          "stim": "＜＜＞＜＜",
          "condition": "incongruent"
        },
        {
          "resp": "right",
          "stim": "＜＜＞＜＜",
          "condition": "incongruent"
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
      "title": "flankerTask",
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
                "width": 32,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "＋",
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
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 650.91,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${this.parameters.stim}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
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
              "keypress(f)": "left",
              "keypress(j)": "right"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "stimulus",
            "correctResponse": "${this.parameters.resp}"
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
      "submitButtonText": "結果のダウンロード→",
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