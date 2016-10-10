var MENUS=new Array();
window.onload=function () {
	var m1=new Menu("水果");
	var s1=new MenuSon("苹果",m1);
	var s2=new MenuSon("香蕉",m1);

	var m2=new Menu("生活用品");
	new MenuSon("牙膏",m2);
	new MenuSon("牙刷",m2);
	// console.log(m1.getLis());
	// console.log(s1.getLi());
	MENUS.push(m1);	
	MENUS.push(m2);
	// $("ul").append(m1.getLis());
	MENUS.showMenu($("ul"));
	// $("ul").wrapAll("<div></div>");

	//删除
	$(":button").eq(0).click(function(){
		// 找到所有选中
		var jq=$(":checkbox:checked");
		// 子级就删自己  父级删自己
		jq.map(function(){
			var tempName=$(this).siblings().text();
			if($(this).parents("ul").length==2){  //子级
				// 拿到名字,通过名字找  找到后删除对象  刷新
				
				MENUS.map(function(ele){
					ele.sons=ele.sons.filter(function(j){
						// console.log(j.name);
						// console.log(j.name==tempName);
						return j.name!=tempName;
					
					});
					// console.log(ele.sons);
				});
				MENUS.showMenu();
			}else{   //父级
				// 拿到名字,通过名字找  找到后删除对象  刷新
				MENUS=MENUS.filter(function(ele){
					return ele.name!=tempName;
				});
				MENUS.showMenu();
			}

		});

	});

	//添加
	$(":button").eq(1).click(function(){
		// console.log(0);
		var fat=$(":text")[0].value.replace(/ /g,"");
		var son=$(":text")[1].value.replace(/ /g,"");
		if(fat==""||son==""){
			$("body p:last").css("visibility","visible");
			$("body p:last").text("名字不能为空!");
		}else{
			// 子名字如果冲突提示
			var bool=true;
			MENUS.map(function(ele){
				ele.sons.map(function(j){
					if(j.name==son){
						// console.log("df");
						bool=false;
					}
				});
			});
			if(!bool){
				$("body p:last").css("visibility","visible");
				$("body p:last").text("子级名字不能重复!");
				return;
			}
			$("body p:last").css("visibility","hidden");
			//查找父名字  
			var newArr=MENUS.filter(function(ele){return(ele.name==fat)});
			if(newArr.length==0){
				// 不一样  1.新建父  新建子  父添加到数组
				var m=new Menu(fat);
				new MenuSon(son,m);
				MENUS.push(m);

			}else{
				// 一样
				new MenuSon(son,newArr[0]);
			}
			MENUS.showMenu();
		}
	});

}
MENUS.constructor.prototype.showMenu=function(){
	var expr=$("body>ul");
	expr=expr.empty();

	MENUS.map(function(ele){
		//添加一个li
		expr.append("<li></li>");
		// 给最后一个li添加 名字和 ul
		expr.children("ul>li:last").append("<label><span>"+ele.name+"</span><input type='checkbox'></label>").append("<ul title="+ele.name+"></ul>");
		// 给该ul添加子li
		expr.children("ul>li:last").children("ul").append(ele.getLi());
	});
}
