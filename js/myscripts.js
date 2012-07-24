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

});




