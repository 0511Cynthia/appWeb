let animes;
const imagenes = document.getElementById("imagenes");

async function logMovies() {
    const response = await fetch("https://api.jikan.moe/v4/anime?q=naruto&sfw");
    const movies = await response.json();
    const data = movies.data;
    console.log(movies);
    animes = [data[0], data[1], data[2], data[3]];
  }

  function renderAnimes(){
    console.log(animes);
    animes.map((anime) => { 
    const animeCard = document.createElement("div");
    animeCard.classList.add('animeCard');
    animeCard.innerHTML = `<img src="${anime.images.jpg.image_url}"/>`;
    imagenes.appendChild(animeCard);
    });
  }

  async function getAnimes(){
    await logMovies();
    renderAnimes();
  }
  
  const btn = document.getElementById('btnAnime')

  btn.addEventListener("click", getAnimes, false);




function aviso(){
    alert('Ya estás en esta página')
}
function aviso2(){
    alert('Página no disponible')
}
function cambio(){
    var fondo=document.getElementById('btn1')
    var fondo2=document.getElementById('btn2')    
    fondo.style.backgroundColor="#91bcea"
    fondo2.style.backgroundColor="#91bcea"
}
function verForm(){
    var ver=document.getElementById('form')
    ver.style.display="block"
}
function aceptarNombre(){
    var nombre=document.getElementById('nombre').value
    var ver=document.getElementById('form')
    console.log(nombre)
    if (nombre=="") {
        alert('ingresa el nombre')
    }else{
        alert('Nombre aceptado')
        ver.style.display="none"
    }
}