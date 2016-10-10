var FILTE_NAME="img";
var IMGS=[
	new MainTitle("p1","爱的花朵","p1_css"),
	new MainTitle("p2","长春藤","p2_css"),
	new MainTitle("p3","春时光","p3_css"),
	new MainTitle("p4","小桥流水","p4_css"),
	new MainTitle("p5","黑白冬季","p5_css")
];
function MainTitle (imgName,title,cssId) {
	this.imgName=imgName;
	this.title=title;
	this.cssId=cssId;
}
MainTitle.prototype.getUrl=function(){
	return FILTE_NAME+"/"+this.imgName+".gif";
}
MainTitle.prototype.getBigUrl=function(){
	return FILTE_NAME+"/"+this.imgName+"_big.jpg";
}

