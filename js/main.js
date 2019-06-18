// equivalente ao document.ready da biblioteca jQuery
// in case the document is already rendered
if (document.readyState != 'loading') {
    randomPostWidth();
    if (document.getElementById('svgToShowMe') !== null)
        clickMeEvent();
}
// modern browsers
else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', function () {
        randomPostWidth();
        if (document.getElementById('svgToShowMe') !== null)
            clickMeEvent();
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

$(window).on('resize', function () {
    const el = document.getElementById("menuMobile");
    // Caso o menu esteja visível durante um window resize
    if (el.offsetParent !== null)
        el.style.display = 'none';
});

//rotina para exibir minha foto atual como easter egg
function ClickMeStuff() {
    return this.clicks = 0;
}

function clickMeEvent() {
    var el = document.getElementById("svgToShowMe"),
        myselfChild = document.getElementById("meChild"),
        myselfNow = document.getElementById("meNow"),
        clickHandle = new ClickMeStuff();

    el.addEventListener("click", registerClicks, false);

    function registerClicks() {
        clickHandle.clicks += 1;
        if (clickHandle.clicks === 7) {
            myselfChild.classList.add('me-child-out');
            setTimeout(function () {
                myselfChild.classList.add('d-none');
            }, 550);

            myselfNow.classList.add('me-now-in');
            myselfNow.classList.remove('d-none');

            setTimeout(function () {
                myselfChild.classList.add('me-child-in');
                myselfChild.classList.remove('me-child-out', 'd-none');

                myselfNow.classList.add('me-now-out');
                myselfNow.classList.remove('me-now-in');
                setTimeout(function () {
                    myselfNow.classList.add('d-none');
                    myselfNow.classList.remove('me-now-out');
                    myselfChild.classList.remove('me-child-in');
                }, 700);

                clickHandle.clicks = 0;

            }, 10000);

            //console.log('--------------------------------------> ' + clickHandle.clicks);
        }
    }
}
//FIM rotina para exibir minha foto atual como easter egg

//document.addEventListener("DOMContentLoaded", clickMeEvent, false);