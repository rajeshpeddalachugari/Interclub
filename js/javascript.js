
/// <reference path="jquery-1.8.3.min.js" />

//$(window).load(function () {
//    // Animate loader off screen
//    $(".se-pre-con").fadeOut("slow");
//});


$(document).ready(function(){

  $(document).ready(function () {
    $(".regular").slick({
      lazyLoad: 'ondemand',
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });

  });

  $('.tshirt').click(function () {
    $('.TshirtDesign').toggleClass("hiddenpop");
  });
  $('.clsbtn1').click(function () {
    $('.TshirtDesign').toggleClass("hiddenpop");
  });

  $('.Ethinic').click(function () {
    $('.EthnicWear').toggleClass("hiddenpop");
  });
  $('.clsbtn2').click(function () {
    $('.EthnicWear').toggleClass("hiddenpop");
  });

  $('.DumbCharades').click(function () {
    $('.DumbCharadesGallery').toggleClass("hiddenpop");
  });
  $('.clsbtn3').click(function () {
    $('.DumbCharadesGallery').toggleClass("hiddenpop");
  });

  $('.Anthakshari').click(function () {
    $('.AnthakshariGallery').toggleClass("hiddenpop");
  });
  $('.clsbtn4').click(function () {
    $('.AnthakshariGallery').toggleClass("hiddenpop");
  });

  $('.PaintOMime').click(function () {
    $('.PaintOMimeGallery').toggleClass("hiddenpop");
  });
  $('.clsbtn5').click(function () {
    $('.PaintOMimeGallery').toggleClass("hiddenpop");
  });

  $('.EcoGanesh').click(function () {
    $('.EcoGaneshGallery').toggleClass("hiddenpop");
  });
  $('.clsbtn6').click(function () {
    $('.EcoGaneshGallery').toggleClass("hiddenpop");
  });

  $('.BayDecoration').click(function () {
    $('.BayDecorationGallery').toggleClass("hiddenpop");
  });
  $('.clsbtn7').click(function () {
    $('.BayDecorationGallery').toggleClass("hiddenpop");
  });

  $('.RangoliKites').click(function () {
    $('.RangoliKitesGallery').toggleClass("hiddenpop");
  });
  $('.clsbtn8').click(function () {
    $('.RangoliKitesGallery').toggleClass("hiddenpop");
  });

  $('.CompanyDay2016').click(function () {
    $('.CompanyDay2016Gallery').toggleClass("hiddenpop");
  });
  $('.clsbtn9').click(function () {
    $('.CompanyDay2016Gallery').toggleClass("hiddenpop");
  });

  $('.2015CompanyDay').click(function () {
      $('.2015CompanyDayGallery').toggleClass("hiddenpop");
  });
  $('.clsbtn10').click(function () {
      $('.2015CompanyDayGallery').toggleClass("hiddenpop");
  });

  $('.familyPicnic').click(function () {
      $('.familyPicnicGallery').toggleClass("hiddenpop");
  });
  $('.clsbtn11').click(function () {
      $('.familyPicnicGallery').toggleClass("hiddenpop");
  });
  $('.CorporateOlympics').click(function () {
      $('.CorporateOlympicsGallery').toggleClass("hiddenpop");
  });
  $('.clsbtn12').click(function () {
      $('.CorporateOlympicsGallery').toggleClass("hiddenpop");
  });
  $('.HyderabadMarathon').click(function () {
      $('.HyderabadMarathonGallery').toggleClass("hiddenpop");
  });
  $('.clsbtn13').click(function () {
      $('.HyderabadMarathonGallery').toggleClass("hiddenpop");
  });
  $('.CricketTourney').click(function () {
      $('.CricketTourneyGallery').toggleClass("hiddenpop");
  });
  $('.clsbtn14').click(function () {
      $('.CricketTourneyGallery').toggleClass("hiddenpop");
  });
 
});


//hello gallery tab
function openYear(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("albumYear");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("yearTab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" barstrip", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " barstrip";
}
var myBtn = document.getElementsByClassName("yearTab")[0];
myBtn.click();

//end of gallery tab

//

function openDivision(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("division");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("Divisionlink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" barstrip", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " barstrip";
}
var myBtn = document.getElementsByClassName("Divisionlink")[0];
myBtn.click();
//


//slideshow
var slideIndex = 1;

function plusDivs(n, parent) {
    showDivs(slideIndex += n, parent);
}
function currentDiv(n, parent) {

    showDivs(slideIndex = n, parent);
}
function showDivs(n, parent) {
    var i;
    var x = $('.' + parent).find(".Slides");

    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-red", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-red";
}
//end of slideshow
