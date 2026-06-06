document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('omikuji-btn');
  const resultText = document.getElementById('omikuji-result');
  const box = document.getElementById('omikuji-box');

  // おみくじの結果リスト（エンジニアあるある）
  const fortunes = [
    "大吉 🌟「今日書くコードは1発で動くでしょう。神ビルドの予感。」",
    "吉 👍「スタックオーバーフローで見つけたコードがそのまま使えそう。」",
    "中吉 🎉「GitHubのコンフリクトが綺麗に解消するでしょう。」",
    "小吉 ☕「エラーメッセージをAIに投げたら一瞬で解決する日。」",
    "末吉 💻「仕様変更の連絡が来ますが、大した変更ではなさそうです。」",
    "凶 🐛「セミコロンの付け忘れ、または全角スペースの呪いに注意！」"
  ];

  btn.addEventListener('click', () => {
    // 1. ボタンを一時的に無効化（アニメーション中の連打防止）
    btn.disabled = true;
    resultText.textContent = "おみくじを振っています...";

    // 2. 箱に「shake（揺れる）」クラスを追加してアニメーション開始
    box.classList.add('shake');

    // 3. アニメーションが終わる頃（0.5秒後）に結果を表示
    setTimeout(() => {
      // クラスを外す（次回また動かせるようにするため）
      box.classList.remove('shake');

      // ランダムに結果を選ぶ
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      resultText.textContent = fortunes[randomIndex];

      // 4. 「本日はここまで」感を出すために、ボタンを完全に無効化
      btn.textContent = "今日の運勢は決まりました！";
    }, 500); // 500ミリ秒 = 0.5秒
  });
});
