var c = document.getElementById("espacio");
var cuadradito = c.getContext("2d");
var color = "red";
var desplazamiento = 2;//Para que simule un punto
//eventos 
document.addEventListener("mousedown", empezarADibujar);
document.addEventListener("mouseup", noDibujar);
//dibuja un punto en el espacio
function dibujar(xinicial, yinicial, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xinicial + desplazamiento, yinicial + desplazamiento);
    lienzo.stroke();
    lienzo.closePath();
}
//Empieza a dibujar al dar click izquierdo
function empezarADibujar(eje){
    dibujar(eje.x - c.offsetLeft, eje.y - c.offsetTop, cuadradito);//Al hacer click dibuja un punto
    document.addEventListener("mousemove", dibujarAlMover);//Ejecuta el evento mover y la funcion
}
//Dibuja al tener click sostenido y mover el cursor
function dibujarAlMover(mover){
    dibujar(mover.x - c.offsetLeft, mover.y - c.offsetTop, cuadradito);
}
//Dejar de dibujar al soltar click
function noDibujar(ejes){
    dibujar(ejes.x - c.offsetLeft, ejes.y - c.offsetTop, cuadradito);//Al soltar click agrega un punto
    document.removeEventListener("mousemove", dibujarAlMover);//finaliza el evento mover mouse
}