console.log(KEYS);
var fat=document.getElementById("show_but");
var showKeyEle=document.getElementById("show_key");
var textArea=document.querySelector("textarea");
console.log(textArea.value);

showKey(0);
//文档加载
window.onload=function(){
	console.log(showKeyEle);
	showKeyEle.style.visibility="hidden";
}
//显示键盘
function showKeyBoard(){
	showKeyEle.style.visibility="visible";
}
function hiddenKeyBoard(){
	// showKeyEle.style.visibility="hidden";
}
// 按键的点击事件
function butOnclick(key){
	console.log(key);
	textArea.value+=key;
	textArea.value=textArea.value.replace(/QINGYUN/g,"*******");
}	
// 切换不同的按键
function showKey(i){
	// console.log();
	// textArea.focus();
	KEYS[i].sort(function(){
		return Math.random()-0.5;
	});
	fat.innerHTML="";
	KEYS[i].map(function (ele,index){
		fat.appendChild(ele.getInput());
	});

	var as=document.querySelectorAll("ul a");
	for (var j = 0; j < as.length; j++) {
		if(j==i)
			as[j].style.backgroundColor="aqua";
		else
			as[j].style.backgroundColor="AliceBlue";
	}

}
// 输入框的输入事件
function verify(id){
	// console.log("范德萨");
	id.value=textArea.value.replace(/QINGYUN/g,"*******");	
}

