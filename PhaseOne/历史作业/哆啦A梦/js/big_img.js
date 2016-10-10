var arr=new Array;
// movie
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
		arr=[];
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


	var imageNo = location.search.split("=")[1].split("&")[0];
	if(imageNo!=undefined){
		console.log(imageNo);
		// alert(imageNo);
		//加载图片
		if(imageNo==undefined)return;
		document.getElementById("show_img_id").src="movie_img/"+imageNo+".jpg";

		


		var showNumA=document.getElementById("show_num_a");
		showNumA.innerHTML="海报("+arr.length+")";

		document.getElementById("em_now_num").innerHTML=imageNo.split("p")[1];
		document.getElementById("em_all_num").innerHTML=arr.length;
	}
};
function getImageNo(){
	return document.getElementById("show_img_id").getAttribute("src");
	// return image[index];
}
// console.log(arr);
function up(){
	// 通过图片找过movie对象
	var url=getImageNo();

	var url=url.split("/")[1].split(".")[0]; 
	console.log(url);
	var index=-1;
	for(var i=0;i<arr.length;i++){
		if(arr[i].no==url){
			index=i;
			break;
		}
	}
	//如果不存在
	if(index==-1)return;
	//如果 当前图片为第一张  跳转为最后一张
	if(index==0){
		index=arr.length-1;
	}else{
		index--;
	}
	console.log("index:"+index);
	//得到传过来的 index  把图片路径修改
	location.href=arr[index].getUrl()+"&str="+getArrString(arr);

}
function down(){
		// 通过图片找过movie对象
	var url=getImageNo();

	var url=url.split("/")[1].split(".")[0]; 
	console.log(url);
	var index=-1;
	for(var i=0;i<arr.length;i++){
		if(arr[i].no==url){
			index=i;
			break;
		}
	}
	//如果不存在
	if(index==-1)return;
	//如果 当前图片为最后一张  跳转为第一张
	if(index==arr.length-1){
		index=0;
	}else{
		index++;
	}
	console.log("index:"+index);
	//得到传过来的 index  把图片路径修改
	location.href=arr[index].getUrl()+"&str="+getArrString(arr);
}
function delButton(){
	console.log("df");
	// 通过图片找过movie对象
	var url=getImageNo();

	var url=url.split("/")[1].split(".")[0]; 
	console.log(url);
	var index=-1;
	for(var i=0;i<arr.length;i++){
		if(arr[i].no==url){
			index=i;
			arr=arr.delArrId(index);
			break;
		}
	}
	location.href = "多啦A梦.html?no=-1&str="+getArrString(arr);
	//如果不存在
	// if(index==-1)return;
	//如果存在 删除 

	
}
function returnButton(){
	location.href = "多啦A梦.html?no=-1&str="+getArrString(arr);
}
