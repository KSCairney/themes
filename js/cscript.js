$(document).ready(function(){
    $('#proj00').click(function(){
        $('#proj00').addClass('chosen');
        $('#proj01, #proj02, #proj03, #proj04, #proj05, #proj06, #proj07, #proj08, #proj09, #proj10, #proj11, #proj12, #proj13').removeClass('chosen')
    });
    $('#proj01').click(function(){
        $('#proj01').addClass('chosen');
        $('#proj00, #proj02, #proj03, #proj04, #proj05, #proj06, #proj07, #proj08, #proj09, #proj10, #proj11, #proj12, #proj13').removeClass('chosen')
    });
    $('#proj02').click(function(){
        $('#proj02').addClass('chosen');
        $('#proj01, #proj00, #proj03, #proj04, #proj05, #proj06, #proj07, #proj08, #proj09, #proj10, #proj11, #proj12, #proj13').removeClass('chosen')
    });
    $('#proj03').click(function(){
        $('#proj03').addClass('chosen');
        $('#proj01, #proj02, #proj00, #proj04, #proj05, #proj06, #proj07, #proj08, #proj09, #proj10, #proj11, #proj12, #proj13').removeClass('chosen')
    });
    $('#proj04').click(function(){
        $('#proj04').addClass('chosen');
        $('#proj01, #proj02, #proj03, #proj00, #proj05, #proj06, #proj07, #proj08, #proj09, #proj10, #proj11, #proj12, #proj13').removeClass('chosen')
    });
    $('#proj05').click(function(){
        $('#proj05').addClass('chosen');
        $('#proj01, #proj02, #proj03, #proj04, #proj00, #proj06, #proj07, #proj08, #proj09, #proj10, #proj11, #proj12, #proj13').removeClass('chosen')
    });
    $('#proj06').click(function(){
        $('#proj06').addClass('chosen');
        $('#proj01, #proj02, #proj03, #proj04, #proj05, #proj00, #proj07, #proj08, #proj09, #proj10, #proj11, #proj12, #proj13').removeClass('chosen')
    });
    $('#proj07').click(function(){
        $('#proj07').addClass('chosen');
        $('#proj01, #proj02, #proj03, #proj04, #proj05, #proj06, #proj00, #proj08, #proj09, #proj10, #proj11, #proj12, #proj13').removeClass('chosen')
    });
    $('#proj08').click(function(){
        $('#proj08').addClass('chosen');
        $('#proj01, #proj02, #proj03, #proj04, #proj05, #proj06, #proj00, #proj07, #proj09, #proj10, #proj11, #proj12, #proj13').removeClass('chosen')
    });
    $('#proj09').click(function(){
        $('#proj09').addClass('chosen');
        $('#proj01, #proj02, #proj03, #proj04, #proj05, #proj06, #proj00, #proj07, #proj08, #proj10, #proj11, #proj12, #proj13').removeClass('chosen')
    });
    $('#proj10').click(function(){
        $('#proj10').addClass('chosen');
        $('#proj01, #proj02, #proj03, #proj04, #proj05, #proj06, #proj00, #proj07, #proj08, #proj09, #proj11, #proj12, #proj13').removeClass('chosen')
    });
    $('#proj11').click(function(){
        $('#proj11').addClass('chosen');
        $('#proj01, #proj02, #proj03, #proj04, #proj05, #proj06, #proj00, #proj07, #proj08, #proj09, #proj10, #proj12, #proj13').removeClass('chosen')
    });
    $('#proj12').click(function(){
        $('#proj12').addClass('chosen');
        $('#proj01, #proj02, #proj03, #proj04, #proj05, #proj06, #proj00, #proj07, #proj08, #proj09, #proj10, #proj11, #proj13').removeClass('chosen')
    });
    $('#proj13').click(function(){
        $('#proj13').addClass('chosen');
        $('#proj01, #proj02, #proj03, #proj04, #proj05, #proj06, #proj00, #proj07, #proj08, #proj09, #proj10, #proj11, #proj12').removeClass('chosen')
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

function neko() {
    document.getElementById("projsect").innerHTML = '<a href="https://intense-ridge-47478.herokuapp.com/"><img src="img/neko.JPG"></a><p class="projname">Neko Jita</p><p>An in-progress react based ecommerce site, selling coffee.</p><i class="devicon-javascript-plain"></i><i class="devicon-react-original-wordmark"></i><i class="devicon-css3-plain-wordmark"></I><i class="devicon-bootstrap-plain-wordmark"></i><i class="devicon-github-plain-wordmark"></i><i class="devicon-heroku-plain-wordmark"></i>'
};

function yellow() {
    document.getElementById("projsect").innerHTML = '<a href="https://readalongyellowwallpaper.herokuapp.com/"><img src="img/yellowwallpaper.JPG"></a><p class="projname">Read Along: The Yellow Wallpaper</p><p>A read along app of the short story, The Yellow Wallpaper</p><i class="devicon-javascript-plain"></i><i class="devicon-react-original-wordmark"></i><i class="devicon-css3-plain-wordmark"></i><i class="devicon-github-plain-wordmark"></i><i class="devicon-heroku-plain-wordmark"></i>'
};

function next() {
    document.getElementById("projsect").innerHTML = '<a href="https://kscairney.github.io/yournextbook/"><img src="img/Your Next Favorite Book.JPG"></a><p class="projname">Your Next Favorite Book</p><p>A re-do of an older idea, a JavaScript based book recommendation app.</p><i class="devicon-javascript-plain"></i><i class="devicon-html5-plain-wordmark"></i><i class="devicon-css3-plain-wordmark"></i><i class="devicon-github-plain-wordmark"></i>'
};

function rose() {
    document.getElementById("projsect").innerHTML = '<a href="http://www.nancyforrosemead.com/"><img src="img/eng.JPG"></a><p class="projname">Nancy For Rosemead</p><p>A rails website for a city council campaign.</p><i class="devicon-ruby-plain-wordmark"></i><i class="devicon-rails-plain-wordmark"></i><i class="devicon-javascript-plain"></i><i class="devicon-html5-plain-wordmark"></i><i class="devicon-css3-plain-wordmark"></i><i class="devicon-bitbucket-plain-wordmark"></i><i class="devicon-heroku-plain-wordmark"></i>'
};

function wcf() {
    document.getElementById("projsect").innerHTML = '<a href="https://wcfootball.herokuapp.com/"><img src="img/wcfootball.JPG"></a><p class="projname">World Cup Football Pick\'em</p><p>A website for the coming World Cup where users can predict winners.</p><i class="devicon-ruby-plain-wordmark"></i><i class="devicon-rails-plain-wordmark"></i><i class="devicon-javascript-plain"></i><i class="devicon-jquery-plain-wordmark"></i><i class="devicon-html5-plain-wordmark"></i><i class="devicon-css3-plain-wordmark"></i><i class="devicon-github-plain-wordmark"></i><i class="devicon-heroku-plain-wordmark"></i>'
};

function listy() {
    document.getElementById("projsect").innerHTML = '<a href="https://shopping-time-99c16.firebaseapp.com/"><img src="img/listy.jpg"></a><p class="projname">Shopping Time</p><p>A simple app to build a shopping list.</p><i class="devicon-angularjs-plain"></i><i class="devicon-nodejs-plain-wordmark"></i><i class="devicon-javascript-plain"></i><i class="devicon-html5-plain-wordmark"></i><i class="devicon-css3-plain-wordmark"></i><i class="devicon-github-plain-wordmark"></i>'
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