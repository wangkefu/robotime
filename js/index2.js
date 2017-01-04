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


var isAct=false;
var index=0;
var topX_logo = document.querySelectorAll(".topX_logo");

var bottoms_over = document.querySelector(".bottoms_over");
var flag2=true;

mouseWheel(document,function(e,isDown){
	console.log(index)
	var bdwidth=document.documentElement.clientWidth;
	
		if(isAct){return}
		isAct=true;
		setTimeout(function(){
			isAct=false;
		},1000)
		if(isDown){
			index++;
			if(index==4){
				bottoms_over.style.display = "block";
			}
			
			index=index>$(".top").length-1?$(".top").length-1:index;
			
		}else{
				index--;
				index=index<0?0:index;
				flag2=true;
		}
		var weizhi=-index*100+"%";
		if(index==4){
			weizhi = -350+"%";
		}
		
		$(".wrap").css("top",weizhi);
	
})

document.onkeydown=function(e){
	var bdwidth=document.documentElement.clientWidth;
	console.log(bdwidth)
	if(bdwidth>100){
		var e=e||window.event;
		if(isAct){return}
		isAct=true;
		setTimeout(function(){
			isAct=false;
		},1000)
		switch(e.keyCode){
			case 38:
				index--;
				index=index<0?0:index;			
				break;
			case 40:
				index++;
				index=index>$(".top").length-1?$(".top").length-1:index;
				break;
			default:
				break;
		}
		var weizhi=-index*100+"%";
		$(".wrap").css("top",weizhi);
	}
}

var flag3=true;
var s = {
            sy:0,
            ey:0,
            disy:0,
            gap:200,
            index:0
        }
var container = document.getElementsByClassName("container");
container[0].addEventListener("touchstart",function(){
	var e = e||window.event;
	if(e.touches.length==1){
        s.sy = e.touches[0].clientY;
        s.ey = e.touches[0].clientY;
    }
},false)
container[0].addEventListener("touchmove",function(){
     var e=e||window.event;
     s.ey = e.touches[0].clientY;
     var x=s.ey-s.sy
    if(x<0&&flag3==true){
    		flag3=false;
    		index++;
    		index=index>$(".top").length-1?$(".top").length-1:index;
    		var weizhi=-index*100+"%";
    		if(index==4){
			weizhi = -350+"%";
		}
    		$(".wrap").css("top",weizhi);
    }
    if(x>0&&flag3==true){
    		flag3=false;
    		index--;
    		index=index<0?0:index;
    		var weizhi=-index*100+"%";
    		$(".wrap").css("top",weizhi);
    }
},false)
container[0].addEventListener("touchend",function(){
	flag3=true;
})


function mouseWheel(obj,fn){
	var isDown=true;
	var isFireFox=navigator.userAgent.search("Firefox")==-1?false:true;
	if(isFireFox){
		obj.addEventListener("DOMMouseScroll",wheel,false);
	}else{
		obj.onmousewheel=wheel;
	}
	function wheel(e){
		e=e||window.event;
		if(isFireFox){
			isDown=e.detail>0?true:false;
		}else{
			isDown=e.wheelDelta>0?false:true;
		}
		fn.call(obj,e,isDown);
	}
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
	})
})
$('.mM3').each(function(i){
	$(this).mouseenter(function(){
		$('.mR_h3').html($(this).html()) ;
	})
})



var logo = document.querySelector(".logo");
logo.onmouseenter = function(){
	logo.className = "fadeUp logo";
}
logo.onmouseleave = function(){
	logo.className = "fadeDown logo";
}


