var i=0;
var a1, a2, a3, a4, a5;
var elem = document.getElementById('main-content');
var theCSSprop = window.getComputedStyle(elem,null).getPropertyValue("width");
function timer1(){
	clearInterval(a2);
	clearInterval(a3);
	clearInterval(a4);
	clearInterval(a5);
	a1 = setInterval (function(){


						if (i>0) {
						 imgs.style.marginLeft  = -10*(--i) +"px";

					}
					if (i<0) {
						 imgs.style.marginLeft  = -10*(++i) +"px";

					}},
					1);
					radio1.style.backgroundColor = "rgba(140, 137, 137, 0)";
					radio2.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio3.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio4.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio5.style.backgroundColor = "rgba(140, 137, 137, 1)";
				};
function timer2(){
			clearInterval(a1);
			clearInterval(a3);
			clearInterval(a4);
			clearInterval(a5);
			a2 = setInterval (function(){

					if (i<96) {
						 imgs.style.marginLeft  = -10*(++i) +"px";
						}
					if (i>96) {
						 imgs.style.marginLeft  = -10*(--i) +"px";
						}},
					1);

					radio1.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio2.style.backgroundColor = "rgba(140, 137, 137, 0)";
					radio3.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio4.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio5.style.backgroundColor = "rgba(140, 137, 137, 1)";
					 };
function timer3(){
	clearInterval(a1);
	clearInterval(a2);
	clearInterval(a4);
	clearInterval(a5);
	a3 = setInterval (function(){
					if (i<192) {imgs.style.marginLeft  = -10*(++i) +"px";
				}
					if (i>192) {imgs.style.marginLeft  = -10*(--i) +"px";
				}},
					1);
					radio1.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio2.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio3.style.backgroundColor = "rgba(140, 137, 137, 0)";
					radio4.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio5.style.backgroundColor = "rgba(140, 137, 137, 1)";
					 };
function timer4(){
	clearInterval(a1);
	clearInterval(a2);
	clearInterval(a3);
	clearInterval(a5);
	a4 = setInterval (function(){
					if (i<288) {imgs.style.marginLeft  = -10*(++i) +"px";
				}
					if (i>288) {imgs.style.marginLeft  = -10*(--i) +"px";
				}},
					1);
					radio1.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio2.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio3.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio4.style.backgroundColor = "rgba(140, 137, 137, 0)";
					radio5.style.backgroundColor = "rgba(140, 137, 137, 1)";
				};
function timer5(){
	clearInterval(a1);
	clearInterval(a2);
	clearInterval(a3);
	clearInterval(a4);
	a5 = setInterval (function(){
					if (i<384) {imgs.style.marginLeft  = -10*(++i) +"px";
				}
					},
					1);
					radio1.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio2.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio3.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio4.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio5.style.backgroundColor = "rgba(140, 137, 137, 0)";
				};
function timer6(){

	if (i==96) {
				timer1();

	}
	if (i==192) {
				timer2();

	}
	if (i==288) {
				timer3();

	}
	if (i==384) {
				timer4();

	}
	if (i==0) {		clearInterval(a1);
					clearInterval(a2);
					clearInterval(a3);
					clearInterval(a4);
					clearInterval(a5);
					imgs.style.marginLeft  = "-3840px";
					i=384;
					radio1.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio2.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio3.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio4.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio5.style.backgroundColor = "rgba(140, 137, 137, 0)";
				};
}
function timer7(){


	if (i==0) {
				timer2();

	}
	if (i==96) {
				timer3();

	}
	if (i==192) {
				timer4();

	}
	if (i==288) {
				timer5();

	}
	if (i==384) {clearInterval(a1);
				clearInterval(a2);
				clearInterval(a3);
				clearInterval(a4);
				clearInterval(a5);
					imgs.style.marginLeft  = "0px";
					i=0;
					radio1.style.backgroundColor = "rgba(140, 137, 137, 0)";
					radio2.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio3.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio4.style.backgroundColor = "rgba(140, 137, 137, 1)";
					radio5.style.backgroundColor = "rgba(140, 137, 137, 1)";
	}
}






