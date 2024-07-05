let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;
let yoso;

let b1 = document.querySelector('button#kaito');
b1.addEventListener('click', hantei);
function hantei() {
  if(kaisu >=0 && kaisu <=2){
      if(kaisu == 0){
      kaisu =1;
      //3行消し
      let w = document.querySelector('p#result > span');
      w.remove();
    }
    let i = document.querySelector('input[name="number"]');
    let number = i.value;       // ユーザが記入した文字列
    yoso= number;
    console.log(kaisu+'回目の予想:' +yoso);
    

  //何回(回数)の入力
  let span1 = document.querySelector('span#kaisu');
  span1.textContent = kaisu;
  //予想数の入力
  let span2 = document.querySelector('span#answer');
  span2.textContent = number;

  if(yoso == kotae){
    let result = document.querySelector('p#result');         
    result.textContent = '正解です．おめでとう!';
    console.log('正解です．おめでとう!');
    kaisu = 5;

  }else if(yoso > kotae){
    let result = document.querySelector('p#result');      
    result.textContent = 'まちがい．答えはもっと小さいですよ';
    console.log('まちがい．答えはもっと小さいですよ');
    kaisu ++;

  }else if(yoso < kotae){
    let result = document.querySelector('p#result');          
    result.textContent = 'まちがい．答えはもっと大きいですよ';
    console.log('まちがい．答えはもっと大きいですよ');
    
    kaisu ++;
  }

  }else if(kaisu == 3){
    let i = document.querySelector('input[name="number"]');
    let number = i.value;       // ユーザが記入した文字列
    yoso= number;
    let span1 = document.querySelector('span#kaisu');
    span1.textContent = kaisu;
    let span2 = document.querySelector('span#answer');
    span2.textContent = number;
    console.log(kaisu+'回目の予想:' +yoso);
    console.log('まちがい．残念でした答えは '+ kotae +'です．');
    let result = document.querySelector('p#result');          
    result.textContent = 'まちがい．残念でした答えは '+ kotae +'です．';
    kaisu ++;
  }else if(kaisu >= 3){
    let i = document.querySelector('input[name="number"]');
    let number = i.value;       // ユーザが記入した文字列
    yoso= number;
    let span1 = document.querySelector('span#kaisu');
    span1.textContent = kaisu;
    let span2 = document.querySelector('span#answer');
    span2.textContent = number;
    
    console.log(kaisu+'回目の予想:' +yoso);
    console.log('答えは'+kotae+'でした．すでにゲームは終わっています');
    let result = document.querySelector('p#result');          
    result.textContent = '答えは'+kotae+'でした．すでにゲームは終わっています';
    kaisu++;
  }
}


/*



//将来ここに判定結果を表示します


// 入力回数（予想回数）

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
// 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する



// ボタンを押した後の処理をする関数 hantei() の定義


  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  */