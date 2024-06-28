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
h1.textContent = '世界の天気';                            
div.insertAdjacentElement('beforeend', h1);

div.style.textEmphasis ='black';

let div1 = document.querySelector('div#result');     
let h2 = document.createElement('h2');                
h2.textContent = '北京市';                            
div1.insertAdjacentElement('beforeend', h2);

let div2 = document.querySelector('div#result');
let p1 = document.createElement('p'); 
let photo1 = document.createElement('img'); 
photo1.setAttribute('src', 'project-html/Beijing.jpg');
p1.insertAdjacentElement('beforeend', photo1);
div2.insertAdjacentElement('beforeend', p1);


//<div id="zentai">
let div3 = document.querySelector('div#result');
let zentai = document.createElement('div');
zentai.setAttribute('id', 'zentai1');
div3.insertAdjacentElement('beforeend', zentai);


//<div id="box">
let div11 = document.querySelector('div#zentai1');  
let box1 = document.createElement('div');
box1.setAttribute('id', 'box');
   
let h11 = document.createElement('h2');                
h11.textContent = '経緯度';                            
div11.insertAdjacentElement('beforeend', h11);






