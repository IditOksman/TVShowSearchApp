const backButton = document.querySelector('#backButton');

backButton.addEventListener('click', function(){
    window.location.href = `file:///C:/Users/Nushik/Documents/web/TVShowSearchApp/index.html`;
})

function setShowData() {
    var movieObject = JSON.parse(localStorage["show"]);
    const movieTitle = document.querySelector('#showName');
    const movieImage = document.querySelector('#showImage');
    const movieDesc = document.querySelector('#showDescription');
    const movieScore = document.querySelector('#showScore');

    movieTitle.innerHTML = movieObject.show.name;
    movieImage.src = movieObject.show.image.medium;
    movieDesc.innerHTML = movieObject.show.summary;
    movieScore.innerHTML += movieObject.score;


}

setShowData();