async function logMovies() {
    const response = await fetch(" https://api.jikan.moe/v4/anime?q=naruto&sfw");
    const movies = await response.json();
    console.log(movies);
  }
  
  const btn = document.getElementById('btnAnime')

  btn.addEventListener("click", logMovies, false);


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