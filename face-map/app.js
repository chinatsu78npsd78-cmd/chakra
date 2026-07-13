"use strict";

const CHAKRAS = {
  1: { name: "第1チャクラ", color: "#b94c55", theme: "安心・安全・土台・手放し" },
  2: { name: "第2チャクラ", color: "#d47a3d", theme: "感情・受け取る力・喜び・創造性" },
  3: { name: "第3チャクラ", color: "#c6a13b", theme: "選択・意志・消化・境界線" },
  4: { name: "第4チャクラ", color: "#4c9075", theme: "呼吸・愛・つながり・許し" },
  5: { name: "第5チャクラ", color: "#4c8dad", theme: "本音・言葉・聴く力・自己表現" },
  6: { name: "第6チャクラ", color: "#5968a3", theme: "直感・洞察・思考整理・見通す力" },
  7: { name: "第7チャクラ", color: "#81679f", theme: "統合・信頼・手放し・高次との接続" },
  8: { name: "第8チャクラ", color: "#a56f8b", theme: "使命・魂の目的・大きな流れ" }
};

const SIDE_INFO = {
  right: {
    badge: "本人の右",
    title: "男性性・陽・外側",
    keywords: "父性・社会・仕事・行動・論理・与える・責任・現実化",
    reading: "本人の右側に硬さや違和感がある時は、「決める・動く・背負う・結果を出す」側に力が入り続けているのかもしれません。過去に身につけた行動パターンや、これから外の世界で形にしていく未来も重ねて見ます。"
  },
  left: {
    badge: "本人の左",
    title: "女性性・陰・内側",
    keywords: "母性・家庭・感情・受け取る・直感・記憶・潜在意識・育つ未来",
    reading: "本人の左側に硬さや違和感がある時は、「感じる・受け取る・甘える・守られる」ことに慎重さがあるのかもしれません。母系的な記憶や感情の過去、まだ内側で静かに育っている未来も重ねて見ます。"
  },
  center: {
    badge: "中央",
    title: "現在・自分軸・統合",
    keywords: "今ここ・中心軸・自己一致・左右の統合",
    reading: "中央ラインの硬さは、今の自分を保つために中心を固めてきた跡かもしれません。左右どちらかに決めるより、行動する力と受け取る力を今ここで整えるテーマとして見ます。"
  }
};

const PALETTE = {
  head: "#789d91",
  liver: "#c6a34a",
  water: "#668ca8",
  breath: "#5d9a87",
  digestion: "#d08a55",
  heart: "#bc6f78",
  hormone: "#a97798",
  voice: "#5a8fad"
};

const ZONES = [
  {
    id: "hairline",
    group: "額",
    name: "髪の生え際",
    short: "生え際",
    organs: ["腎", "膀胱", "大腸", "頭部の巡り"],
    muscle: "前頭筋",
    body: "排出、水分代謝、頭の使いすぎ、睡眠、汗や整髪料など外側の刺激を一緒に見ます。",
    hardness: "硬さは、休む前にも頭で全体を管理し、安心を確かめてきた跡として見ます。",
    energy: "不要になったものを手放し、思考を身体へ戻す準備の場所かもしれません。",
    chakras: [1, 2, 6, 7],
    question: "もう考え続けなくても大丈夫だとしたら、今いちばん休ませたいことは何ですか。",
    color: PALETTE.head,
    spots: [{ side: "center", x: 33, y: 17.5, w: 34, h: 6.5, radius: "45% 45% 30% 30%", showLabel: true }]
  },
  {
    id: "upper-forehead",
    group: "額",
    name: "額上部",
    short: "額上部",
    organs: ["腎", "大腸", "膀胱"],
    muscle: "前頭筋",
    body: "便通や排出、水分代謝、疲労、睡眠、首肩の緊張を振り返る入口です。",
    hardness: "硬さは、力を抜く前に頭で安全確認を続けてきたサインとして見ます。",
    energy: "土台の安心と、抱えてきたものを少しずつ手放すテーマが重なるかもしれません。",
    chakras: [1, 2, 6, 7],
    question: "最近、頭の中で管理し続けていたことはありますか。",
    color: PALETTE.water,
    spots: [{ side: "center", x: 35, y: 23, w: 30, h: 9, radius: "35% 35% 45% 45%", showLabel: true }]
  },
  {
    id: "center-forehead",
    group: "額",
    name: "額中央",
    short: "額中央",
    organs: ["心", "小腸", "血管系"],
    muscle: "前頭筋",
    body: "情報や感情の消化吸収、血流、睡眠、精神的な疲れ、考えすぎを見ます。",
    hardness: "硬さは、たくさん受け取った情報や感情を、間違えないように選別している状態かもしれません。",
    energy: "正解を探し続ける力をゆるめ、心で感じたことを信頼する準備として見ます。",
    chakras: [3, 4, 6],
    question: "頭ではなく心に聞くと、今どんな答えが浮かびますか。",
    color: PALETTE.heart,
    spots: [{ side: "center", x: 37, y: 31, w: 26, h: 8, radius: "42%", showLabel: true }]
  },
  {
    id: "lower-forehead",
    group: "額",
    name: "額下部・眉上",
    short: "眉上",
    organs: ["肝", "胆のう", "目"],
    muscle: "前頭筋・皺眉筋",
    body: "巡り、飲酒や油もの、睡眠、目の疲れ、判断疲れを見ます。",
    hardness: "硬さは、我慢しながら計画し、前へ進む力を使い続けてきた跡かもしれません。",
    energy: "怒りを悪者にせず、本当はどうしたかったのかを受け取る場所として見ます。",
    chakras: [3, 6],
    question: "我慢の奥に、本当はどうしたかったという気持ちがありますか。",
    color: PALETTE.liver,
    spots: [
      { side: "right", x: 29.5, y: 38.2, w: 20, h: 6.3, radius: "50% 35% 40% 45%", rotate: -4, showLabel: true },
      { side: "left", x: 50.5, y: 38.2, w: 20, h: 6.3, radius: "35% 50% 45% 40%", rotate: 4, showLabel: true }
    ]
  },
  {
    id: "glabella",
    group: "眉間",
    name: "眉間",
    short: "眉間",
    organs: ["肺", "肝", "心", "自律神経", "下垂体"],
    muscle: "皺眉筋・鼻根筋",
    body: "呼吸の浅さ、ストレス処理、眉間の力み、自律神経、考えすぎを見ます。",
    hardness: "硬さは、正解を探しながら、見たくなかった本音を守ってきた跡として見ます。",
    energy: "思考と直感の間に少し余白をつくり、見えているものをそのまま受け取るテーマかもしれません。",
    chakras: [3, 4, 6],
    question: "正解を出さなくていいなら、今の本音は何と言っていますか。",
    color: PALETTE.liver,
    spots: [{ side: "center", x: 46.3, y: 39, w: 7.4, h: 9.5, radius: "48%", showLabel: true }]
  },
  {
    id: "temples",
    group: "目まわり",
    name: "こめかみ",
    short: "こめかみ",
    organs: ["胆のう", "三焦", "膵臓"],
    muscle: "側頭筋",
    body: "決断疲れ、噛みしめ、油もの、消化、睡眠、頭痛につながる負荷を見ます。",
    hardness: "硬さは、判断と我慢を同時に抱え、次の一手を考え続けてきた状態かもしれません。",
    energy: "急いで決めるより、自分にとって心地よい方向を感じ直す場所として見ます。",
    chakras: [3, 5, 6],
    question: "すぐに決めなくていいとしたら、どちらの方向に身体がゆるみますか。",
    color: PALETTE.liver,
    spots: [
      { side: "right", x: 22.5, y: 39.5, w: 12, h: 13, radius: "45%" },
      { side: "left", x: 65.5, y: 39.5, w: 12, h: 13, radius: "45%" }
    ]
  },
  {
    id: "eyes",
    group: "目まわり",
    name: "まぶた・目頭・目尻",
    short: "目まわり",
    organs: ["肝", "腎", "胆のう", "心", "神経系"],
    muscle: "眼輪筋",
    body: "眼精疲労、乾燥、睡眠、水分代謝、アレルギー、見張り続ける緊張を見ます。",
    hardness: "硬さは、目で頑張り、先を読み、周囲を見張り続けてきた跡かもしれません。",
    energy: "見たくなかったことや、見逃してはいけないと感じてきた世界をやさしく緩めるテーマです。",
    chakras: [2, 3, 4, 6],
    question: "もう見張らなくても大丈夫だとしたら、目の前の景色はどう変わりますか。",
    color: PALETTE.water,
    spots: [
      { side: "right", x: 30.5, y: 44.2, w: 19, h: 8.5, radius: "50%", showLabel: true },
      { side: "left", x: 50.5, y: 44.2, w: 19, h: 8.5, radius: "50%", showLabel: true }
    ]
  },
  {
    id: "under-eyes",
    group: "目まわり",
    name: "目の下",
    short: "目の下",
    organs: ["腎", "膀胱", "水分代謝"],
    muscle: "眼輪筋",
    body: "深い疲れ、冷え、睡眠不足、くま、むくみ、水分の巡りを見ます。",
    hardness: "硬さやむくみは、流す前に感情や疲れを身体が抱えている状態かもしれません。",
    energy: "頑張るために温存してきた生命力を、休息で満たし直すテーマとして見ます。",
    chakras: [1, 2, 6],
    question: "身体が安心して休めるために、今日は何を減らせそうですか。",
    color: PALETTE.water,
    spots: [
      { side: "right", x: 31.5, y: 50, w: 18, h: 7, radius: "45% 45% 55% 55%" },
      { side: "left", x: 50.5, y: 50, w: 18, h: 7, radius: "45% 45% 55% 55%" }
    ]
  },
  {
    id: "nose-bridge",
    group: "鼻",
    name: "山根・鼻筋",
    short: "鼻筋",
    organs: ["心", "肝", "肺", "脾胃", "自律神経"],
    muscle: "鼻筋・鼻根筋",
    body: "中心軸、呼吸、血流、消化、自律神経、思考と感情の通り道を見ます。",
    hardness: "硬さは、気持ちと現実をまっすぐ通すために、中心を固めてきた状態かもしれません。",
    energy: "自分の意思と呼吸を一致させ、焦らず中心へ戻る場所として見ます。",
    chakras: [3, 4, 6],
    question: "深く息をした時、自分の中心はどちらへ進みたいと感じますか。",
    color: PALETTE.heart,
    spots: [{ side: "center", x: 46.5, y: 46, w: 7, h: 16.5, radius: "42%", showLabel: true }]
  },
  {
    id: "nose-tip",
    group: "鼻",
    name: "鼻先",
    short: "鼻先",
    organs: ["心", "脾胃"],
    muscle: "鼻筋",
    body: "熱感、血流、皮脂、緊張、胃腸の負担を見ます。",
    hardness: "赤みや硬さは、頑張る熱や、受け取ったものを消化している途中のサインかもしれません。",
    energy: "胸の思いを現実へ運ぶ前に、呼吸と気持ちを整える中心点として見ます。",
    chakras: [3, 4],
    question: "いま胸の中にある気持ちは、どんな呼吸を求めていますか。",
    color: PALETTE.heart,
    spots: [{ side: "center", x: 45.3, y: 60.3, w: 9.4, h: 7.2, radius: "50%" }]
  },
  {
    id: "nose-wings",
    group: "鼻",
    name: "小鼻・鼻翼",
    short: "小鼻",
    organs: ["胃", "脾", "膵臓", "大腸", "肺"],
    muscle: "鼻筋・上唇鼻翼挙筋",
    body: "消化、甘いものや油もの、皮脂、毛穴、呼吸、溜め込みを見ます。",
    hardness: "硬さや赤みは、頑張りの熱と、まだ消化しきれていないものが重なっているのかもしれません。",
    energy: "受け取ったものを全部抱えず、自分に必要なものだけを取り込むテーマです。",
    chakras: [2, 3, 4],
    question: "受け取ったものの中で、本当に自分に必要なのはどれですか。",
    color: PALETTE.digestion,
    spots: [
      { side: "right", x: 39.5, y: 59.8, w: 10.5, h: 8.8, radius: "48%" },
      { side: "left", x: 50, y: 59.8, w: 10.5, h: 8.8, radius: "48%" }
    ]
  },
  {
    id: "upper-cheeks",
    group: "頬",
    name: "頬上部",
    short: "頬上",
    organs: ["胃", "腎"],
    muscle: "小頬骨筋・大頬骨筋",
    body: "消化、水分代謝、冷え、疲れ、睡眠、対人疲労を見ます。",
    hardness: "硬さは、笑顔で頑張りながら、受け取ったものを内側で消化してきた跡かもしれません。",
    energy: "人に合わせる優しさを、自分にも向け直す場所として見ます。",
    chakras: [2, 3, 4],
    question: "人に向けてきた優しさを、今日は自分へどう返してあげたいですか。",
    color: PALETTE.digestion,
    spots: [
      { side: "right", x: 25.5, y: 51.5, w: 22, h: 12, radius: "42%", showLabel: true },
      { side: "left", x: 52.5, y: 51.5, w: 22, h: 12, radius: "42%", showLabel: true }
    ]
  },
  {
    id: "center-cheeks",
    group: "頬",
    name: "頬中央",
    short: "頬中央",
    organs: ["肺", "胃", "大腸", "脾"],
    muscle: "大頬骨筋・頬筋",
    body: "呼吸、皮膚、消化、排出、むくみ、対人ストレスを見ます。",
    hardness: "硬さは、本当は休みたい時も明るく振る舞い、空気を読んできた跡かもしれません。",
    energy: "悲しみや溜め込みを、深い呼吸とともに外へ流すテーマとして見ます。",
    chakras: [2, 3, 4],
    question: "笑顔で頑張る前の、本当の気持ちはどんな表情をしていますか。",
    color: PALETTE.breath,
    spots: [
      { side: "right", x: 24.5, y: 58.2, w: 23.5, h: 14.5, radius: "42%", showLabel: true },
      { side: "left", x: 52, y: 58.2, w: 23.5, h: 14.5, radius: "42%", showLabel: true }
    ]
  },
  {
    id: "outer-cheeks",
    group: "頬",
    name: "頬外側・耳前",
    short: "頬外側",
    organs: ["胆のう", "膵臓", "リンパ", "顎関節"],
    muscle: "咬筋・側頭筋",
    body: "リンパの巡り、冷え、噛みしめ、対人距離、耳や顎まわりの緊張を見ます。",
    hardness: "硬さは、人に合わせるために自分の輪郭を固め、境界線を守ってきた状態かもしれません。",
    energy: "相手を拒絶せずに、自分の心地よい距離を選び直す場所として見ます。",
    chakras: [2, 3, 4, 5],
    question: "誰かに合わせる前に、自分の心地よい距離はどのくらいですか。",
    color: PALETTE.voice,
    spots: [
      { side: "right", x: 21.3, y: 52, w: 14, h: 21, radius: "44%" },
      { side: "left", x: 64.7, y: 52, w: 14, h: 21, radius: "44%" }
    ]
  },
  {
    id: "nasolabial",
    group: "口まわり",
    name: "ほうれい線",
    short: "ほうれい線",
    organs: ["胃", "大腸", "肺"],
    muscle: "上唇鼻翼挙筋・頬筋",
    body: "消化、呼吸、排出、表情のくせ、溜め込みを見ます。",
    hardness: "硬さは、言えなかったことや飲み込んだ感情を、表情で支えてきた跡かもしれません。",
    energy: "役割としての笑顔をゆるめ、自分の自然な表情へ戻るテーマです。",
    chakras: [3, 4, 5],
    question: "役割を外した時、顔はどんな表情に戻りたがっていますか。",
    color: PALETTE.digestion,
    spots: [
      { side: "right", x: 37.5, y: 64, w: 11, h: 9.5, radius: "45%", rotate: 16 },
      { side: "left", x: 51.5, y: 64, w: 11, h: 9.5, radius: "45%", rotate: -16 }
    ]
  },
  {
    id: "philtrum-upper-lip",
    group: "口まわり",
    name: "人中・上唇",
    short: "人中・上唇",
    organs: ["生殖器", "膀胱", "子宮", "卵巣", "心", "胃"],
    muscle: "口輪筋・上唇挙筋",
    body: "ホルモン、生命力、親密さ、栄養、安心、家系のテーマを見ます。",
    hardness: "硬さは、甘える・受け取る・頼ることを、安全かどうか確かめてきた跡かもしれません。",
    energy: "欲しいものを受け取り、生命力を安心して表に出す準備の場所として見ます。",
    chakras: [1, 2, 3, 4, 5],
    question: "本当は受け取りたいのに、遠慮しているものはありますか。",
    color: PALETTE.hormone,
    spots: [
      { side: "center", x: 46.2, y: 67.7, w: 7.6, h: 4.8, radius: "45%" },
      { side: "center", x: 39.7, y: 71, w: 20.6, h: 4.7, radius: "50%", showLabel: true }
    ]
  },
  {
    id: "lower-lip",
    group: "口まわり",
    name: "下唇・口角",
    short: "下唇・口角",
    organs: ["大腸", "胃", "肺", "脾", "肝", "心"],
    muscle: "口輪筋・口角下制筋",
    body: "手放し、呼吸、消化、口元の乾燥、言葉にする前の感情を見ます。",
    hardness: "硬さは、出したいものや言いたいことを、まだ口元で抱えている状態かもしれません。",
    energy: "欲しい・嫌だ・助けてを、安心できる言葉にして外へ出すテーマです。",
    chakras: [2, 3, 4, 5],
    question: "言葉にする前に止めている、いちばん小さな本音は何ですか。",
    color: PALETTE.voice,
    spots: [{ side: "center", x: 39.5, y: 74, w: 21, h: 5.2, radius: "50%", showLabel: true }]
  },
  {
    id: "chin",
    group: "顎",
    name: "顎中央",
    short: "顎",
    organs: ["卵巣", "膀胱", "腎", "大腸", "内分泌"],
    muscle: "オトガイ筋",
    body: "ホルモン、下半身、冷え、水分代謝、排出、自己主張を見ます。",
    hardness: "硬さは、最後にぐっと我慢し、自分が支えれば大丈夫と踏ん張ってきた跡かもしれません。",
    energy: "土台の安心を育てながら、女性性・男性性や生命力を自然に表へ出す場所です。",
    chakras: [1, 2],
    question: "もう一人で踏ん張らなくていいなら、誰に何を頼みたいですか。",
    color: PALETTE.hormone,
    spots: [{ side: "center", x: 39, y: 78.5, w: 22, h: 10, radius: "38% 38% 50% 50%", showLabel: true }]
  },
  {
    id: "jawline",
    group: "顎",
    name: "フェイスライン・エラ",
    short: "フェイスライン",
    organs: ["腎", "リンパ", "ホルモン", "胃", "肝", "喉"],
    muscle: "咬筋・広頚筋",
    body: "噛みしめ、冷え、リンパ、ホルモン、境界線、首肩の緊張を見ます。",
    hardness: "硬さは、飲み込んだ言葉や責任を顎で支え、自分の輪郭を守ってきた跡かもしれません。",
    energy: "他者との境界線を保ちながら、言えなかった本音を安全に取り戻すテーマです。",
    chakras: [1, 2, 3, 5],
    question: "自分を守るために、どこで『ここまで』と言ってあげたいですか。",
    color: PALETTE.voice,
    spots: [
      { side: "right", x: 26, y: 68.5, w: 16, h: 18, radius: "45%", rotate: -20 },
      { side: "left", x: 58, y: 68.5, w: 16, h: 18, radius: "45%", rotate: 20 }
    ]
  },
  {
    id: "neck",
    group: "首",
    name: "顎下・首",
    short: "顎下・首",
    organs: ["甲状腺", "喉", "リンパ", "胸", "膀胱"],
    muscle: "広頚筋・胸鎖乳突筋",
    body: "本音、声、責任、リンパ、胸から喉への通り道、姿勢を見ます。",
    hardness: "硬さは、胸にある感情を言葉にする手前で止め、周囲の声を聞き続けてきた跡かもしれません。",
    energy: "自分の向きを選び、本音を安全な大きさで声にするテーマとして見ます。",
    chakras: [4, 5, 7],
    question: "胸の気持ちを一言だけ声にするなら、何と言いたいですか。",
    color: PALETTE.voice,
    spots: [{ side: "center", x: 39, y: 86, w: 22, h: 12, radius: "18% 18% 40% 40%", showLabel: true }]
  }
];

const MODE_META = {
  organs: { label: "反射区", primary: "反射区として見るもの" },
  muscles: { label: "筋肉", primary: "触れて見る筋肉" },
  sides: { label: "左右差", primary: "左右差のテーマ" },
  chakras: { label: "チャクラ", primary: "関連するエネルギー" }
};

const state = {
  mode: "organs",
  zoneId: "center-forehead",
  side: "center",
  query: ""
};

const elements = {
  faceStage: document.querySelector("#faceStage"),
  overlay: document.querySelector("#faceOverlay"),
  selectionLabel: document.querySelector("#selectionLabel"),
  zoneChips: document.querySelector("#zoneChips"),
  legend: document.querySelector("#mapLegend"),
  search: document.querySelector("#zoneSearch"),
  clearSearch: document.querySelector("#clearSearch"),
  noResults: document.querySelector("#noResults"),
  detailKicker: document.querySelector("#detailKicker"),
  detailTitle: document.querySelector("#detailTitle"),
  sideBadge: document.querySelector("#sideBadge"),
  primaryReading: document.querySelector("#primaryReading"),
  organTags: document.querySelector("#organTags"),
  bodyReading: document.querySelector("#bodyReading"),
  muscleName: document.querySelector("#muscleName"),
  muscleReading: document.querySelector("#muscleReading"),
  energyReading: document.querySelector("#energyReading"),
  sideKeywords: document.querySelector("#sideKeywords"),
  sideReading: document.querySelector("#sideReading"),
  chakraList: document.querySelector("#chakraList"),
  reflectionQuestion: document.querySelector("#reflectionQuestion")
};

function normalize(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[\s・／/、,。()（）]/g, "");
}

function zoneSearchText(zone) {
  const chakras = zone.chakras.map((number) => `${CHAKRAS[number].name}${CHAKRAS[number].theme}`);
  return normalize([
    zone.group,
    zone.name,
    zone.short,
    zone.organs.join(""),
    zone.muscle,
    zone.body,
    zone.energy,
    chakras.join("")
  ].join(""));
}

function isMatch(zone) {
  return !state.query || zoneSearchText(zone).includes(normalize(state.query));
}

function hotspotColor(zone, side) {
  if (state.mode === "muscles") return "#b86f79";
  if (state.mode === "sides") {
    if (side === "right") return "#4f887d";
    if (side === "left") return "#b86f79";
    return "#b18b3f";
  }
  if (state.mode === "chakras") return CHAKRAS[zone.chakras[0]].color;
  return zone.color;
}

function hotspotLabel(zone, side) {
  if (state.mode === "muscles") return zone.muscle.split("・")[0];
  if (state.mode === "sides") return SIDE_INFO[side].badge.replace("本人の", "");
  if (state.mode === "chakras") return zone.chakras.map((number) => `第${number}`).join("・");
  return zone.organs.slice(0, 2).join("・");
}

function renderHotspots() {
  elements.overlay.replaceChildren();

  ZONES.forEach((zone) => {
    zone.spots.forEach((spot, index) => {
      const button = document.createElement("button");
      const selected = zone.id === state.zoneId && spot.side === state.side;
      const area = spot.w * spot.h;
      const zIndex = Math.max(20, 300 - Math.round(area));
      const color = hotspotColor(zone, spot.side);

      button.type = "button";
      button.className = "hotspot";
      if (spot.showLabel) button.classList.add("show-label");
      if (selected) button.classList.add("is-selected");
      if (!isMatch(zone)) button.classList.add("is-filtered-out");
      button.dataset.zone = zone.id;
      button.dataset.side = spot.side;
      button.dataset.spot = String(index);
      button.style.setProperty("--x", `${spot.x}%`);
      button.style.setProperty("--y", `${spot.y}%`);
      button.style.setProperty("--w", `${spot.w}%`);
      button.style.setProperty("--h", `${spot.h}%`);
      button.style.setProperty("--z", String(zIndex));
      button.style.setProperty("--rotate", `${spot.rotate || 0}deg`);
      button.style.setProperty("--radius", spot.radius || "45%");
      button.style.setProperty("--clip", spot.clip || "none");
      button.style.setProperty("--spot-color", color);
      button.title = `${zone.name}（${SIDE_INFO[spot.side].badge}）`;
      button.setAttribute("aria-label", button.title);
      button.setAttribute("aria-pressed", selected ? "true" : "false");

      const label = document.createElement("span");
      label.className = "hotspot-label";
      label.textContent = hotspotLabel(zone, spot.side);
      button.append(label);

      button.addEventListener("click", () => selectZone(zone.id, spot.side));
      elements.overlay.append(button);
    });
  });
}

function renderZoneChips() {
  elements.zoneChips.replaceChildren();
  let matches = 0;

  ZONES.forEach((zone) => {
    const button = document.createElement("button");
    const match = isMatch(zone);
    if (match) matches += 1;
    button.type = "button";
    button.className = "zone-chip";
    button.textContent = zone.short;
    button.hidden = !match;
    button.dataset.zone = zone.id;
    if (zone.id === state.zoneId) button.classList.add("is-selected");
    button.addEventListener("click", () => {
      const firstSpot = zone.spots[0];
      selectZone(zone.id, firstSpot.side);
      document.querySelector(".detail-pane").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    elements.zoneChips.append(button);
  });

  elements.noResults.hidden = matches !== 0;
}

function renderLegend() {
  let items;
  if (state.mode === "sides") {
    items = [
      { label: "本人の右：男性性・陽・外側", color: "#4f887d" },
      { label: "本人の左：女性性・陰・内側", color: "#b86f79" },
      { label: "中央：現在・統合", color: "#b18b3f" }
    ];
  } else if (state.mode === "chakras") {
    items = Object.values(CHAKRAS).map((chakra) => ({ label: chakra.name, color: chakra.color }));
  } else if (state.mode === "muscles") {
    items = [{ label: "硬さ・癒着を、身体が守ってきた跡として見る", color: "#b86f79" }];
  } else {
    items = [
      { label: "巡り・排出", color: PALETTE.head },
      { label: "消化", color: PALETTE.digestion },
      { label: "呼吸", color: PALETTE.breath },
      { label: "ホルモン", color: PALETTE.hormone }
    ];
  }

  elements.legend.replaceChildren(...items.map((item) => {
    const row = document.createElement("span");
    row.className = "legend-item";
    const swatch = document.createElement("span");
    swatch.className = "legend-swatch";
    swatch.style.setProperty("--legend-color", item.color);
    const label = document.createElement("span");
    label.textContent = item.label;
    row.append(swatch, label);
    return row;
  }));
}

function primaryContent(zone, side) {
  if (state.mode === "muscles") {
    return { value: zone.muscle, note: zone.hardness };
  }
  if (state.mode === "sides") {
    return { value: SIDE_INFO[side].title, note: SIDE_INFO[side].keywords };
  }
  if (state.mode === "chakras") {
    return {
      value: zone.chakras.map((number) => CHAKRAS[number].name).join("・"),
      note: zone.chakras.map((number) => CHAKRAS[number].theme).join(" ／ ")
    };
  }
  return { value: zone.organs.join("・"), note: "臓器そのものの異常ではなく、対応テーマを振り返る入口です。" };
}

function renderDetails() {
  const zone = ZONES.find((item) => item.id === state.zoneId) || ZONES[0];
  const side = SIDE_INFO[state.side] ? state.side : zone.spots[0].side;
  const sideInfo = SIDE_INFO[side];
  const primary = primaryContent(zone, side);

  elements.detailKicker.textContent = zone.group;
  elements.detailTitle.textContent = zone.name;
  elements.sideBadge.textContent = sideInfo.badge;
  elements.selectionLabel.textContent = `${zone.name}・${sideInfo.badge}`;
  elements.primaryReading.innerHTML = "";

  const label = document.createElement("span");
  label.className = "primary-label";
  label.textContent = MODE_META[state.mode].primary;
  const value = document.createElement("strong");
  value.textContent = primary.value;
  const note = document.createElement("p");
  note.textContent = primary.note;
  elements.primaryReading.append(label, value, note);

  elements.organTags.replaceChildren(...zone.organs.map((organ) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = organ;
    return tag;
  }));

  elements.bodyReading.textContent = zone.body;
  elements.muscleName.textContent = zone.muscle;
  elements.muscleReading.textContent = zone.hardness;
  elements.energyReading.textContent = zone.energy;
  elements.sideKeywords.textContent = sideInfo.keywords;
  elements.sideReading.textContent = sideInfo.reading;
  elements.reflectionQuestion.textContent = zone.question;

  elements.chakraList.replaceChildren(...zone.chakras.map((number) => {
    const chakra = CHAKRAS[number];
    const row = document.createElement("div");
    row.className = "chakra-row";
    const dot = document.createElement("span");
    dot.className = "chakra-dot";
    dot.style.setProperty("--chakra-color", chakra.color);
    const name = document.createElement("span");
    name.className = "chakra-name";
    name.textContent = chakra.name;
    const theme = document.createElement("span");
    theme.textContent = chakra.theme;
    row.append(dot, name, theme);
    return row;
  }));
}

function updateUrl() {
  const params = new URLSearchParams();
  params.set("zone", state.zoneId);
  params.set("side", state.side);
  params.set("mode", state.mode);
  history.replaceState(null, "", `#${params.toString()}`);
}

function selectZone(zoneId, side) {
  const zone = ZONES.find((item) => item.id === zoneId);
  if (!zone) return;
  const validSide = zone.spots.some((spot) => spot.side === side) ? side : zone.spots[0].side;
  state.zoneId = zoneId;
  state.side = validSide;
  renderHotspots();
  renderZoneChips();
  renderDetails();
  updateUrl();
}

function setMode(mode) {
  if (!MODE_META[mode]) return;
  state.mode = mode;
  elements.faceStage.dataset.mode = mode;
  document.querySelectorAll(".mode-tab").forEach((button) => {
    const active = button.dataset.mode === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  renderHotspots();
  renderLegend();
  renderDetails();
  updateUrl();
}

function applySearch(value) {
  state.query = value.trim();
  renderHotspots();
  renderZoneChips();
}

function readUrlState() {
  if (!location.hash.startsWith("#")) return;
  const params = new URLSearchParams(location.hash.slice(1));
  const zone = ZONES.find((item) => item.id === params.get("zone"));
  const mode = params.get("mode");
  const side = params.get("side");
  if (zone) {
    state.zoneId = zone.id;
    state.side = zone.spots.some((spot) => spot.side === side) ? side : zone.spots[0].side;
  }
  if (MODE_META[mode]) state.mode = mode;
}

document.querySelectorAll(".mode-tab").forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

elements.search.addEventListener("input", (event) => applySearch(event.target.value));
elements.search.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  const firstMatch = ZONES.find(isMatch);
  if (firstMatch) selectZone(firstMatch.id, firstMatch.spots[0].side);
});

elements.clearSearch.addEventListener("click", () => {
  elements.search.value = "";
  elements.search.focus();
  applySearch("");
});

readUrlState();
setMode(state.mode);
selectZone(state.zoneId, state.side);
