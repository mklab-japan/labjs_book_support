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
      "filePrefix": "14-old-new-recognition-task",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "14-old-new-recognition-task",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "participantID": "${this.random.range(0,1000000)}"
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
//刺激リスト
const listA = ['リンゴ', 'バッタ']
const listB = ['ブドウ', 'チョウ']

//参加者番号
const participantID =this.parameters.participantID

//セット
const itemSet = participantID % 2

//パラメータへの割り当て
//参加者番号が偶数の時にlistAの各値をitemパラメータに代入
if(itemSet == 0)
{
  for(let item of listA)
  {
    this.options.templateParameters.push({item: item})
  }
}
//参加者番号が奇数数の時にlistBの各値をitemパラメータに代入
else if(itemSet == 1)
{
  for(let item of listB)
  {
    this.options.templateParameters.push({item: item})
  }
}

}
            },
            "title": "learningPhase",
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
//刺激リスト
const listA = ['リンゴ', 'バッタ']
const listB = ['ブドウ', 'チョウ']

//参加者番号
const participantID = this.parameters.participantID

//セット
const itemSet = participantID % 2

//パラメータへの割り当て
//参加者番号が偶数の時にlistAの各値をitemパラメータに代入
if(itemSet == 0)
{
	//oldリスト
	for(let item of listA)
	{
		this.options.templateParameters.push({item: item, itemType: 'old'})
	}

	//newリスト
	for(let item of listB)
	{
		this.options.templateParameters.push({item: item, itemType: 'new'})
	}

}
//参加者番号が奇数数の時にlistBの各値をitemパラメータに代入
else if(itemSet == 1)
{
	//oldリスト
	for(let item of listB)
	{
this.options.templateParameters.push({item: item, itemType: 'old'})
	}

	//newリスト
	for(let item of listA)
	{
		this.options.templateParameters.push({item: item, itemType: 'new'})
	}

}
}
            },
            "title": "recognitionPhase",
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
          }
        ]
      }
    }
  ]
})

// Let's go!
study.run()