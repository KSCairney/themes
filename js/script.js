$(document).ready(function(){
    $('#tut').click(function(){
        $('#littleman').attr('src', './img/arte2.png');
        $('#littleplace').attr('src', './img/arte4.png');
        $('.soil').css('background-color', '#a09b6e');
        $('.grassland').css('background-color', '#f9e386');
        $('#tut').addClass('blackout')
        $('#blank, #breton, #indy, #chu').removeClass('blackout')
    });
    
    $('#indy').click(function(){
        $('#littleman').attr('src', './img/arta2.png');
        $('#littleplace').attr('src', './img/arta4.png');
        $('.soil').css('background-color', '#876a5b');
        $('.grassland').css('background-color', '#7fad6b');
        $('#indy').addClass('blackout')
        $('#blank, #tut, #chu, #breton').removeClass('blackout')
    });
    
    $('#chu').click(function(){
        $('#littleman').attr('src', './img/artc2.png');
        $('#littleplace').attr('src', './img/artc4.png');
        $('.soil').css('background-color', '#68614d');
        $('.grassland').css('background-color', '#fffa9e');
        $('#chu').addClass('blackout')
        $('#blank, #tut, #indy, #breton').removeClass('blackout')
    });
    
    $('#breton').click(function(){
        $('#littleman').attr('src', './img/artp2.png');
        $('#littleplace').attr('src', './img/artp4.png');
        $('.soil').css('background-color', '#685642');
        $('.grassland').css('background-color', '#3b6d40');
        $('#breton').addClass('blackout')
        $('#blank, #tut, #indy, #chu').removeClass('blackout')
    });
    
    $('#proj00').click(function(){
        $('#proj00').addClass('blackout');
        $('#proj01, #proj02, #proj03, #proj04, #proj05, #proj06, #proj07, #proj08').removeClass('blackout')
    });
    $('#proj01').click(function(){
        $('#proj01').addClass('blackout');
        $('#proj00, #proj02, #proj03, #proj04, #proj05, #proj06, #proj07, #proj08').removeClass('blackout')
    });
    $('#proj02').click(function(){
        $('#proj02').addClass('blackout');
        $('#proj01, #proj00, #proj03, #proj04, #proj05, #proj06, #proj07, #proj08').removeClass('blackout')
    });
    $('#proj03').click(function(){
        $('#proj03').addClass('blackout');
        $('#proj01, #proj02, #proj00, #proj04, #proj05, #proj06, #proj07, #proj08').removeClass('blackout')
    });
    $('#proj04').click(function(){
        $('#proj04').addClass('blackout');
        $('#proj01, #proj02, #proj03, #proj00, #proj05, #proj06, #proj07, #proj08').removeClass('blackout')
    });
    $('#proj05').click(function(){
        $('#proj05').addClass('blackout');
        $('#proj01, #proj02, #proj03, #proj04, #proj00, #proj06, #proj07, #proj08').removeClass('blackout')
    });
    $('#proj06').click(function(){
        $('#proj06').addClass('blackout');
        $('#proj01, #proj02, #proj03, #proj04, #proj05, #proj00, #proj07, #proj08').removeClass('blackout')
    });
    $('#proj07').click(function(){
        $('#proj07').addClass('blackout');
        $('#proj01, #proj02, #proj03, #proj04, #proj05, #proj06, #proj00, #proj08').removeClass('blackout')
    });
    $('#proj08').click(function(){
        $('#proj08').addClass('blackout');
        $('#proj01, #proj02, #proj03, #proj04, #proj05, #proj06, #proj00, #proj07').removeClass('blackout')
    });
    
    $('#littleme').hover(function(){
        $(this).attr('src', 'img/photovesuvius.jpg');
    }, function(){
        $(this).attr('src', 'img/artvesuvius2.png');
    });
    
    $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 262) {
      $('.dirtnav').addClass('dirtnav-stick');
    }
    if ($(window).scrollTop() < 263) {
      $('.dirtnav').removeClass('dirtnav-stick');
    }
  });
});

function holy() {
    document.getElementById("projsect").innerHTML = '<a href="https://damp-retreat-24388.herokuapp.com/"><img src="img/grale.JPG"></a><p class="projname">The Holy GrALE</p><p>A rails website for a micropub with an updatable beer list.</p><i class="devicon-ruby-plain-wordmark"></i><i class="devicon-rails-plain-wordmark"></i><i class="devicon-javascript-plain"></i><i class="devicon-jquery-plain-wordmark"></i><i class="devicon-html5-plain-wordmark"></i><i class="devicon-css3-plain-wordmark"></i><i class="devicon-github-plain-wordmark"></i><i class="devicon-heroku-plain-wordmark"></i>'
};

function listy() {
    document.getElementById("projsect").innerHTML = '<a href="https://shopping-time-99c16.firebaseapp.com/"><img src="img/listy.jpg"></a><p class="projname">Shopping Time</p><p>A simple app to build a shopping list.</p><i class="devicon-angularjs-plain-wordmark"></i><i class="devicon-nodejs-plain-wordmark"></i><i class="devicon-javascript-plain"></i><i class="devicon-html5-plain-wordmark"></i><i class="devicon-css3-plain-wordmark"></i><i class="devicon-git-plain-wordmark"></i>'
};

function namisgv() {
    document.getElementById("projsect").innerHTML = '<a href="https://limitless-savannah-63020.herokuapp.com/"><img src="img/nsgv.jpg"></a><p class="projname">NAMI San Gabriel Valley</p><p>A rails website for a local charity.</p><i class="devicon-ruby-plain-wordmark"></i><i class="devicon-rails-plain-wordmark"></i><i class="devicon-javascript-plain"></i><i class="devicon-jquery-plain-wordmark"></i><i class="devicon-html5-plain-wordmark"></i><i class="devicon-css3-plain-wordmark"></i><i class="devicon-git-plain-wordmark"></i><i class="devicon-heroku-plain-wordmark"></i>'
};

function bikeb() {
    document.getElementById("projsect").innerHTML = '<a href="https://kscbikeberlin.herokuapp.com/"><img src="img/bikeberlin.jpg"></a><p class="projname">Bike Berlin</p><p>A used bike eCommerce site.</p><i class="devicon-ruby-plain-wordmark"></i><i class="devicon-rails-plain-wordmark"></i><i class="devicon-javascript-plain"></i><i class="devicon-jquery-plain-wordmark"></i><i class="devicon-html5-plain-wordmark"></i><i class="devicon-css3-plain-wordmark"></i><i class="devicon-github-plain-wordmark"></i><i class="devicon-heroku-plain-wordmark"></i>'
};

function eel() {
    document.getElementById("projsect").innerHTML =  '<a href="http://englishelearning.co.uk/"><img src="img/eel.jpg"></a><p class="projname">English E-Learning</p><p>A simple site for a private freelance English teacher.</p><i class="devicon-javascript-plain"></i><i class="devicon-jquery-plain-wordmark"></i><i class="devicon-html5-plain-wordmark"></i><i class="devicon-css3-plain-wordmark"></i><i class="devicon-github-plain-wordmark"></i>'
};

function port2() {
    document.getElementById("projsect").innerHTML = '<a href="https://kscairney.github.io/K-S-Cairney/"><img src="img/porto.JPG"></a><p class="projname">Alt Portfolio</p><p>A simpler alternative portfolio.</p><i class="devicon-javascript-plain"></i><i class="devicon-jquery-plain-wordmark"></i><i class="devicon-html5-plain-wordmark"></i><i class="devicon-css3-plain-wordmark"></i><i class="devicon-github-plain-wordmark"></i>'
};

function tsun() {
     document.getElementById("projsect").innerHTML = '<a href="https://kscairney.github.io/Tsundoku/"><img src="img/tsundoku.jpg"></a><p class="projname">Tsundoku</p><p>A book blog with random book recommendations.</p><i class="devicon-javascript-plain"></i><i class="devicon-jquery-plain-wordmark"></i><i class="devicon-html5-plain-wordmark"></i><i class="devicon-css3-plain-wordmark"></i><i class="devicon-github-plain-wordmark"></i>'
};

function hop() {
    document.getElementById("projsect").innerHTML = '<img src="img/hopping.jpg"><p class="projname">Hopping the Pond</p><p>A travel blog with polaroid posts.</p><i class="devicon-javascript-plain"></i><i class="devicon-jquery-plain-wordmark"></i><i class="devicon-html5-plain-wordmark"></i><i class="devicon-css3-plain-wordmark"></i><i class="devicon-github-plain-wordmark"></i>'
};

function paint() {
    document.getElementById("projsect").innerHTML = '<a href="https://kscairney.github.io/PaintyMcPixel/"><img src="img/pain.jpg"></a><p class="projname">Painty Pixel</p><p>A simple javascript drawing app.</p><i class="devicon-javascript-plain"></i><i class="devicon-jquery-plain-wordmark"></i><i class="devicon-html5-plain-wordmark"></i><i class="devicon-css3-plain-wordmark"></i><i class="devicon-github-plain-wordmark"></i>'
};