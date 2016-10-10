console.log("select");
function init(){
	var nowDate=new Date();
	var innerText="";
	for (var i = nowDate.getFullYear(); i < nowDate.getFullYear()+20; i++) {
		innerText+=("<option value="+i+">"+i+"</option>");
	};
	// console.log(innerText);
	document.getElementById("select_year").innerHTML=innerText;

	innerText="";
	for (var i = 1; i <= 12; i++) {
		innerText+=("<option value="+i+">"+i+"</option>");
	}
	document.getElementById("select_mon").innerHTML=innerText;

	innerText="";
	for (var i = 0; i <= 23; i++) {
		innerText+=("<option value="+i+">"+i+"</option>");
	}
	document.getElementById("select_hour").innerHTML=innerText;
	innerText="";
	for (var i = 0; i <= 59; i++) {
		innerText+=("<option value="+i+">"+i+"</option>");
	}
	document.getElementById("select_minute").innerHTML=innerText;

	setSelectDay(nowDate.getFullYear(),nowDate.getMonth()+1);

	// console.log(innerText);
	
	// console.log(new Date().getMonth());
	document.getElementById("select_mon").options[nowDate.getMonth()]
		.selected="selected";
	document.getElementById("select_day").options[nowDate.getDate()-1]
		.selected="selected";

}
function showSelect(){
	var year=document.getElementById("select_year").options[document.getElementById("select_year").selectedIndex].value;
	var mon=document.getElementById("select_mon").options[document.getElementById("select_mon").selectedIndex].value;
	console.log(year);
	console.log(mon);
	setSelectDay(year,mon);

}
function setSelectDay(year,mon){
	var tempDate=new Date();
	tempDate.setFullYear(year,mon-1,1);
	tempDate.setMonth(tempDate.getMonth()+1);
	console.log(tempDate);
	tempDate.setDate(tempDate.getDate()-1)
	console.log(tempDate);
	num=tempDate.getDate();

	var innerText="";
	for (var i = 1; i <= num; i++) {
		innerText+=("<option value="+i+">"+i+"</option>");
	}
	document.getElementById("select_day").innerHTML=innerText;
}