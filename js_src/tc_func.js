jQuery(document).ready(function() {
 
 //ВВЕРХ-ВНИЗ_______________________________________________//

var comand = $("#wrap3");
var diff = 0;
var heightProjects = $("#wrap3").height();
console.log(heightProjects);
var heightFut = $("#footer").height();
//var diff = $(window).height() - heightProjects - heightFut; console.log(diff);
	
	
$("#t").click(function(){
    //Необходимо прокрутить в конец страницы
    var curPos = $(document).scrollTop();
    var height = $("body").height();
    var scrollTime = (height-curPos)/1.73;
	
	var heightProjects = $("#header").height();
	var heightHeader = $("#proekty").height();
	var heightT = heightProjects + heightHeader;
    $("body,html").animate({"scrollTop": + heightT},500);
});

$("#m").click(function(){
    //Необходимо прокрутить в конец страницы
    var curPos = $(document).scrollTop();
    var height = $("body").height();
    var scrollTime = (height-curPos)/1.73;
	
	var heightProjects = $("#header").height();
	var heightHeader = $("#proekty").height();
	var heightTehno = $("#tehno").height();
	var heightM = heightProjects + heightHeader + heightTehno;
    $("body,html").animate({"scrollTop":+heightM},500);
});


$("#k").click(function(){
    //Необходимо прокрутить в конец страницы
    var curPos = $(document).scrollTop();
    var height = $("body").height();
    var scrollTime = (height-curPos)/1.73;

	diff = $(window).height() - diff - heightFut;
	var heightMarketing = $("#marketing").height();
	
	var diff = $("#header").height();
	var heightHeader = $("#proekty").height();
	var heightTehno = $("#tehno").height();
	var heightMarketing = $("#marketing").height();
	var heightK = diff + heightHeader + heightTehno + heightMarketing;
		
	if (diff > 0) {
		diff = diff + diff;
		$("#wrap3").height(diff);
		
	//else {$("#comand").css({'height':'601'});
	};
	
    $("body,html").animate({"scrollTop":+heightK},500);
	$("#warp4").css({'margin':'210'});
});

$("#c").click(function(){
    //Необходимо прокрутить в конец страницы
    var curPos = $(document).scrollTop();
    var height = $("body").height();
    var scrollTime = (height - curPos)/1.73;
	
	
	diff = $(window).height() - heightProjects - heightFut;
	if (diff > 0) {
		heightProjects = heightProjects + diff; //console.log(heightProjects);
		$("#wrap3").height(heightProjects);
	};
		
    $("body,html").animate({scrollTop:$(document).height()},800);
});

	//Обработка нажатия на кнопку "Вверх"
$(".top_m").click(function(){
	//Необходимо прокрутить в начало страницы
	var curPos=$(document).scrollTop();
	var scrollTime = curPos / 1.73;
	if (diff > 0) {
		heightProjects = heightProjects - diff;
		$("#wrap3").css({'height': +heightProjects});
	}

	$("body,html").animate({"scrollTop": 0}, 500);

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
	var scrollTime = curPos/1.73;
	var docheight = $(document).height();
	$("body,html").animate({"scrollTop":'1295'},500);
});

$("#down_k").click(function(){
	//Необходимо прокрутить в начало страницы
	var curPos = $(document).scrollTop();
	var scrollTime = curPos/1.73;
	var docheight = $(document).height();
		
	diff = $(window).height() - heightProjects - heightFut;
	if (diff > 0) {
		heightProjects = heightProjects + diff; //console.log(heightProjects);
		$("#wrap3").height(heightProjects);
	};
	$("body,html").animate({"scrollTop":'1910'},500);
});


//СЛАЙДЕР______________________________________//

     $("#arrow_right").click(function () {
		if ($('#sht1').css('display') == 'block') {
			$('#sht1').hide('slide', { direction: 'right' }, 500);                 // убрать
			$('#sht2').show('slide', { direction: 'left' }, 500);
		}
		else
		if ($('#sht2').css('display') == 'block') {
			$('#sht2').hide('slide', { direction: 'right' }, 500);                 // убрать
			$('#sht1').show('slide', { direction: 'left' }, 500);
		
		}
    });

    $("#arrow_left").click(function () {
        if ($('#sht1').css('display') == 'block') {
            $('#sht1').hide('slide', { direction: 'left' }, 500);                 // убрать
            $('#sht2').show('slide', { direction: 'right' }, 500);
        }
        else
        if ($('#sht2').css('display') == 'block') {
            $('#sht2').hide('slide', { direction: 'left' }, 500);                 // убрать
            $('#sht1').show('slide', { direction: 'right' }, 500);
        }
    });
	
	
//СЛАЙДЕР2______________________________________//


     $("#arrow_right2").click(function () {
		if ($('#comand').css('display') == 'block') {
			$('#comand').hide('slide', { direction: 'right' }, 500);                 // убрать
			$('#comand2').show('slide', { direction: 'left' }, 500);
		}
		else
		if ($('#comand2').css('display') == 'block') {
			$('#comand2').hide('slide', { direction: 'right' }, 500);                 // убрать
			$('#comand').show('slide', { direction: 'left' }, 500);
		}	

    });

    $("#arrow_left2").click(function () {
        if ($('#comand').css('display') == 'block') {
            $('#comand').hide('slide', { direction: 'left' }, 500);                 // убрать
            $('#comand2').show('slide', { direction: 'right' }, 500);
        }
        else
        if ($('#comand2').css('display') == 'block') {
            $('#comand2').hide('slide', { direction: 'left' }, 500);                 // убрать
            $('#comand').show('slide', { direction: 'right' }, 500);
        }
     });


});