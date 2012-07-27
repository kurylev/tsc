jQuery(document).ready(function() {
 
 //ВВЕРХ-ВНИЗ_______________________________________________//

	var comanda = $("#komanda");
	var heightKomanda = $("#komanda").height();  console.log(heightKomanda);
	var heightFut = $("#footer").height();
	//var raznost = $(window).height() - heightKomanda - heightFut; console.log(raznost);
	
	
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

	var raznost = $(window).height() - heightKomanda - heightFut;
	if (raznost > 0) {
		heightKomanda = heightKomanda + raznost; //console.log(heightKomanda);
		$("#komanda").height(heightKomanda);
		
	//else {$("#komanda").css({'height':'601'});
	};
	
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
raznost = 0;

$("body,html").animate({"scrollTop":0},500);
//$("#komanda").css({'height':'601'});

//if (raznost = 0) {
	//heightKomanda = heightKomanda - raznost;
	//$("#komanda").height(heightKomanda);
	//$("#komanda").css({'height':'601'});
	//};

});

//Обработка нажатия на кнопку "Вниз"
$(".down_m").click(function(){
//Необходимо прокрутить в начало страницы
var curPos=$(document).scrollTop();
var scrollTime=curPos/1.73;
var docheight = $(document).height();
$("body,html").animate({"scrollTop":docheight},500);
});

//СЛАЙДЕР______________________________________//

//quote_l	
	
     $("#strelka").click(function () {
		if ($('#sht1').css('display') == 'block') {
			$('#sht1').hide();                 // убрать
			$('#sht3').show('slide', { direction: 'left' }, 500);
			//$('#point').css('background-position','0 100%');
			
		}
		else
		if ($('#sht3').css('display') == 'block') {
			$('#sht3').hide();                 // убрать
			$('#sht2').show('slide', { direction: 'left' }, 500);
			//$('#point').css('background-position','0 50%');
		
		}	
		else
		if ($('#sht2').css('display') == 'block') {
			$('#sht2').hide();                 // убрать
			$('#sht1').show('slide', { direction: 'left' }, 500);
			//$('#point').css('background-position','0 0');
		
		}
    }); 

});




