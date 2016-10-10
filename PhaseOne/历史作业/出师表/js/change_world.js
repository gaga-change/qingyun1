var waitDate=new Date();
var SET_TIMEOUT=true;
window.onload=function() {
	tttt=setTimeout(function(){
		if(SET_TIMEOUT){
			console.log("hiddenOrShow");
			document.getElementById("change_title_button").style.visibility="hidden";
		}
	},3000);
	//隐藏主题
	var ul=document.getElementById("mian_title_ul");
	ul.style.visibility="hidden";
	ul.style.position="absolute";

	// 给前5个样式隐藏
	IMGS.map(function (ele,index){
		// document.querySelector("#"+ele.cssId).sheet.disabled=true;
		document.querySelector("#"+ele.cssId).sheet.disabled=true;
		return ele;
	});
	// 给5张小图片设置背景
	var imgs=document.getElementById("mian_title_ul").getElementsByTagName("img");
	IMGS.map(function (ele,index){
		imgs[index].src=ele.getUrl();
		return ele;
	});
	// 给5张图片底下设置标题
	var imgs=document.getElementById("mian_title_ul").getElementsByTagName("span");
	IMGS.map(function (ele,index){
		imgs[index].innerHTML=ele.title;
		return ele;
	});


}
//更改主题
function changeImg(index){
	index--;
	document.getElementById("show_big_img").src=IMGS[index].getBigUrl();
	IMGS.map(function (ele,ind){
		if(ind==index){
			document.querySelector("#"+ele.cssId).sheet.disabled=false;
		}else{
			document.querySelector("#"+ele.cssId).sheet.disabled=true;
		}
		return ele;
	});
}
//显示或者隐藏主题
function hiddenOrShow(id){
	console.log("id:"+id.value);
	if(id.value=="更换主题"){
		id.value="隐藏主题";
		var ul=document.getElementById("mian_title_ul");
		ul.style.visibility="visible";
		ul.style.position="static";

		//把按钮改为可显示
		id.style.visibility="visible";
		// console.log(tttt);
		// clearTimeout(tttt);//关掉父亲的自动隐藏
		SET_TIMEOUT=false;
		
	}else{
		id.value="更换主题";
		var ul=document.getElementById("mian_title_ul");
		ul.style.visibility="hidden";
		ul.style.position="absolute";
		//3秒后自动隐藏
		SET_TIMEOUT=true;
		tttt=setTimeout(function(){
			if(SET_TIMEOUT){
				console.log("hiddenOrShow");
				document.getElementById("change_title_button").style.visibility="hidden";
			}
		},3000);
	}

}
//显示或者隐藏 更换主题的按钮
function showChanteButton(){
	var val=document.getElementById("change_title_button").value;
	document.getElementById("change_title_button").style.visibility="visible";

	tttt=setTimeout(function(){
		if(SET_TIMEOUT){
			console.log("hiddenOrShow");
			document.getElementById("change_title_button").style.visibility="hidden";
		}
	},3000);

}