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
      "filePrefix": "listmethoddirectedforgetting",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "listMethodDirectedForgetting",
    "description": "",
    "repository": "",
    "contributors": "Masanori Kobayashi"
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "participantID": "${this.random.range(10000,100000)}",
          "": ""
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
      "title": "mainLoop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "mainSequence",
        "content": [
          {
            "type": "lab.flow.Loop",
            "templateParameters": [],
            "sample": {
              "mode": "draw-shuffle"
            },
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
// 1つの単語リストをHTML形式に変換する関数（アロー関数）
const listToHTML = (itemList) => {
  let htmlString = "<p>";
  for (const item of itemList) {
    htmlString += item + "<br>";
  }
  htmlString += "</p>";
  return htmlString;
};

// 2つのリストと条件を受け取り、HTMLと一緒に1件のtrialオブジェクトを返す関数
const makeList = (firstList, secondList, condition) => {

  const shuffledFirst = this.random.shuffle(firstList);
  const shuffledSecond = this.random.shuffle(secondList);

  return [{
    firstListHTML: listToHTML(shuffledFirst),
    secondListHTML: listToHTML(shuffledSecond),
    condition: condition
  }];
};

// 参加者番号からセットを決定
const participantID = this.parameters.participantID;
const set = participantID % 4;

// 単語リスト
const listA = ["Apple", "Water", "Light"];
const listB = ["Table", "Green", "Watch"];

let trials = [];

// 条件分岐でリストの順番と条件を決定
switch (set) {
  case 0:
    trials = makeList(listA, listB, "remember");
    break;
  case 1:
    trials = makeList(listB, listA, "remember");
    break;
  case 2:
    trials = makeList(listA, listB, "forget");
    break;
  case 3:
    trials = makeList(listB, listA, "forget");
    break;
  default:
    console.warn("予期しない set 値: " + set);
    break;
}

// trial を this.options.templateParameters に追加
for (const trial of trials) {
  this.options.templateParameters.push(trial);
}

}
            },
            "title": "task",
            "tardy": true,
            "shuffleGroups": [],
            "template": {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "phases",
              "content": [
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "learningPhase",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "title": "これから提示される単語を記憶してください！",
                          "content": "5秒後に自動的に始まります。"
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
                      "title": "firstListInstruction",
                      "timeout": "5000"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cdiv class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Ch2\u003E+\u003C\u002Fh2\u003E\n\u003C\u002Fdiv\u003E",
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
                          "content": "\u003Cdiv class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Ch2\u003E${this.parameters.firstListHTML}\u003C\u002Fh2\u003E\n\u003C\u002Fdiv\u003E",
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
                      "title": "firstList",
                      "timeout": "5000"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "title": "${this.parameters.condition == \"remember\"? \"次に提示される単語も記憶してください！\" : \"先ほどの単語は忘れて，これから提示される単語「だけ」を覚えてください！\"}",
                          "content": "10秒後に自動的に始まります。"
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
                      "title": "secondListInstruction",
                      "timeout": "5000"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cdiv class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Ch2\u003E+\u003C\u002Fh2\u003E\n\u003C\u002Fdiv\u003E",
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
                          "content": "\u003Cdiv class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Ch2\u003E${this.parameters.secondListHTML}\u003C\u002Fh2\u003E\n\u003C\u002Fdiv\u003E",
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
                      "title": "secondList",
                      "timeout": "5000"
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "recallPhase",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "title": "この実験中に提示されたすべての単語を思い出して入力してください（30秒以内）。",
                          "content": "${this.parameters.condition == \"forget\"? \"＊忘れるよう指示された単語も含めて思い出してください\" : \" \"}"
                        },
                        {
                          "required": false,
                          "type": "textarea",
                          "label": "回答欄",
                          "help": "単語は「，」で区切って入力してください（例. psychology, memory）。",
                          "name": "response"
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
                      "title": "recall",
                      "timeout": "30000"
                    }
                  ]
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
      }
    }
  ]
})

// Let's go!
study.run()