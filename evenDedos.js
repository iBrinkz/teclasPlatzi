var cuadro = document.getElementById("area");
var cuadradito = cuadro.getContext("2d");
var tocar = false;
var color = "blue";
var desplazamiento = 2;

document.addEventListener("touchstart", empezarADibujar);
document.addEventListener("touchend", noDibujar);
document.addEventListener("touchmove", trazar);

function empezarADibujar(){
    tocar = true;
}

function dibujar(xInicial, yInicial, areaDibujo){
    areaDibujo.beginPath();
    areaDibujo.strokeStyle = color;
    areaDibujo.lineWidth = 3;
    areaDibujo.moveTo(xInicial, yInicial);
    areaDibujo.lineTo(xInicial + desplazamiento, yInicial + desplazamiento);
    areaDibujo.stroke();
    areaDibujo.closePath();
}
//Realiza el dibujo
function trazar(coordenada){
    if(tocar){
        var ejeX = coordenada.touches[0].clientX;
        var ejeY = coordenada.touches[0].clientY;
        dibujar(ejeX - cuadro.offsetLeft , ejeY - cuadro.offsetTop, cuadradito);
    }
}

function noDibujar(){ 
    tocar = false;
}