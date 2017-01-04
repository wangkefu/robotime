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






//以下为导航栏的鼠标经过效果
var imgs_One = ["one_1","one_2","one_3","one_4"];    //存放产品图名字,后期在下面闭包中拼接地址
var insertImgs = document.querySelectorAll(".insertImg");     
var imgs_Two = ["two_1","two_2","two_3"];
var imgs_Three = ["three_1","three_2","three_3","three_4","three_5","three_6","three_7","three_8","three_9"];

var mM1 = document.querySelectorAll('.mM1');
var mM_p1 = document.querySelectorAll('.mM_p1');
var mM_h1 = document.querySelectorAll('.mM_h1');
for(var i=0;i<4;i++){
	(function(j){
		mM1[j].onmouseenter = function(){
			mM_p1[0].innerHTML = mM_p1[j+1].innerHTML;
			mM_h1[0].innerHTML = mM_h1[j+1].innerHTML;
			insertImgs[0].src = '../images/'+imgs_One[j]+'.jpg';
		}
	})(i)
}
var mM2 = document.querySelectorAll('.mM2');
var mM_p2 = document.querySelectorAll('.mM_p2');
var mM_h2 = document.querySelectorAll('.mM_h2');
for(var i=0;i<3;i++){
	(function(j){
		mM2[j].onmouseenter = function(){
			mM_p2[0].innerHTML = mM_p2[j+1].innerHTML;
			mM_h2[0].innerHTML = mM_h2[j+1].innerHTML;
			insertImgs[1].src = '../images/'+imgs_Two[j]+'.jpg';
		}
	})(i)
}
var mM3 = document.querySelectorAll('.mM3');
var mM_p3 = document.querySelectorAll('.mM_p3');
var mM_h3 = document.querySelectorAll('.mM_h3');
for(var i=0;i<9;i++){
	(function(j){
		mM3[j].onmouseenter = function(){
			mM_p3[0].innerHTML = mM_p3[j+1].innerHTML;
			mM_h3[0].innerHTML = mM_h3[j+1].innerHTML;
			insertImgs[2].src = '../images/'+imgs_Three[j]+'.jpg';
		}
	})(i)
}

$('.mM1').each(function(i){
	thisIndex = i;
	$(this).mouseenter(function(){
		thisIndex = i;
		$('.mR_h1').html($(this).html());
	})
})
$('.mM2').each(function(i){
	$(this).mouseenter(function(){
	$('.mR_h2').html($(this).html()) ;
//	console.log($('.mR_h2').html())
	})
})
$('.mM3').each(function(i){
	$(this).mouseenter(function(){
	$('.mR_h3').html($(this).html()) ;
//	console.log($('.mR_h3').html())
	})
})






var logo = document.querySelector(".logo");
logo.onmouseenter = function(){
	logo.className = "fadeUp logo";
}
logo.onmouseleave = function(){
	logo.className = "fadeDown logo";
}



//$('.topBg').css("scrollTop","500")
//$(".topBg").scrollTop(500);
//console.log($('.topBg').scrollTop())
//var topBg = document.querySelector('.topBg');
//var test;
//document.body.onmousewheel = function(e){
//	e = e||window.event;
//	console.log(topBg.scrollTop);
//	console.log("body的:"+document.body.scrollTop);
////	topBg.style.scrollTop = document.body.scrollTop+'px';
//	test = document.body.scrollTop;
//	$(".topBg").scrollTop(500);
//}
