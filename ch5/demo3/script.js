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
      "filePrefix": "5-survey2-scripts-demo",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "5-survey2-scripts-demo",
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
          "label": "実験・調査への参加に同意いただけますか？同意いただける方 はチェックをお願いします。同意いただけない方は， ESC を押 した後，ウィンドウを閉じてください。",
          "options": [
            {
              "label": "上記の説明をよく読み，理解した上で，実験・調査への参加に 同意します。",
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
          "type": "text"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
// Text/Instructions
this.options.items.push({
          "type": "text",
           "title": "調査",
           "content": "以下の文章を読んで，あなたにどの程度当てはまるかどうかを回答してください。当てはまる選択肢を選ぶことで回答を行って下さい。"
        })

// Multiple choice
const items = [
  '個人的な問題について考え続けるせいで，寝付きにくいことがよくある', 
  '私は心をかき乱す思考を避けられないことがよくある', 
  '誰かが私を不当に非難しても，「その人が正しいかもしれない 」と考えずにはいられない', 
  'ストレスを感じたとしても，なんとか自分の思考を制御できる', 
  '私はいつも自分の考えや行動を非難している', 
  'どれだけ小さなことだとしても，挫折は私を打ちのめす', 
  'あることについて考えないようにしようと決めたとき，大抵は成功する', 
  '特定のことについて考えるのをやめることは，私にとって非常にたやすい', 
  '「恥ずかしい経験」，または「面倒な経験」，あるいは「苦痛な経験」の後には，「心配な気分」または「イライラした気分」，あるいは「悲しい気分」を長い間感じる', 
  'わずらわしい思考から抜け出すことは私にとって簡単だ', 
  '私の心を頻繁に支配する考え，あるいはイメージがいくつかある', 
  '私の過去には，思い出さずにはいられないネガティブなことがいくつかある', 
  '私は，数日間は(恋人，両親，友達などとの)喧嘩を頭から追い出すことができない', 
  '私はポジティブ感情やネガティブ感情を制御することが得意だと思う', 
  '私が私の考えを制御するというよりは，私の考えが私を制御している', 
  '頭に入ってくることを避けられない思考がある', 
  '私の思考は制御することができない', 
  '私は普段は嫌な思考によって打ちのめされることはない', 
  '私はいくつかの思考（例，「私はダメだ」，「私は役に立たない」，「私には得意なことは何もない」など）から抜け出すことができない', 
  '怒ったり，誰かと喧嘩したりした時は，そのことについて考えるのをやめられず，集中したり，仕事（勉強）したりすることがほとんどできない', 
  '私は，ほとんど苦労することなく，「不快な思考」あるいは「不快なイメージ」を頭から追い出す', 
  '私は忍耐強く，冷静さを簡単に失ったりはしない'
];

//各項目と尺度名を配列に格納
var itemsArray = [];
var itemNO;

for(let i = 0; i < items.length; i++){
  itemNO = i + 1;
  itemsArray.push(
    {
      "label": items[i],
      "name": "TCAQ"+itemNO
    }
  )
}

//ランダム順にする場合に並び替え（ランダムにする場合はコメントを消してください）
//itemsArray = this.random.shuffle(itemsArray)

//選択肢
for (let i = 0; i < items.length; i++){
itemNO = i+1;
  this.options.items.push({
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1.まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2.あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3.どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4.やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5.かなり当てはまる",
              "coding": "5"
            }
          ],
          "label": itemNO +". "+ itemsArray[i].label,
          "name": itemsArray[i].name,
          "shuffle": false
        })
}

// Raw HTML
this.options.items.push({
          "type": "html",
          "content": "<div class=\"content-horizontal-center\"><button>次へ</button></div>"
        })

this.options.submitButtonPosition = 'hidden';
}
      },
      "title": "questionnaire"
    }
  ]
})

// Let's go!
study.run()