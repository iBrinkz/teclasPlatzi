var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};//Objeto que almacena constantes

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("espacio");//obtiene la etiqueta del canva del html
var papel = cuadrito.getContext("2d");//obtiene el contexto del canva, en este caso es 2d
var x = 150;//variable en x del punto a iniciar
var y = 150;//variable en y del punto a iniciar

dibujarLinea("blue", x-1, y-1, x+1, y+1, papel);//dibuja una diagonal pero dibuja un punto
//Funcion para dibujar
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

//funcion para dibujar en el teclado que sera llamado en el evento listener
function dibujarTeclado(evento){
    var colorcito = "red";
    var desplazamiento = 10;

    switch(evento.keyCode){
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + desplazamiento, papel);
            y = y + desplazamiento;
        break;
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - desplazamiento, papel);
            y = y - desplazamiento;
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - desplazamiento, y, papel);
            x = x - desplazamiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + desplazamiento, y, papel);
            x = x + desplazamiento;
        break;
        default:
            console.log("Use las teclas direccionales del teclado para dibujar");
        break;
    }
}