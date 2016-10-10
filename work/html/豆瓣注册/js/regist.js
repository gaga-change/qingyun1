
myVerification=-1;
function showMessage(inEle){
	var temp=inEle.value;
	if(temp==null||inEle.value==""){
		inEle.nextSibling.style.visibility="visible";
	}
	else{
		inEle.nextSibling.style.visibility="hidden";
	}
}
function getVerification(){
	myVerification=parseInt(Math.random()*80000)+11111;
	alert(myVerification);
}
function addTableTr(){
	//确认6个输入框都不为空
	var userName=document.getElementById("user_name").value;
	var passwordOne=document.getElementById("password_one").value;
	var passwordTwo=document.getElementById("password_two").value;
	var bodyCard=document.getElementById("body_card").value;
	var shortSay=document.getElementById("short_say").value;
	var inputVerification=document.getElementById("my_verification").value;
	var allMsg=userName+passwordOne+passwordTwo+bodyCard+inputVerification;
	if(allMsg.indexOf(" ")!=-1){
		alert("除简介外,输入信息中不能有空格");
	}

	if(userName==null||passwordOne==null||passwordTwo==null||bodyCard==null||shortSay==null||inputVerification==null||
		userName==""||passwordOne==""||passwordTwo==""||bodyCard==""||shortSay==""||inputVerification==""){
		alert("输入框不能为空!");

		console.log(userName);
		console.log(passwordOne);
		console.log(passwordTwo);
		console.log(bodyCard);
		console.log(shortSay);
		console.log(inputVerification);
		console.log("有空");
		return;
	}
	//确认使用协议已经选择
	var readUseMsg=document.getElementById("read_use_msg");
	if(!readUseMsg.checked){
		alert("请阅读使用协议");
		return;
	}
	// 验证码是否正确
	if(myVerification==-1){
		alert("请获取验证码");
		return;
	}
	if(inputVerification!=myVerification){
		alert("验证码不正确");
		return;
	}

	//验证两次密码是否相同
	if(passwordOne!=passwordTwo){
		alert("两次密码输入不相同!");
		return;
	}
	//提取身份证的生日
	if(bodyCard.length!=18){
		alert("身份证位数不对吧!");
		return;

	}
	var birthday=bodyCard.substring(6,14);
	birthday=birthday.substring(0,4)+"/"+birthday.substring(4,6)+"/"+birthday.substring(6,8);
	// alert(birthday);

	//把信息放入表格

	var myDate=new Date();
	var innerText="<td>"+myDate.toLocaleDateString()+"</td><td>"+
		userName+"</td><td>"+passwordOne+"</td><td>"+bodyCard+
		"</td><td>"+birthday+"</td><td>"+shortSay+"</td><td><input type='button' onclick='delMsg(this)' value='删除'></td>";
	var newTr=document.createElement("tr");
	newTr.innerHTML=innerText;
	document.getElementById("message_table").appendChild(newTr);
}
function delMsg(id){
	id.parentNode.parentNode.remove();
}
