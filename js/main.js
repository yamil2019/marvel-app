const marvel = {
    render:() => {
        
        const urlAPI ="https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=5eefbc99eadfa8353154face3bd72bc0&hash=396cb8d9e45a0a16ded0159c3a4ee834";
        const contImagenes = document.querySelector("#marvelFont");
        let contenidoHtml = "";

        fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
            console.log(json, "RES.JSON")
            for(const hero of json.data.results){
                let urlHeroes = hero.urls[0].url;
                contenidoHtml +=`
                <div class="card">
                    <a class="card-link" href="${urlHeroes}" target="_blank"></a>
                    <div class="card-image" style="background-image: url(${hero.thumbnail.path}.${hero.thumbnail.extension})">
                    </div>

                    
                    <h4 class="title">${hero.name}</h4>
                    <p> ${hero.description}</p>
                    
                </div>
                `
            }
            contImagenes.innerHTML = contenidoHtml;
        })

    }
};

marvel.render();

const creators = {
    render:() => {
        
        const urlAPI ="https://gateway.marvel.com:443/v1/public/creators?limit=3&ts=1&apikey=5eefbc99eadfa8353154face3bd72bc0&hash=396cb8d9e45a0a16ded0159c3a4ee834";
        const contDirectores = document.querySelector("#creatorsFounds");
        let contenidoHtml = "";

        fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
            console.log(json, "RES.JSON")
            for(const directores of json.data.results){
                let urlDirectores = directores.urls[0].url;
                contenidoHtml +=`
                <div class="card">
                    <a class="card-link" href="${urlDirectores}" target="_blank"></a>
                    <div class="card-image" style="background-image: url(${directores.thumbnail.path}.${directores.thumbnail.extension})">
                    </div>
                    <h4 class="title">${directores.firstName}</h4>
                    <p>${directores.urls.wiki}</p>
                </div>
                `
            }
            contDirectores.innerHTML = contenidoHtml;
        })

    }
};

creators.render()

/* navmedia*/

$(".navBtn").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});

document.querySelector(".menu-btn").addEventListener("click", () =>{
    document.querySelector(".nav-menu").classList.toggle("show");
})
  