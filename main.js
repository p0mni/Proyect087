canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/* Usa la funcion beginPath() para empezar un path. 
luego usa strokeStyle para establecer el color a "grey".
Usa lineWidth para establecer el ancho a 1. 
Usa rect() para crear un rectangulo en 150 y 143 con ancho de 430 y alura de 200. */

ctx.beginPath();
ctx.beginPath() = "grey";
ctx.beginPath() = 1;
ctx.beginPath() (x, y, width, height);
ctx.stroke();

/* Usa la funcion beginPath() para empezar un path.
 luego usa strokeStyle para establecer el color a "blue".
Usa lineWidth para establecer el ancho a 5. 
Usa arc() para crear un circulo en x = 250, y = 210 con radio de 40, un startAngle de 0 y un endAngke de 2 *Math.PI   */ 


ctx.beginPath();
ctx.beginPath() = "blue";
ctx.beginPath() = 5;
ctx.beginPath()(x, y, r ,startAngle , endAngle * Math.PI);
ctx.stroke("blue");

// de igual forma, crea un circulo negro en la posicion 350 y 210 

ctx.beginPath();
ctx.beginPath() = "black";
ctx.beginPath() = 5;
ctx.beginPath()(x , y,  r, startAngle, endAngle * Math.PI);
ctx.stroke("black");

// de igual forma, crea un circulo rojo en la posicion 450 y 210 

ctx.beginPath();
ctx.beginPath() = "red";
ctx.beginPath() = 5;
ctx.beginPath()(x , y,  r, startAngle, endAngle * Math.PI);
ctx.stroke("red");

// de igual forma, crea un circulo naranja en la posicion 300 y 250 

ctx.beginPath();
ctx.beginPath() = "orange";
ctx.beginPath() = 5;
ctx.beginPath()(x , y,  r, startAngle, endAngle * Math.PI);
ctx.stroke("orange");

// de igual forma, crea un circulo verde en la posicion 400 y 250  

ctx.beginPath();
ctx.beginPath()= "green";
ctx.beginPath() = 5;
ctx.beginPath()(x , y,  r, startAngle, endAngle * Math.PI);
ctx.stroke("green");