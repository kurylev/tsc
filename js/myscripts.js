jQuery(document).ready(function() {
 
 //ВВЕРХ-ВНИЗ_______________________________________________//
 
$("#m").click(function(){
    //Необходимо прокрутить в конец страницы
    var curPos = $(document).scrollTop();
    var height = $("body").height();
    var scrollTime = (height-curPos)/1.73;
    $("body,html").animate({"scrollTop":'1294'},500);
});

$("#t").click(function(){
    //Необходимо прокрутить в конец страницы
    var curPos = $(document).scrollTop();
    var height = $("body").height();
    var scrollTime = (height-curPos)/1.73;
    $("body,html").animate({"scrollTop":'680'},500);
});

$("#k").click(function(){
    //Необходимо прокрутить в конец страницы
    var curPos = $(document).scrollTop();
    var height = $("body").height();
    var scrollTime = (height-curPos)/1.73;
    $("body,html").animate({"scrollTop":'1909'},500);
});

$("#c").click(function(){
    //Необходимо прокрутить в конец страницы
    var curPos = $(document).scrollTop();
    var height = $("body").height();
    var scrollTime = (height-curPos)/1.73;
    $("body,html").animate({"scrollTop":'1909'},500);
});

//Обработка нажатия на кнопку "Вверх"
$(".top_m").click(function(){
//Необходимо прокрутить в начало страницы
var curPos=$(document).scrollTop();
var scrollTime=curPos/1.73;
$("body,html").animate({"scrollTop":0},500);
});

//СЛАЙДЕР______________________________________//

var CONTENT_BLOCK_LEFT_POZ = 1;
var CONTENT_BLOCK_LEFT_POZ = 0; // левый отс. блока content
var START_X; //x-позиция мыши при наведении на блок content
var PIC_WIDTH = 570; // ширина картинки
var MAX_PIC; //общее кол-во картинок в блоке
var MOUSE_CHUVSTVIT = 10; // чувствительность при движении мыши;

// Задаем ширину окна для картинок
var n = $("#mycarousel .pic").length;
MAX_PIC = n; 
m = n * PIC_WIDTH; 				
$("#mycarousel").width(m);

/* // Убираем левую скобку
$( "#button_left" ).css('left',function(){
 if (CONTENT_BLOCK_LEFT_POZ == 0){$("#button_left").hide()};
}); */


// Показываем картинки
$("#mycarousel").slideDown(800,function() {
 $(".first").fadeTo(0, 0.5); 
});

// Смена изображения при наведении
$(".first").hover(function() {
		$(this).fadeTo(1, 1);
}, function() {
	$(this).fadeTo(1, 0.5);	
}); 

// Прокрутка вправо
$( "#button_left" ).click(function(){ 
	var l = CONTENT_BLOCK_LEFT_POZ + PIC_WIDTH;
	if (l !== PIC_WIDTH) { console.log("Прокрутка вправо. l = " + 1);
		CONTENT_BLOCK_LEFT_POZ = l;
		$( ".pic:first" ).animate({
		left: l
		}, {
		duration: 800,
		step: function( now, fx ){
			$( ".pic:gt(0)" ).css( "left", now );
		}
		});
		/* if (l >= 0) {$("#button_left").hide()}; */
		/* if (l < 0) {$("#button_right").show()}; */
	} //end if  
});

// Прокрутка влево
$( "#button_right" ).click(function(){ 
	var l = CONTENT_BLOCK_LEFT_POZ - PIC_WIDTH;
	if (l !== -PIC_WIDTH * (MAX_PIC-3)) { console.log("Прокрутка влево. l = " + 1);
		CONTENT_BLOCK_LEFT_POZ = l;
		$( ".pic:first" ).animate({
			left: l
		}, {
		duration: 800,
		step: function ( now, fx ){
			$( ".pic:gt(0)" ).css( "left", now );
		}
		});
		/* if (l==-PIC_WIDTH * (MAX_PIC-2)) {$("#button_right").hide()} */
		/* if (l!=0) {$("#button_left").show()} */
	} //end if  
});

});




