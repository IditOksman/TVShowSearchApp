const form = document.querySelector("#searchForm");
const resetBtn = document.querySelector("#reset");

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value; //gives the input value
    const config = { params: {q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    //console.log(res.data)
    makeImages(res.data)
    form.elements.query.value = '';
})

resetBtn.addEventListener('click', function() {
    const imgs = document.querySelectorAll('IMG');
    for(let img of imgs) {
        img.remove();
    }
})

const makeImages = (shows) => { 
    for(let result of shows) {
        if(result.show.image) {
            const img = document.createElement('IMG');
            img.addEventListener('click', () => {
                showMovieDescription(result);
            });
            img.src = result.show.image.medium;
            document.body.append(img)
        }  
    }
}

const showMovieDescription = (show) => {
    console.log(show);
    localStorage["show"] = JSON.stringify(show);
    window.location.href = `./movieDescription.html`;
}
