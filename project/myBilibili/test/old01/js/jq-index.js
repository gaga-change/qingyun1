console.log("jq-index.js");
$(document).ready(changeWidthSize);
$(window).resize(changeWidthSize);
function changeWidthSize(){
	var width=$(this).width();
	// console.log();
	// $(".change-width").css("width","");
	if(width<1290){
		$(".change-width").css("width","980px");	
	}else{
		$(".change-width").css("width","1160px");	
	}
}