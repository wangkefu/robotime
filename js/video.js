if($(".play")){
	$(".play").on("click",function(){
		var video = document.getElementById("diyVideo");
		video.play();
		$(".play").hide()
	})
}
if($("#diyVideo")){
	$("#diyVideo").on("click",function(){
		var video = document.getElementById("diyVideo");
		video.pause();
		$(".play").show()
	})
}
var video = document.getElementById("diyVideo");
setInterval(function(){
	console.log(video.paused)
	if(video.paused){
		$(".play").show()
	}else{
		$(".play").hide()
	}
	
},200)