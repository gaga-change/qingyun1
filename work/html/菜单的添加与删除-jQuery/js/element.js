
function Menu (name) {
	this.name=name;
	this.sons=new Array();
}
Menu.prototype.setSon=function(son){
	this.sons.push(son);
}
Menu.prototype.getLi=function(){
	var jq=$();
	// console.log(this.sons);
	this.sons.map(function(temp){
		// console.log(temp.getLi());
		jq=jq.add(temp.getLi());
		// console.log(jq);
	})
	// return jq.wrapAll("<ul></ul>").prepend(this.name);
	// console.log(jq.wrapAll(document.createElement("div")));
	// return jq.wrap("<ul></ul>");
	return jq;
}

function MenuSon(name,menu){
	this.name=name;
	menu.setSon(this);
}
MenuSon.prototype.getLi=function(){
	// var li=document.createElementByTagName
	return (new $()).add("<li><label><span>"+this.name+"</span><input type='checkbox'></label></li>");
}