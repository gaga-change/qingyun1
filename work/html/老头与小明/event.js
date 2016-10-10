"use strict"
var NOW_DATE=new Date();//当前时间
var MEAT=0; //肉价
var WEATER=0;//水价
var WINE=0;//酒价
var ALL_EVENT=new Array();
var NUMBER=0;

//得到购物的事件（添加按钮）
function addEvent(){
	//获取时间
	var year=document.getElementById("select_year").options[document.getElementById("select_year").selectedIndex].value;
	var month=document.getElementById("select_mon").options[document.getElementById("select_mon").selectedIndex].value;
	var day=document.getElementById("select_day").options[document.getElementById("select_day").selectedIndex].value;
	var hour=document.getElementById("select_hour").options[document.getElementById("select_hour").selectedIndex].value;
	var minute=document.getElementById("select_minute").options[document.getElementById("select_minute").selectedIndex].value;
	var tempDate=new Date();
	tempDate.setFullYear(year,month-1,day);
	tempDate.setHours(hour,minute,0);
	//获取钱  和 各个物品数量
	var money=(parseInt(document.getElementById("set_money").value)).toFixed(2);
	if(money<0||isNaN(money))money=0;
	var meatNum=(parseFloat(document.getElementById("meat_num").value)).toFixed(2);
	var weaterNum=parseInt(document.getElementById("weater_num").value);
	var wineNum=parseInt(document.getElementById("wine_num").value);
	if(meatNum<0||isNaN(meatNum)){meatNum=0;}
	if(weaterNum<0||isNaN(weaterNum)){weaterNum=0;}
	if(wineNum<0||isNaN(wineNum)){wineNum=0;}
	// 如果钱不过，报提示
	console.log(MEAT);
	console.log(meatNum);
	if(money<(meatNum*MEAT+weaterNum*WEATER+wineNum*WINE)){
		document.getElementById("show_money_err").innerText="当下这物价，我算了，钱是不够的，你自己去买";
		return;
	}
	//钱太多,报提示
	if(money>11111111){
		document.getElementById("show_money_err").innerText="喂,精神病院吗......"
		return;	
	}
	//如果时间不对，报提示
	if(NOW_DATE>tempDate){
		document.getElementById("show_money_err").innerText="我没有时光机";
		return;
	}
	//所有东西都没0
	if( meatNum==0 && wineNum==0 && weaterNum==0){
		document.getElementById("show_money_err").innerText="逗我玩?";
		return;
	}
	var buyEvent=new BuyEvent(NOW_DATE,tempDate,money,meatNum,weaterNum,wineNum);

	//把数据添加到表格中
	NUMBER++;
	buyEvent.NUM=NUMBER;
	ALL_EVENT.push(buyEvent); //把购物事件对象放入数组中
	var newTr=document.createElement("tr");
	var innerText="<td>"+dateToString(buyEvent.nowDate)+"</td><td>"+dateToString(buyEvent.waitDate)+"</td><td>"+buyEvent.money+"</td><td>"+buyEvent.meatNum+"</td><td>"+buyEvent.weaterNum+"</td><td>"+buyEvent.wineNum+"</td><td >等待中</td><td><input type='button' value='删除' title="+ALL_EVENT.length+" onclick='delTr(this)' ></td>";
	newTr.innerHTML=innerText;
	document.getElementById("show_message_table").appendChild(newTr);
	
	//显示表格
	show(beauty.showMessage,true);
	//错误提示归空
	document.getElementById("show_money_err").innerText="";
}


function BuyEvent(nowDate,waitDate,money,meatNum,weaterNum,wineNum){
	this.nowDate=nowDate;
	this.waitDate=waitDate;
	this.money=money;
	this.meatNum=meatNum;
	this.weaterNum=weaterNum;
	this.wineNum=wineNum;
	this.NUM;
	this.isPast=false;
}

BuyEvent.prototype.getId=function(){
	return ("num_"+NUM);
}

// 显示当前的日期和时间
function load(){
	init();
	setInterval(function(){
	// console.log("fd");
		NOW_DATE=new Date();
		document.getElementById("show_now_year").innerHTML=NOW_DATE.getFullYear();
		document.getElementById("show_now_month").innerHTML=addZero(NOW_DATE.getMonth()+1);
		document.getElementById("show_now_day").innerHTML=addZero(NOW_DATE.getDate());
		document.getElementById("show_now_hour").innerHTML=addZero(NOW_DATE.getHours());
		document.getElementById("show_now_minute").innerHTML=addZero(NOW_DATE.getMinutes());
		document.getElementById("show_now_second").innerHTML=addZero(NOW_DATE.getSeconds());
		//获取事件对象的数组，循环和现在时间比较，如果时间到就进行处理
		for (var i = 0; i < ALL_EVENT.length; i++) {
			if(ALL_EVENT[i].waitDate<NOW_DATE && !(ALL_EVENT[i].isPast)){  //当定时的时间到了
				// 获取table中的所有tr  第一个tr是标题
				var trs=document.getElementById("show_message_table").getElementsByTagName("tr");
				//当前对象 ALL_EVENT[i]   对应的tr  trs[i+1]
				var tempEle=ALL_EVENT[i];
				var tempTr=trs[i+1];
				var text="";
				//判断当前市场，钱还够不够
				var money=tempEle.money;
				var allMoney=tempEle.meatNum*MEAT+tempEle.weaterNum*WEATER+tempEle.wineNum*WINE;
				if(money<allMoney){
					text="涨价了，没买";
				}else{
					if(money==allMoney){
						text="买好了，钱刚刚好！";
					}else{
						text="买好了,还剩"+(money-allMoney)+"元";
					}
					
				}
				(tempTr.getElementsByTagName("td"))[6].innerHTML=text;
				tempEle.isPast=true;
			}
		};
	},500);
}
//当数字小于10时，自动添加一个0
function addZero(num){
	if(num<10){
		return "0"+num;
	}
	return num;
}


//删除tr标签
function delTr(id){
	ALL_EVENT=ALL_EVENT.delArrId(id.title-1);
	id.parentNode.parentNode.remove();
}
//把时间转换为字符串
function dateToString(date){
	return(date.getFullYear()+"/"+date.getMonth()+"/"+date.getDate()+" "+date.getHours()+":"+date.getMinutes());
}
//删除数组中指定的位置，返回一个新的数组。自身不变化
Array.prototype.delArrId=function(num){
	var temp=new Array();
	var len=0;
	for(var i=0;i<this.length;i++){
		if(num==i)continue;
		temp[len]=this[i];
		len++;
	}
	return temp;
}






