let data = {
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

////////// 課題3-2 ここからプログラムを書こう


console.log("都市名 : " + data.name);
console.log("緯度 : " + data.coord.lon);
console.log("経度 : " + data.coord.lat);

console.log("天気 : " + data.weather[0].description);

console.log("最低気温 : " + data.main.temp_min);
console.log("最高気温 : " + data.main.temp_max);

console.log("湿度 : " + data.main.humidity);
console.log("風速 : " + data.wind.speed);
console.log("風向 : " + data.wind.deg);


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

/*let li2 = document.createElement('li');
li2.textContent =  '経度: 39.9075';
let li3 = document.createElement('li');
li3.textContent =  '経度: 39.9075';
let li4 = document.createElement('li');
li4.textContent =  '経度: 39.9075';
let li5 = document.createElement('li');
li5.textContent =  '経度: 39.9075';
let li6 = document.createElement('li');
li6.textContent =  '経度: 39.9075';
let li7 = document.createElement('li');
li7.textContent =  '経度: 39.9075';
let li8 = document.createElement('li');
li8.textContent =  '経度: 39.9075';
let li9 = document.createElement('li');
li9.textContent =  '経度: 39.9075';
li1.insertAdjacentElement('afterend', li2);
li2.insertAdjacentElement('afterend', li3);
li3.insertAdjacentElement('afterend', li4);  
li4.insertAdjacentElement('afterend', li5);  
li5.insertAdjacentElement('afterend', li6);  
li6.insertAdjacentElement('afterend', li7);  
li7.insertAdjacentElement('afterend', li8);  
li8.insertAdjacentElement('afterend', li9);
ul.insertAdjacentElement('afterend', li8);  
div3.insertAdjacentElement('afterend', ul);   */    

/*
let p1 = document.createElement('p'); 
let photo1 = document.createElement('img'); 
photo1.setAttribute('src', 'project-html/Beijing.jpg');
p1.insertAdjacentElement('beforeend', photo1);
div2.insertAdjacentElement('beforeend', p1);


//<div id="zentai">
let div3 = document.querySelector('div#result');
let zentai = document.createElement('div');
zentai.setAttribute('id', 'zentai');
div3.insertAdjacentElement('beforeend', zentai);


//<div id="box"> box1
let div11 = document.querySelector('div#zentai');  
let box1 = document.createElement('div');
box1.setAttribute('id', 'box1');
let h11 = document.createElement('h2');                
h11.textContent = '経緯度';

let ul1 = document.createElement('ul');
let li1 = document.createElement('li');
li1.textContent =  '緯度: 116.3972';
let li2 = document.createElement('li');
li2.textContent =  '経度: 39.9075';
li1.insertAdjacentElement('beforeend', li2);  
ul1.insertAdjacentElement('beforeend', li1);  
h11.insertAdjacentElement('beforeend', ul1);
box1.insertAdjacentElement('beforeend', h11);

div11.insertAdjacentElement('beforeend', box1);



//box2

let div12 = document.querySelector('div#box1');  
let box2 = document.createElement('div');
box2.setAttribute('id', 'box2');
let h21 = document.createElement('h2');                
h21.textContent = '天気';

let b = document.createElement('b');
b.textContent= '曇りがち';

h21.insertAdjacentElement('beforeend', b);
box2.insertAdjacentElement('beforeend', h21);

div12.insertAdjacentElement('afterend', box2);
*/



   


   






