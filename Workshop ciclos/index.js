
var daysOfTheWeek = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
    "Pato"
]

for( var i = 0; i < 5; i++){
    var day = daysOfTheWeek[i]
    console.log("El " + day + " es un dia de semana");
}

for(i = 5; i < 7; i++){
    day = daysOfTheWeek[i];
    console.log("El " + day + " es fin de semana");
}

if(daysOfTheWeek = [7]){
    console.log("Pato es un valor invalido");
}





var operacion = prompt("Ingrese la operacion a realizar");
var parametro1 = parseInt(prompt("Ingrese un parametro"));
var parametro2 = parseInt(prompt("Ingrese otro parametro"));

switch (operacion) {
    case "sum":
        console.log("El resultado de la " + operacion + " es " + (parametro1 + parametro2));
        break;
    case "res":
        console.log("El resultado de la " + operacion + " es " + (parametro1 - parametro2));
        break;
    case "mul":
        console.log("El resultado de la " + operacion + " es " + (parametro1 * parametro2));
        break;
    case "div":
        console.log("El resultado de la " + operacion + " es " + (parametro1 / parametro2));

        var i = 0
        
        do{
            prompt("Ingrese el segundo parametro")
            i++

        } while (i > 1);
}






























































