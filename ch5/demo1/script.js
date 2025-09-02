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
      "filePrefix": "5-survey1-demo",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "5 survey1 demo",
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
          "title": "本実験・調査の目的",
          "content": "本実験・調査の実施責任者は○○大学○○学部の○○○○です。本実験・調査への参加はあなたの任意によるものです。"
        },
        {
          "required": true,
          "type": "text",
          "title": "1. 本実験・調査の目的",
          "content": "○○○○について調べることが本実験・調査の目的です。"
        },
        {
          "required": true,
          "type": "text",
          "title": "2. 本実験・調査の手続き",
          "content": "もし，あなたが本実験・調査に参加にした場合，あなたは○○○○をしていただきます。この実験・調査の所要時間は約○○分程度です。"
        },
        {
          "required": true,
          "type": "text",
          "title": "3. 潜在的なリスク・苦痛など",
          "content": "実験・調査による多少の疲労は除き，潜在的なリスクや苦痛はありません。また，いつ，いかなる理由でも，自由に実験を中止していただけます（6.参加と中止もご参照ください）。"
        },
        {
          "required": true,
          "type": "text",
          "title": "4. 参加による利益",
          "content": "あなたが本実験・調査に参加することで学習，認知，感情についての研究の発展に繋がります。"
        },
        {
          "required": true,
          "type": "text",
          "title": "5. 匿名性の確保",
          "content": "本実験・調査によって得られた情報は法律による開示請求を除き，匿名性が維持されます。匿名性は実験参加者番号の付与，統計的解析によって保たれます。収集されたデータについては，個人が特定できる形で公表されることは決してありません。二次分析などのため個人を特定できない形で個人データを公開する場合があります。加えて，統計的に処理されたデータを学会発表や論文として公表する場合があります。"
        },
        {
          "required": true,
          "type": "text",
          "title": "6. 参加と中止",
          "content": "あなたは本実験・調査への参加もしくは不参加を自由に選択できます。また，参加した場合でも，いつでも，どのような理由でも，途中で実験・調査を中止することができます。もし，途中で実験・調査を中止したくなった場合は，「ESCキー」を押した後，ウィンドウを閉じることで実験・調査を中止できます。"
        },
        {
          "required": true,
          "type": "text",
          "title": "7. 実験・調査実施者への問い合わせ",
          "content": "本実験・調査に対して質問がある場合は，実施責任者にお問い合わせください。"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "実験・調査への参加に同意いただけますか？同意いただける方はチェックをお願いします。同意いただけない方は，ESC を押した後，ウィンドウを閉じてください。",
          "options": [
            {
              "label": "上記の説明をよく読み，理解した上で，実験・調査への参加に同意します。",
              "coding": "yes"
            }
          ],
          "name": "IC"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "informedConsent"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "input",
          "label": "年齢",
          "attributes": {
            "type": "number",
            "min": "18",
            "max": "99"
          },
          "help": "年齢を半角数字で入力してください",
          "name": "age"
        },
        {
          "required": false,
          "type": "input",
          "label": "性別",
          "name": "sex",
          "help": "あなたの性別を入力してください"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "demographic"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "以下の質問文を読んでいただき，あなたにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
        },
        {
          "required": true,
          "type": "radio",
          "label": " 1. あなたは，猫について，どのように感じていますか？",
          "options": [
            {
              "label": "1. 非常に嫌い",
              "coding": "1"
            },
            {
              "label": "2. 嫌い",
              "coding": "2"
            },
            {
              "label": "3. どちらでもない",
              "coding": "3"
            },
            {
              "label": "4. 好き",
              "coding": "4"
            },
            {
              "label": "5. 非常に好き",
              "coding": "5"
            }
          ],
          "name": "Q1"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. 非常に嫌い",
              "coding": "1"
            },
            {
              "label": "2. 嫌い",
              "coding": "2"
            },
            {
              "label": "3. どちらでもない",
              "coding": "3"
            },
            {
              "label": "4. 好き",
              "coding": "4"
            },
            {
              "label": "5. 非常に好き",
              "coding": "5"
            }
          ],
          "label": " 2. あなたは，犬について，どのように感じていますか？",
          "name": "Q2"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "questionnaire"
    }
  ]
})

// Let's go!
study.run()