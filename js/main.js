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
    const postList = document.querySelector('ul.post-list');
    var eachPost = postList.childNodes,
    numberOfPosts = eachPost.length;

    for(var i = 0; i < numberOfPosts; i++){
        
    }
}