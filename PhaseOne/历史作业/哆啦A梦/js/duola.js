"use strict"
// movie
var arr;
// <li><a href="大图.html?no=10"><img src="movie_img/p1.jpg"></a>
// 	<p>1410*2000</p><p>正式海报 中国大陆</p>
// </li>
// console.log("arr:"+getArrString(arr));


window.onload = function (){
	 arr=[
	new Movie("p1",1410,2000,"正式海报 中国大陆"),
	new Movie("p2",1000,1400,"正式海报 中国大陆"),
	new Movie("p3",1000,1400,"正式海报 中国大陆"),
	new Movie("p4",1000,1400,"正式海报 中国大陆"),
	new Movie("p5",1000,1400,"正式海报 中国大陆"),
	new Movie("p6",1000,1400,"正式海报 中国大陆"),
	new Movie("p7",1000,1400,"正式海报 中国大陆"),
	new Movie("p8",1000,1400,"正式海报 中国大陆"),
	new Movie("p9",1000,1400,"正式海报 中国大陆"),
	new Movie("p10",1000,1400,"正式海报 中国大陆"),
	new Movie("p11",1000,1500,"正式海报 中国大陆"),
	new Movie("p12",1000,1500,"正式海报 中国大陆"),
	new Movie("p13",1000,1500,"正式海报 中国大陆"),
	new Movie("p14",1000,1500,"正式海报 中国大陆"),
	new Movie("p15",1000,1500,"正式海报 中国大陆"),
	new Movie("p16",1000,1500,"正式海报 中国大陆"),
	new Movie("p17",1000,1500,"正式海报 中国大陆"),
	new Movie("p18",1000,1500,"正式海报 中国大陆"),
	new Movie("p19",1000,1500,"正式海报 中国大陆")
	]
	var str = location.search.split("=")[2];
	if (str!=undefined) {
		arr=[]
		// console.log(str);
		//得到数组
		var movies=str.split("^");
		// console.log(movies);
		for(var i=0;i<movies.length;i++){
			var strs=movies[i].split(",");
			var aa=strs[3];
			aa=decodeURI(aa);
			// console.log(aa);
			var temp=new Movie(strs[0],strs[1],strs[2],aa);
			arr[i]=temp;
		}
		console.log(arr);
	}
	sortMovieShow(arr);
}

function sortMovieShow(arr){
	var showNumA=document.getElementById("show_num_a");
	showNumA.innerHTML="海报("+arr.length+")";
	var trs=document.getElementById("show_movie_message").getElementsByTagName("li");
	var len=trs.length;
	for(var i=0;i<len;i++){
		trs[0].remove();
	}

	for(var i=0;i<arr.length;i++){
		var temp=arr[i];
		var a=document.createElement("a");
		a.href=temp.getUrl(temp)+"&str="+getArrString(arr);


		var img=document.createElement("img");
		img.src=temp.getImgPath();
		a.appendChild(img);
		var p1=document.createElement("p");
		p1.innerHTML=temp.getSize();
		var p2=document.createElement("p");
		p2.innerHTML=temp.name;
		var li=document.createElement("li");
		li.appendChild(a);
		li.appendChild(p1);
		li.appendChild(p2);
		document.getElementById("show_movie_message").appendChild(li);
	}
}
//默认排序为灰色,让它不能点击  
var sort1=document.getElementById("sort_1");
var sort2=document.getElementById("sort_2");
sort2.style.color="Magenta";
sort1.style.color="gray";
// sort1.setAttribute("onclick")="sortDefault()";
// // console.log(sort1.getAttribute("onclick"));
function sortDefault (id) {
	if(id.style.color=="gray")return;
	sort2.style.color="Magenta";
	sort1.style.color="gray";
	// var trs=document.getElementById("show_movie_message").getElementsByTagName("li");
	// var len=trs.length;
	// for(var i=0;i<len;i++){
	// 	trs[0].remove();
	// }
	// console.log(arr);
	sortMovieShow(arr);

}
function sortSize (id) {
	if(id.style.color=="gray")return;
	sort1.style.color="Magenta";	
	sort2.style.color="gray";
	// var trs=document.getElementById("show_movie_message").getElementsByTagName("li");
	// var len=trs.length;
	// for(var i=0;i<len;i++){
	// 	trs[0].remove();
	// }
	var tempArr=[];
	for(var i=0;i<arr.length;i++){
		tempArr[i]=arr[i];
	}
	sortMovieShow(tempArr.sort(sortMovie));
}
//添加
function addMovieButton(){
	//匆忙 /(ㄒoㄒ)/~~
	var ea=document.getElementById("lei_1");
	var eb=document.getElementById("lei_2");
	var ec=document.getElementById("lei_3");
	var ed=document.getElementById("lei_4");

	// var a=document.getElementById("lei_1").value;
	// var b=parseInt(document.getElementById("lei_2"));
	// var c=parseInt(document.getElementById("lei_3"));
	// var d=document.getElementById("lei_4");

	var ra=document.getElementById("remind_1");
	var rb=document.getElementById("remind_2");
	var rc=document.getElementById("remind_3");
	var rd=document.getElementById("remind_4");
	// visibility: hidden;
	// visibility: visible;
	ra.innerHTML="";
	rb.innerHTML="";
	rc.innerHTML="";
	rd.innerHTML="";

	console.log("ea"+ea.value);
	if(ea.value==null||ea.value==""){
		ra.innerHTML="图片名称不能为空";
		console.log("ea"+ea.value);
		return
	}
	if(eb.value==null||eb.value==""){
		rb.innerHTML="宽度不能为空";
		return
	}

	if(ec.value==null||ec.value==""){
		rc.innerHTML="高度不能为空";
		return
	}
	if(ed.value==null||ed.value==""){
		rd.innerHTML="标题不能为空";
		return
	}
	if(ed.value.length>9){
		rd.innerHTML="标题长度超出";
		return
	}
	var temp=ea.value.split(".")[0];
	console.log(temp);

	var a=ea.value.split(".")[0];
	var b=parseInt(eb.value);
	var c=parseInt(ec.value);
	var d=ed.value;



	var temp=new Movie(ea,b,c,d);
	arr.push(temp);
	sortMovieShow(arr);

	ra.style.visibility="hidden";
	rb.style.visibility="hidden";
	rc.style.visibility="hidden";
	rd.style.visibility="hidden";

	ea.value="";
	eb.value="";
	ec.value="";
	ed.value="";


}
