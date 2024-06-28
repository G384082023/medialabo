let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 1;
let yoso=4;

const button = document.querySelector("button");

button.addEventListener("click", guess);

let span1 = document.querySelector('span#kaisu');
let p1 = document.createElement('a');
p1.textContent = kaisu;
span1.insertAdjacentElement('afterend' , p1);

let span2 = document.querySelector('span#answer');
let p2 = document.createElement('a');
p2.textContent = kotae;
span2.insertAdjacentElement('afterend' , p2);

//let w = document.querySelector('p#result');
//w.remove();

  if(yoso === kotae){
    let result = document.querySelector('p#result'); 
    let a = document.createElement('a');            
    a.textContent = '正解です．おめでとう!';
    result.insertAdjacentElement('beforeend', a);

  }else if(yoso > kotae){
    let result = document.querySelector('p#result'); 
    let a = document.createElement('a');            
    a.textContent = 'まちがい．答えはもっと小さいですよ';
    result.insertAdjacentElement('beforeend', a);

  }else if(yoso < kotae){
    let result = document.querySelector('p#result'); 
    let a = document.createElement('a');            
    a.textContent = 'まちがい．答えはもっと大きいですよ';
    result.insertAdjacentElement('beforeend', a);

  }

hantei();
hantei();
hantei();
hantei();
function guess() {
  const name = prompt();
  button.textContent = `回答`;
}



// 入力回数（予想回数）

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする



// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  yoso =4;
  console.log(kaisu+'回目の予想:' +yoso);
  if(kaisu < 3){
    if(yoso === kotae){
        console.log('正解です．おめでとう!');
        kaisu = 4;
    }else if(yoso > kotae){
        console.log('まちがい．答えはもっと小さいですよ');
    }else if(yoso < kotae){
        console.log('まちがい．答えはもっと大きいですよ');
    }
  }else if(kaisu === 3){
    console.log('まちがい．残念でした答えは '+ kotae +'です．');
  }else if(kaisu > 3){
    console.log('答えは'+kotae+'でした．すでにゲームは終わっています');
  }

  kaisu++;

  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}