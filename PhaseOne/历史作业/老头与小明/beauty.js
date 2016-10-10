MEAT=0; //肉价
WEATER=0;//水价
WINE=0;//酒价
var beauty=new Object();
beauty.setSingleValue=document.getElementById("set_single_value"); //设置单价
beauty.showSingleValue=document.getElementById("show_single_value");//显示单价
beauty.setTimeAll=document.getElementById("set_time_all"); //设置时间
beauty.setMoney=document.getElementById("set_money_and_num"); //给钱和设置数量
beauty.showMessage=document.getElementById("show_message_all"); //显示信息表格
beauty.showErrValue=document.getElementById("show_date_err");//显示设置单价错误
beauty.showErrMoney=document.getElementById("show_money_err");//显示设置钱财错误
function beautyInit () {
	// position: absolute;
	// beauty.setSingleValue.style.visibility="hidden";
	// beauty.setSingleValue.style.position="absolute";
	// beauty.showErrValue.style.visibility="hidden";

	beauty.showSingleValue.style.visibility="hidden";
	beauty.showSingleValue.style.position="absolute";

	beauty.setTimeAll.style.visibility="hidden";
	beauty.setTimeAll.style.position="absolute";

	beauty.setMoney.style.visibility="hidden";
	beauty.setMoney.style.position="absolute";
	beauty.showErrMoney.style.visibility="hidden";

	beauty.showMessage.style.visibility="hidden";
	beauty.showMessage.style.position="absolute";

	// beauty.singleValue.style.visibility="visible";
	// beauty.singleValue.style.position="static";
}
function setButton (){
	var innerText="";
	var meat=(parseFloat(document.getElementById("set_meat_value").value)).toFixed(2);
	var weater=(parseFloat(document.getElementById("set_weater_value").value)).toFixed(2);
	var wine=(parseFloat(document.getElementById("set_wine_value").value)).toFixed(2);
	if(meat<0||weater<0||meat<0){
		innerText="小明说他不信商店会倒贴";
	}
	if(meat>11111111110||weater>1111111110||meat>1111111111110){
		innerText="小明已报警";
	}
	if(innerText!=""){
		document.getElementById("show_date_err").innerText=innerText;
		return;
	}
	MEAT=meat;
	WEATER=weater;
	WINE=wine;
	if(isNaN(meat)||meat==0){
		meat="肉：免费";
		MEAT=0;
	}else{
		meat="肉："+meat+"元/斤";
	}
	if(isNaN(weater)||weater==0){
		weater="水：免费";
		WEATER=0;
	}else{
		weater="水："+weater+"元/瓶";
	}
	if(isNaN(wine)||wine==0){
		wine="酒：免费";
		WINE=0;
	}else{
		wine="酒："+wine+"元/瓶";
	}
	document.getElementById("show_meat_value").innerHTML=meat;
	document.getElementById("show_weater_value").innerHTML=weater;
	document.getElementById("show_wine_value").innerHTML=wine;
	show(beauty.setSingleValue,false);
	showErr(beauty.showErrValue,false)

	show(beauty.showSingleValue,true);
	show(beauty.setTimeAll,true);
	show(beauty.setMoney,true);
	showErr(beauty.showErrMoney,true);

	show(beauty.showMessage,false);
	//错误信息归空
	document.getElementById("show_date_err").innerText="";
}
function moidifyButton(){
	show(beauty.setSingleValue,true);
	showErr(beauty.showErrValue,true)

	show(beauty.showSingleValue,false);
	show(beauty.setTimeAll,false);
	show(beauty.setMoney,false);
	showErr(beauty.showErrMoney,false);

	show(beauty.showMessage,false);
}

function show(id,num){
	if(num){
		id.style.visibility="visible";
		id.style.position="static";
	}else{
		id.style.visibility="hidden";
		id.style.position="absolute";
	}
}
function showErr(id,num){
	if(num){
		id.style.visibility="visible";
	}else{
		id.style.visibility="hidden";
	}
}

