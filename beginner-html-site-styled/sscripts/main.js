let myHeading = document.querySelector('h1')
myHeading.textContent = 'hello world!';
console.log("走了")
let numArr = ['第一个数字',1,'第二个数组'];
let x = 3;
let y = 4;
let z = x+y;
let result = z === 20;
function multiply(num1,num2){
	let result = num1*num2;
	return result;
}
let mu = multiply(3,10);
let s = '30' + 20;
let n = '30' - 20;
 let myImg = document.querySelector('img');
 myImg.onclick = function(){
	 let mysrc = myImg.getAttribute('src');
	 if (mysrc === 'images/firefox-icon.png'){
		 myImg.setAttribute('src','images/展示A.gif');
	 }else{
		 myImg.setAttribute('src',images/firefox-icon.png);
	 }
 }
 let mybutton = document.querySelector('button');
 function setuserName(){
	 let myName = prompt('输入名字');
	 if(!myName || myName === null)
	 setuserName();
	 else{
	 localStorage.setItem('name',myName);
	 myHeading.textContent = '你真好啊yuyu，' + myName;
	 }
 }
 /*第一次进来*/
 if (!localStorage.getItem('name')) {
	 setuserName();
 } else {
	 let storeName = localStorage.getItem('name');
	 myHeading.textContent = '你真好啊，' + storeName;
 }
 mybutton.onclick = function(){
	 setuserName();
 }
