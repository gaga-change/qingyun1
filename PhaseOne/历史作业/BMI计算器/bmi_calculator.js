
function init(){
	document.getElementById("check_china").checked="checked";
	initLi();
}
function initLi(){
	document.getElementById("one_row").style.visibility="hidden";
	document.getElementById("two_row").style.visibility="hidden";
	document.getElementById("three_row").style.visibility="hidden";
	document.getElementById("four_row").style.visibility="hidden";
}
function calculate(){
	initLi();
	sortTr();
	var height=parseFloat(document.getElementById("height").value);
	var weight=parseFloat(document.getElementById("weight").value);
	if (isNaN(height)&&(isNaN(weight))) {
		alert("身高和体重不要为空呀!( ⊙ o ⊙ )！");
		return;
	}
	measure_one=document.getElementById("measure_height").innerHTML;
	measure_two=document.getElementById("measure_weight").innerHTML;
	// console.log(height+measure_one.substr(measure_one.length-2));
	var show_height=height+measure_one.substr(measure_one.length-2);
	var show_weight=weight+measure_two.substr(measure_two.length-2);
	var measure=document.getElementById("check_china").checked;
	if(!measure){
		height=height*2.54;
		weight=weight*0.4535924;
	}
	var sum=(Math.round((weight/(height*height))*100000))/10;
	// document.getElementById("show").innerHTML=sum;
	document.getElementById("you_bmi").innerHTML=sum;
	document.getElementById("you_body").innerHTML=getBody(sum);
	var showPersonElement=document.getElementById("you_message");
	showPersonElement.style.visibility="visible";
	showPersonElement.style.position="relative";
	showRow(sum);
	//插入记录
	var show_all_ele=document.getElementById("show_all");
	var nowTr=show_all_ele.getElementsByTagName("tr");
	var number=nowTr.length;
	var nowDay=new Date().toLocaleDateString();  

	var innerText="<td>"+number+"</td>";
	innerText+="<td>"+nowDay+"</td>";
	innerText+="<td>"+show_height+"</td>";
	innerText+="<td>"+show_weight+"</td>";
	innerText+="<td>"+sum+"</td>";
	innerText+="<td><a style='cursor:pointer' onclick='deleteTr(this)'>删除</a></td>";
	var para=document.createElement("tr");
	para.innerHTML=innerText;
	// para.appendChild(node);
	show_all_ele.appendChild(para);
	// alert(innerText);
}
function changeToEnglishMeasure(){
	document.getElementById("measure_height").innerHTML="英寸 in";
	document.getElementById("measure_weight").innerHTML="磅 lb";
}
function changeToChineseMeasure(){
	document.getElementById("measure_height").innerHTML="厘米 cm";
	document.getElementById("measure_weight").innerHTML="千克 kg";
}
function getBody(sum){
	if(sum<=18.4)return "偏瘦";
	if(sum>=18.5&&sum<=23.9)return "正常";
	if(sum>=24&&sum<=27.9)return "过重";
	if(sum>27.9)return "肥胖";

}
function deleteTr(papa){
	// console.log(papa);
	papa.parentNode.parentNode.remove();
}
function showRow(sum){
	if(sum<=18.4)document.getElementById("one_row").style.visibility="visible";
	if(sum>=18.5&&sum<=23.9)document.getElementById("two_row").style.visibility="visible";
	if(sum>=24&&sum<=27.9)document.getElementById("three_row").style.visibility="visible";
	if(sum>27.9)document.getElementById("four_row").style.visibility="visible";
}
function sortTr(){
	var show_all_ele=document.getElementById("show_all");
	var nowTr=show_all_ele.getElementsByTagName("tr");
	var number=nowTr.length;
	// alert(number);
	if(number==1)return;
	// alert();
	for (var i = 1; i <number; i++) {

		(nowTr[i].getElementsByTagName("td"))[0].innerHTML=i;
	}
}