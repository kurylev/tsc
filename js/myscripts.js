jQuery(document).ready(function() {

$("#m").click(function(){
    //Необходимо прокрутить в конец страницы
    var curPos = $(document).scrollTop();
    var height = $("body").height();
    var scrollTime = (height-curPos)/1.73;
    $("body,html").animate({"scrollTop":'1294'},800);
});

$("#t").click(function(){
    //Необходимо прокрутить в конец страницы
    var curPos = $(document).scrollTop();
    var height = $("body").height();
    var scrollTime = (height-curPos)/1.73;
    $("body,html").animate({"scrollTop":'680'},800);
});

$("#k").click(function(){
    //Необходимо прокрутить в конец страницы
    var curPos = $(document).scrollTop();
    var height = $("body").height();
    var scrollTime = (height-curPos)/1.73;
    $("body,html").animate({"scrollTop":'1909'},800);
});

$("#c").click(function(){
    //Необходимо прокрутить в конец страницы
    var curPos = $(document).scrollTop();
    var height = $("body").height();
    var scrollTime = (height-curPos)/1.73;
    $("body,html").animate({"scrollTop":'1909'},800);
});

});

/* //Обработка нажатия на кнопку "Вверх"
$("#up").click(function(){
//Необходимо прокрутить в начало страницы
var curPos=$(document).scrollTop();
var scrollTime=curPos/1.73;
$("body,html").animate({"scrollTop":0},scrollTime);
}); */


