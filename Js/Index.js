import { jsPDF } from "jspdf";
  // Default export is a4 paper, portrait, using millimeters for units
  function generarPdf(){
  const doc = new jsPDF();
  doc.text("Hello world!", 10, 10);
  doc.save("a4.pdf");
}


function aviso(){
    alert('Ya estás en esta página')
}
function aviso2(){
    alert('Página no disponible')
}
function cambio(){
    var fondo=document.getElementById('btn1');
    var fondo2=document.getElementById('btn2');    
    fondo.style.backgroundColor="#91bcea";
    fondo2.style.backgroundColor="#91bcea";
}
function verForm(){
    var ver=document.getElementById('form');
    ver.style.display="block";
}
function aceptarNombre(){
    var nombre=document.getElementById('nombre').value;
    var ver=document.getElementById('form');
    console.log(nombre)
    if (nombre=="") {
        alert('ingresa el nombre');
    }else{
        alert('Nombre aceptado');
        ver.style.display="none";
    }
}