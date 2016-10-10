console.log(KEYS);
var fat=document.getElementById("show_but");
var showKeyEle=document.getElementById("show_key");
var textArea=document.querySelector("textarea");
console.log(textArea.value);

// showKey(0);
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
// 输入框的输入事件
function verify(event){
	// console.log("范德萨");
	event.target.value=textArea.value.replace(/QINGYUN/g,"*******");	
}

// oninput="verify(this)"
textArea.addEventListener("focus",showKeyBoard,false);
textArea.addEventListener("blur",hiddenKeyBoard,false);
textArea.addEventListener("input",verify,false);

// 切换不同的按键
function showKey(event,i){
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
var as=document.querySelectorAll("ul a");
for (var i = 0; i < as.length; i++) {
	as[i].addEventListener("click",function(i){
		var a=0;
		return function (event){
			showKey(event,i);
		};
	}(i),false);
};




