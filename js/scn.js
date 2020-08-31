/*window.onload=*/
$(document).ready(function(){
	var pic = document.querySelector(".pic");
    var arrPic = ["img/jd1.jpg", "img/jd2.jpg", "img/jd3.jpg","img/jd4.jpg","img/jd5.jpg"];
	var num=0;
	var timer=null;
	var fn1=function(){
	 num ++;
	 if(num>=arrPic.length){
		num = 0;
	 }
	pic.src = arrPic[num];
	return num;
    }
	
   timer=setInterval(function(){
	fn1();
    },2000)
    
	
	
	
	});
