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
      "filePrefix": "5-survey2-demo",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "5 survey2 demo",
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
          "type": "text",
          "content": "以下の文章を読んで，あなたにどの程度当てはまるかどうかを回答してください。当てはまる選択肢を選ぶことで回答を行って下さい。"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "label": "1. 個人的な問題について考え続けるせいで，寝付きにくいことがよくある",
          "name": "TCAQ1"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "label": "2. 私は心をかき乱す思考を避けられないことがよくある",
          "name": "TCAQ2"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "name": "TCAQ3",
          "label": "3. 誰かが私を不当に非難しても，「その人が正しいかもしれない 」と考えずにはいられない"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "name": "TCAQ4",
          "label": " 4. ストレスを感じたとしても，なんとか自分の思考を制御できる"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "name": "TCAQ5",
          "label": "5. 私はいつも自分の考えや行動を非難している"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "name": "TCAQ6",
          "label": "6. どれだけ小さなことだとしても，挫折は私を打ちのめす "
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "name": "TCAQ7",
          "label": "7. あることについて考えないようにしようと決めたとき，大抵は成功する"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "name": "TCAQ8",
          "label": "8. 特定のことについて考えるのをやめることは，私にとって非常にたやすい"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "name": "TCAQ9",
          "label": "9. 「恥ずかしい経験」，または「面倒な経験」，あるいは「苦痛な経験」の後には，「心配な気分」または「イライラした気分」，あるいは「悲しい気分」を長い間感じる"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "name": "TCAQ10",
          "label": "10. わずらわしい思考から抜け出すことは私にとって簡単だ"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "name": "TCAQ11",
          "label": "11. 私の心を頻繁に支配する考え，あるいはイメージがいくつかある"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "name": "TCAQ12",
          "label": "12. 私の過去には，思い出さずにはいられないネガティブなことがいくつかある"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "name": "TCAQ13",
          "label": "13. 私は，数日間は(恋人，両親，友達などとの)喧嘩を頭から追い出すことができない"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "name": "TCAQ14",
          "label": "14. 私はポジティブ感情やネガティブ感情を制御することが得意だと思う"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "name": "TCAQ15",
          "label": "15. 私が私の考えを制御するというよりは，私の考えが私を制御している"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "name": "TCAQ16",
          "label": "16. 頭に入ってくることを避けられない思考がある"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "name": "TCAQ17",
          "label": "17. 私の思考は制御することができない"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "name": "TCAQ18",
          "label": "18. 私は普段は嫌な思考によって打ちのめされることはない"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "name": "TCAQ19",
          "label": "19. 私はいくつかの思考（例，「私はダメだ」，「私は役に立たない」，「私には得意なことは何もない」など）から抜け出すことができない"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "name": "TCAQ20",
          "label": "20. 怒ったり，誰かと喧嘩したりした時は，そのことについて考えるのをやめられず，集中したり，仕事（勉強）したりすることがほとんどできない"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "name": "TCAQ21",
          "label": "21. 私は，ほとんど苦労することなく，「不快な思考」あるいは「不快なイメージ」を頭から追い出す"
        },
        {
          "required": true,
          "type": "radio",
          "label": "22. 私は忍耐強く，冷静さを簡単に失ったりはしない",
          "options": [
            {
              "label": "1. まったく当てはまらない",
              "coding": "1"
            },
            {
              "label": "2. あまり当てはまらない",
              "coding": "2"
            },
            {
              "label": "3. どちらともいえない",
              "coding": "3"
            },
            {
              "label": "4. やや当てはまる",
              "coding": "4"
            },
            {
              "label": "5. かなり当てはまる",
              "coding": "5"
            }
          ],
          "name": "TCAQ22"
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