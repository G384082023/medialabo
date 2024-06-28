//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let h2 = document.querySelector('h2#ex42');
let p = document.createElement('p');
p.textContent = '写真表と都市の緯度経度のページです';
h2.insertAdjacentElement('afterend' , p);

p.style.textEmphasis ='sesame green';

// 練習4-3 写真表作成プログラム
let div1 = document.querySelector('div#phototable');
let p1 = document.createElement('p'); //p 要素を作成
let photo1 = document.createElement('img'); //img 要素を作成
photo1.setAttribute('src', 'taro.png');//img 要素の src 属性を設定
p1.insertAdjacentElement('beforeend', photo1);//p 要素の中の最後に img 要素を追加
div1.insertAdjacentElement('beforeend', p1);//div#phototable の中の最後に p 要素を追加

let div2 = document.querySelector('div#phototable');
let p2 = document.createElement('p'); 
let photo2 = document.createElement('img'); 
photo2.setAttribute('src', 'jiro.png');
p2.insertAdjacentElement('beforeend', photo2);
div2.insertAdjacentElement('beforeend', p2);

let div3 = document.querySelector('div#phototable');
let p3 = document.createElement('p'); 
let photo3 = document.createElement('img'); 
photo3.setAttribute('src', 'hanako.png');
p3.insertAdjacentElement('beforeend', photo3);
div3.insertAdjacentElement('beforeend', p3);
// 練習4-4 箇条書き削除プログラム
let w = document.querySelectorAll('ul#location > li');
for (let n of w) {
    n.remove();
}  

// 練習4-5 箇条書き追加プログラム
let x =document.querySelector('ul#location');
for(let n of data){
	let li = document.createElement('li');
	li.textContent = n.name +"... 緯度:" +n.lat +", 経度: " +n.lng;
	x.insertAdjacentElement('beforeend', li);       
}     

