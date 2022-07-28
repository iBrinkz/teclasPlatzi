var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("espacio");
var papel = cuadrito.getContext("2d");

dibujarLinea("red", 100, 100, 300, 300, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


function dibujarTeclado(evento){
    switch(evento.keyCode){
        case teclas.DOWN:
            console.log("abajo");
        break;
        case teclas.UP:
            console.log("arriba");
        break;
        case teclas.LEFT:
            console.log("Izquierda");
        break;
        case teclas.RIGHT:
            console.log("Derecha");
        break;
        default:
            console.log("Otra tecla");
        break;
    }
}