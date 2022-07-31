var c = document.getElementById("espacio");
var cuadradito = c.getContext("2d");
var color = "red";
var xCuadradito = 0;
var yCuadradito = 0;
var xMargen = -8;
var yMargen = -8;

c.addEventListener("mousedown", empezarADibujar);

c.addEventListener("mouseup", noDibujar);


function dibujarMouse(evento){
    console.log("estoy presionando mouse");
    console.log(evento);
}

function dibujar(xinicial, yinicial, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xinicial + 1, yinicial + 1);
    lienzo.stroke();
    lienzo.closePath();
}

function empezarADibujar(darClick){
    c.addEventListener("mousemove", moviendose);
    console.log(darClick);
    
}

function noDibujar(e){
    c.removeEventListener("mousemove", moviendose);
    console.log(e);
}

var z =0;
var n = document.getElementById("numero");

function moviendose(mover){

    n.innerHTML = "(x,y): " + (mover.x-8) + ", " + (mover.y-8) ;
    console.log(mover);
}