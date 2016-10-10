// var num1=document.getElementById("num1");
// function add(){
// 	num1.value=Number(num1.value)+1;
// }

// 实现 4个符号的选择
function changeSymbol(id){
	var text=id.innerHTML;
	var sym=document.getElementById("sym_id");
	sym.innerHTML=text;
}
function sum(){
	var num1_input=document.getElementById("num1_id");
	var num2_input=document.getElementById("num2_id");
	var sum_input=document.getElementById("sum_id");
	if(num1_input===""||num2_input.value===""){
		alert("不要故意少东西!╮(╯_╰)╭");
		return;
	}
	var num1=Number(num1_input.value);
	var num2=Number(num2_input.value);
	var sum;
	// var sum=Number(sum_input.value);
	var symbol=document.getElementById("sym_id").innerHTML;
	if (symbol==""){
		alert("您没有选择符号,请选择一种算术符号  !");
		return;
	}else if(symbol=="+"){
		sum=num1+num2;
	}
	else if(symbol=="-"){
		sum=num1-num2;
	}
	else if(symbol=="/"){
		if (num2==0) {
			alert("分子不能为0  ! ");
			return;
		}else{
			sum=num1/num2;
		}
	}
	else if(symbol=="*"){
		sum=num1*num2;
	}
	if (isNaN(sum)) {
		alert("请输入正常的东西!~~~^_^~~~ ");
		return;
	};
	// alert(sum);
	sum_input.value=sum;
	var txt1=""+num1+" 比 "+num2+"大";
	var txt2=""+num1+" 比 "+num2+"小";
	var is_big=document.getElementById("is_big_id");
	
	if(num1>num2){
		is_big.value=txt1;
		// alert(txt1);
	}else if(num1<num2){
		is_big.value=txt2;
		// alert(txt2);
	}else{
		is_big.value="两个数相等!我看出来啦~~"
	}
}
function add(txt){
	var num1_input=document.getElementById(txt);
	num1_input.value=Number(num1_input.value)+1;
}
function del(txt){
	var num2_input=document.getElementById(txt);
	num2_input.value=Number(num2_input.value)-1;
}