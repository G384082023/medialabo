/*let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};
*/


////////// 課題3-2 ここからプログラムを書こう

//print(data);
let city = [
  ["360630",'project-html/Cairo.jpg'],
  ["524901",'project-html/Moscow.jpg'],
  ["993800",'project-html/Johannesburg.jpg'],
  ["1816670",'project-html/Beijing.jpg'],
  ["1850147",'project-html/Tokyo.jpg'],
  ["1880252",'project-html/Singapore.jpg'],
  ["2147714",'project-html/Sydney.jpg'],
  ["2643743",'project-html/London.jpg'],
  ["2968815",'project-html/Paris.jpg'],
  ["3451189",'project-html/RiodeJaneiro.jpg'],
  ["5128581",'project-html/NewYork.jpg'],
  ["5368361",'project-html/LosAngeles.jpg'],
]

function print(data){
  
}


/*console.log("都市名 : " + data.name);
console.log("緯度 : " + data.coord.lon);
console.log("経度 : " + data.coord.lat);

console.log("天気 : " + data.weather[0].description);

console.log("最低気温 : " + data.main.temp_min);
console.log("最高気温 : " + data.main.temp_max);

console.log("湿度 : " + data.main.humidity);
console.log("風速 : " + data.wind.speed);
console.log("風向 : " + data.wind.deg);

let b = document.querySelector('button#btn');
b.addEventListener('click', showSelectResult);

function showSelectResult() {
    let s = document.querySelector('select#select');
    let idx = s.selectedIndex;  // idx 番目の option が選択された

    let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
    let o = os.item(idx);       // os の idx 番目の要素

    console.log('選択された ' + idx + ' 番目の option の情報:');
    console.log('  value=' + o.getAttribute('value'));  // id 属性を表示
    console.log('  textContent='+o.textContent);
}*/

let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);

var body = document.querySelector('body');

function changeBackground(backgroundUrl) {
  body.style.backgroundImage = 'url(' + backgroundUrl + ')';
}


// 通信を開始する処理
function sendRequest() {
    let i = document.querySelector('select[id="select"]');
    let n = i.value;
    let id = city[n][0];
    console.log("緯度 : " + id);
    // URL を設定
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/"+id+".json";
    changeBackground(city[n][1]);

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    print(data);
    console.log("都市名 : " + data.name);
    let city = document.querySelector('h3#city');
    city.textContent = data.name;

    console.log("緯度 : " + data.coord.lon);
    let ido = document.querySelector('li#ido');
    ido.textContent = "緯度 : " +data.coord.lon;
    console.log("経度 : " + data.coord.lat);
    let keido = document.querySelector('li#keido');
    keido.textContent = "経度 : " +data.coord.lat;

    console.log("天気 : " + data.weather[0].description);
    let tenki = document.querySelector('li#tenki');
    tenki.textContent = "天気 : " + data.weather[0].description;

    console.log("最低気温 : " + data.main.temp_min);
    let saiteikion = document.querySelector('li#saitei');
    saiteikion.textContent = "最低気温 : " +data.main.temp_min;
    console.log("最高気温 : " + data.main.temp_max);
    let saikoukion = document.querySelector('li#saikou');
    saikoukion.textContent = "最高気温 : " +data.main.temp_max;

    console.log("湿度 : " + data.main.humidity);
    let shitudo = document.querySelector('li#shitudo');
    shitudo.textContent = "湿度 : " +data.main.humidity;
    console.log("風速 : " + data.wind.speed);
    let fuusoku = document.querySelector('li#fuusoku');
    fuusoku.textContent = "風速 : " +data.wind.speed;
    console.log("風向 : " + data.wind.deg);
    let fuukou = document.querySelector('li#fuukou');
    fuukou.textContent = "風向 : " +data.wind.deg;
    

    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

//課題4-2: オブジェクトをページ上に表示する!!!
/*
let div = document.querySelector('div#result');     
let h1 = document.createElement('h1');                
h1.textContent = '世界の天気（検索結果1件）';                            
div.insertAdjacentElement('beforeend', h1);

//div.style.textEmphasis ='black';

let div1 = document.querySelector('div#result');     
let h2 = document.createElement('h2');                
h2.textContent = '検索キー:button';                            
div1.insertAdjacentElement('beforeend', h2);

let div2 = document.querySelector('div#result');
let h3 = document.createElement('h3'); 
h3.textContent = '北京';   
div2.insertAdjacentElement('beforeend', h3);

let div3 = document.querySelector('div#result');
let ul = document.createElement('ul');

let li1 = document.createElement('li');
li1.textContent =  '都市名: 北京市';
ul.insertAdjacentElement('beforeend',li1);

let li2 = document.createElement('li');
li2.textContent =  '緯度: 116.3972';
ul.insertAdjacentElement('beforeend',li2);

let li3 = document.createElement('li');
li3.textContent =  '経度: 39.9075';
ul.insertAdjacentElement('beforeend',li3);

let li4 = document.createElement('li');
li4.textContent =  '曇りがち';
ul.insertAdjacentElement('beforeend',li4);

let li5 = document.createElement('li');
li5.textContent =  '最低気温: 9.94';
ul.insertAdjacentElement('beforeend',li5);

let li6 = document.createElement('li');
li6.textContent =  '最高気温: 9.94';
ul.insertAdjacentElement('beforeend',li6);

let li7 = document.createElement('li');
li7.textContent =  '湿度: 14';
ul.insertAdjacentElement('beforeend',li7);

let li8 = document.createElement('li');
li8.textContent =  '風速: 2.65';
ul.insertAdjacentElement('beforeend',li8);

let li9 = document.createElement('li');
li9.textContent =  '風向: 197';
ul.insertAdjacentElement('beforeend',li9);

div3.insertAdjacentElement('beforeend', ul); 
*/





   


   






