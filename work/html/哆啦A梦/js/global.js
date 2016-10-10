var PATH_HTML="大图.html";
var PATH_IMG="movie_img";

function getArrString(arr){
	var str="";
	for(var i=0;i<arr.length;i++){
		str+=arr[i].getString();
		if(i!=arr.length-1) str+="^";

	}
	return str;
}
function sortMovie(a,b){
	if(a.width!=b.width){
		return a.width-b.width;
	}else{
		return a.height-b.height;
	}
}
// movie
function Movie (no,width,height,name) {
	this.no=no;
	this.width=width;
	this.height=height;
	this.name=name;
}
Movie.prototype.getSize=function(){
	return this.width+"x"+this.height;
}
Movie.prototype.getUrl=function(temp){
	// return PATH_HTML+"?no="+this.no+"&index="+arr.indexOf(temp);
	return PATH_HTML+"?no="+this.no;
}
Movie.prototype.getImgPath=function(){
	return PATH_IMG+"/"+this.no+".jpg";
}
Movie.prototype.getString=function(){
	return this.no+","+this.width+","+this.height+","+encodeURI(this.name);
	// return this.no+","+this.width+","+this.height+","+this.name;
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
