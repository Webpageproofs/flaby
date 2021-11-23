//@prepros-append script.js
//@prepros-append jq.js
// <ИЗОБРАЖЕНИЕ В HTML И В BACKGROUND URL>
function ibg(){

var ibg = document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();

// </ИЗОБРАЖЕНИЕ В HTML И В BACKGROUND URL>



$(document).ready(function (){
	$('.owl-carousel').owlCarousel({
		loop: true,
		items: 1,
		autoplay:true,
		navText: ["<img src=\"img/icons/14.png\" alt=\"img\" >","<img src=\"img/icons/15.png\" alt=\"img\" >"],
	});
});
