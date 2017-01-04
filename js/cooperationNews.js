var comeIn_1 = document.querySelector(".comeIn_1");
var moreMenu_1 = document.getElementById("moreMenu_1");
var comeIn_2 = document.querySelector(".comeIn_2");
var moreMenu_2 = document.getElementById("moreMenu_2");
var comeIn_3 = document.querySelector(".comeIn_3");
var moreMenu_3 = document.getElementById("moreMenu_3");
comeIn_1.onmouseenter = function(){
	moreMenu_1.style.display = "block";
	moreMenu_2.style.display = "none";
	moreMenu_3.style.display = "none";
	$('.mR_h1').html('文创系列');
	$('.mM_h1').eq(0).html('DIY HOUSE');
	$('.mM_p1').eq(0).html('灵感来源于日常生活中的不经意，重拾容易被忽略的小确幸。让每个人的小情怀小思绪找到依托，为内心建造和平。');
}
moreMenu_1.onmouseleave = function(){
	moreMenu_1.style.display = "none";
}
comeIn_2.onmouseenter = function(){
	moreMenu_2.style.display = "block";
	moreMenu_1.style.display = "none";
	moreMenu_3.style.display = "none";
	$('.mR_h2').html('2D拼图系列');
	$('.mM_h2').eq(0).html('2D jigsaw');
	$('.mM_p2').eq(0).html('在这些充满生命力的画面中，仿佛感受到某种情感在旋转、碰撞、对立，画面中的故事是人们心中的美好向往。');
}
moreMenu_2.onmouseleave = function(){
	moreMenu_2.style.display = "none";
}
comeIn_3.onmouseenter = function(){
	moreMenu_3.style.display = "block";
	moreMenu_1.style.display = "none";
	moreMenu_2.style.display = "none";
	$('.mR_h3').html('3D拼图系列');
	$('.mM_h3').eq(0).html('3D wooden Puzzle');
	$('.mM_p3').eq(0).html('还原生活中的真实事物，帮助孩子们锻炼动手动脑能力，提高想象力和创造力。认识世界并启发探索世界的好奇心。');
}
moreMenu_3.onmouseleave = function(){
	moreMenu_3.style.display = "none";
}

var xialanavi = document.querySelector("#xialanavi");
var xialaxx = document.querySelector("#xialaxx");
var xiala = document.querySelector("#xiala");
var lis2 = document.querySelectorAll(".lis2");
var flag = false;
xiala.onclick = function(){
	if(flag==false){
		xialanavi.style.display = "block";
		flag=true;
	}else{
		xialanavi.style.display = "none";
		flag = false;
	}
}
for(var i=0;i<lis2.length;i++){
	(function(j){
		lis2[j].onclick = function(){
			console.log(j);
			for(var k=0;k<4;k++){
				lis2[k].style.backgroundColor = "black";
			}
			lis2[j].style.backgroundColor = "#770e12";
		}
		
	})(i)
}




var logo = document.querySelector(".logo");
logo.onmouseenter = function(){
	logo.className = "fadeUp logo";
}
logo.onmouseleave = function(){
	logo.className = "fadeDown logo";
}






