jQuery(document).ready(function() {
 
 //ВВЕРХ-ВНИЗ_______________________________________________//

	var comanda = $("#komanda");
	var heightKomanda = $("#komanda").height();  console.log(heightKomanda);
	var heightFut = $("#footer").height();
	//var raznost = $(window).height() - heightKomanda - heightFut; console.log(raznost);
	
	
$("#t").click(function(){
    //Необходимо прокрутить в конец страницы
    var curPos = $(document).scrollTop();
    var height = $("body").height();
    var scrollTime = (height-curPos)/1.73;
	
	var heightProekty = $("#header").height();
	var heightHeader = $("#proekty").height();
	var heightT = heightProekty + heightHeader;
    $("body,html").animate({"scrollTop":+heightT},500);
});

$("#m").click(function(){
    //Необходимо прокрутить в конец страницы
    var curPos = $(document).scrollTop();
    var height = $("body").height();
    var scrollTime = (height-curPos)/1.73;
	
	var heightProekty = $("#header").height();
	var heightHeader = $("#proekty").height();
	var heightTehno = $("#tehno").height();
	var heightM = heightProekty + heightHeader + heightTehno;
    $("body,html").animate({"scrollTop":+heightM},500);
});


$("#k").click(function(){
    //Необходимо прокрутить в конец страницы
    var curPos = $(document).scrollTop();
    var height = $("body").height();
    var scrollTime = (height-curPos)/1.73;

	var raznost = $(window).height() - heightKomanda - heightFut;
	var heightMarketing = $("#marketing").height();
	
	var heightProekty = $("#header").height();
	var heightHeader = $("#proekty").height();
	var heightTehno = $("#tehno").height();
	var heightMarketing = $("#marketing").height();
	var heightK = heightProekty + heightHeader + heightTehno + heightMarketing;
		
	if (raznost > 0) {
		heightKomanda = heightKomanda + raznost;
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
	
	
	var raznost = $(window).height() - heightKomanda - heightFut;
	if (raznost > 0) {
		heightKomanda = heightKomanda + raznost; //console.log(heightKomanda);
		$("#komanda").height(heightKomanda);
		
	//else {$("#komanda").css({'height':'601'});
	};
		
    $("body,html").animate({scrollTop:$(document).height()},800);
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
$("#down_t").click(function(){
	//Необходимо прокрутить в начало страницы
	var curPos=$(document).scrollTop();
	var scrollTime=curPos/1.73;
	var docheight = $(document).height();
	$("body,html").animate({"scrollTop":'679'},500);
	});

	$("#down_mrk").click(function(){
	//Необходимо прокрутить в начало страницы
	var curPos=$(document).scrollTop();
	var scrollTime=curPos/1.73;
	var docheight = $(document).height();
	$("body,html").animate({"scrollTop":'1295'},500);
});

$("#down_k").click(function(){
	//Необходимо прокрутить в начало страницы
	var curPos=$(document).scrollTop();
	var scrollTime=curPos/1.73;
	var docheight = $(document).height();
		
	var raznost = $(window).height() - heightKomanda - heightFut;
	if (raznost > 0) {
		heightKomanda = heightKomanda + raznost; //console.log(heightKomanda);
		$("#komanda").height(heightKomanda);
			
	//else {$("#komanda").css({'height':'601'});
	};

	$("body,html").animate({"scrollTop":'1910'},500);
});


//СЛАЙДЕР______________________________________//

     $("#strelka_r").click(function () {
		if ($('#sht1').css('display') == 'block') {
			$('#sht1').hide('slide', { direction: 'right' }, 500);                 // убрать
			$('#sht2').show('slide', { direction: 'left' }, 500);
			//$('#point').css('background-position','0 100%');
			
		}
		else
		if ($('#sht2').css('display') == 'block') {
			$('#sht2').hide('slide', { direction: 'right' }, 500);                 // убрать
			$('#sht1').show('slide', { direction: 'left' }, 500);
			//$('#point').css('background-position','0 50%');
		
		}	
		/* else
		if ($('#sht3').css('display') == 'block') {
			$('#sht3').hide();                 // убрать
			$('#sht1').show('slide', { direction: 'left' }, 500);
			//$('#point').css('background-position','0 0');
		
		} */
    });

    $("#strelka_l").click(function () {
        if ($('#sht1').css('display') == 'block') {
            $('#sht1').hide('slide', { direction: 'left' }, 500);                 // убрать
            $('#sht2').show('slide', { direction: 'right' }, 500);
            //$('#point').css('background-position','0 100%');

        }
        else
        if ($('#sht2').css('display') == 'block') {
            $('#sht2').hide('slide', { direction: 'left' }, 500);                 // убрать
            $('#sht1').show('slide', { direction: 'right' }, 500);
            //$('#point').css('background-position','0 50%');

        }
        /* else
        if ($('#sht2').css('display') == 'block') {
            $('#sht2').hide();                 // убрать
            $('#sht1').show('slide', { direction: 'right' }, 500);
            //$('#point').css('background-position','0 0');

        } */
    });
});




