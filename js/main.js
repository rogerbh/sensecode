// equivalente ao document.ready da biblioteca jQuery
// in case the document is already rendered
if (document.readyState!='loading'){
    randomPostWidth();
}
// modern browsers
else if (document.addEventListener){
    document.addEventListener('DOMContentLoaded', function(){
        randomPostWidth();
    });
}
// FIM equivalente ao document.ready da biblioteca jQuery

function randomPostWidth(){
    const postList = document.querySelector('ul.post-list'),
    eachPost = postList.children;

    var numberOfPosts = eachPost.length,
    basisVal;

    for(var i = 0; i < numberOfPosts; i++){
        basisVal = randomIntFromInterval(20,45);
        eachPost[i].style['flex-basis'] = basisVal + '%';
    }
}

//método para gerar um número inteiro em determinado intervalo
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}