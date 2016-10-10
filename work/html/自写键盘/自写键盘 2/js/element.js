
var emoji=["😄","😃","😀","😊","😉","😍","😘","😚","😗","😙","😜","😝","😛","😳","😁","😔","😌","😒","😞","😣","😢","😂","😭","😪","😥","😰","😅","😓"];
// 😩 😫 😨 😱 😠 😡 😤 😖 😆 😋 😷 😎 😴 😵 😲 😟 😦 😧 😈 👿 😮 😬 😐 😕 😯 😶 😇 😏 😑 😺 😸 😻 😽 😼 🙀 😿 😹 😾 👹 
var KEYS=new Array();
KEYS[0]=new Array();
KEYS[1]=new Array();
KEYS[2]=new Array();
KEYS[3]=new Array();
for(var i=65;i<91;i++){
	KEYS[0].push(new Keyboard(String.fromCharCode(i)));
}
for(var i=97;i<123;i++){
	KEYS[1].push(new Keyboard(String.fromCharCode(i)));
}
for(var i=48;i<58;i++){
	KEYS[2].push(new Keyboard(String.fromCharCode(i)));
}
for(var i=0;i<emoji.length;i++){
	KEYS[3].push(new Keyboard(emoji[i]));
}

console.log(KEYS);
function Keyboard (name) {
	this.name=name;
}
Keyboard.prototype.getInput=function(){
	var input=document.createElement("input");
	// input.setAttribute("onclick","butOnclick('"+this.name+"')");
	input.addEventListener("click",function(key){
		return function(event){
			butOnclick(event,key);
		}
	}(this.name),false);
	input.setAttribute("value",this.name);
	input.setAttribute("type","button");
	return input;
}


// 按键的点击事件
function butOnclick(event,key){
	console.log(key);
	textArea.value+=key;
	textArea.value=textArea.value.replace(/QINGYUN/g,"*******");
}	


console.log(".".charCodeAt(0));
console.log("9".charCodeAt(0));


