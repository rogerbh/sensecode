// equivalente ao document.ready da biblioteca jQuery
// in case the document is already rendered
if (document.readyState != 'loading') {
    randomPostWidth();
    //clickCountStart;
}
// modern browsers
else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', function () {
        randomPostWidth();
        //clickCountStart;
    });
}
// FIM equivalente ao document.ready da biblioteca jQuery

function randomPostWidth() {
    const postList = document.querySelector('ul.post-list');
    if (postList) {
        var eachPost = postList.querySelectorAll('li');

        var numberOfPosts = eachPost.length,
            basisVal;

        for (var i = 0; i < numberOfPosts; i++) {
            basisVal = randomIntFromInterval(20, 45);
            eachPost[i].style['flex-basis'] = basisVal + '%';

            //seta a cor da borda de topo de cada post
            eachPost[i].style.borderColor = get_random_color();
            eachPost[i].querySelector('h2').style.color = eachPost[i].style.borderTopColor

            eachPost[i].firstElementChild.addEventListener("mouseleave", function (e) {
                this.style.borderBottomColor = 'transparent';
            });
            eachPost[i].firstElementChild.addEventListener("mouseenter", function () {
                this.style.borderBottomColor = this.parentNode.style.borderTopColor;
            });
        }
    }
}

//método para gerar um número inteiro em determinado intervalo
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//métodos para gerar cores aleatórias
function rand(min, max) {
    return parseInt(Math.random() * (max - min + 1), 10) + min;
}

function get_random_color() {
    var h = rand(1, 300); // color hue between 1 and 360
    var s = rand(30, 50); // saturation 30-100%
    var l = rand(45, 55); // lightness 30-70%
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

/*
const btnMenuMobile = document.querySelector('.btn-toggle-menu'),
    menuCol = document.querySelector('.menu-col');

btnMenuMobile.addEventListener("click", function () {
    menuCol.querySelector('#menuMobile')
});
*/

$('body').on('click', '.btn-toggle-menu', function () {
    $(this).toggleClass(function () {
        return $(this).is('.menu-open, .menu-close') ? 'menu-open menu-close' : 'menu-open';
    });

    $('#menuMobile').toggle();
    $('.overlay-menu-mobile').toggle();
});

// var clicks = 0;
// function clickCount() {
//     clicks += 1;
//     console.log('--------------------------------------> ' + clicks);
// }

// function clickCountStart() {
//     var el = document.getElementById("svgToShowMe");
//     el.addEventListener("click", clickCount, false);
// }

// document.addEventListener("DOMContentLoaded", clickCountStart, false);