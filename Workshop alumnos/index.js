/*usamos variable
var age = 28;
var firstName = "Maxwell";
var lastNmae = "Tompson";
/*variable flotante 
var temp = 12.2
//operador de igualdad === usar siempre en js
//operador comparador de tipo y valor de variables  == 

var person = {};

var name = prompt("Cual es tu nombre?");
person.age = prompt("Cual es tu edad?");
person.isOld = true;

if(person.age > 40) {
    person.isOld = true
} else {
    person.isOld = false;
};

console.log(person);*/

//calculadore
/*
var num1 = parseInt(prompt());
var sign = prompt();
var num2 = parseInt(prompt());

alert("No pusiste ningun signo");

switch (sign) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    default:
        alert("No pusiste ningun signo");
    
}

var name = prompt("Cual es tu nombre?");
    console.log("Hola " + name);

var num1 = 2;   
var num = prompt("Cual es tu edad?");
var num2 = parseInt(num);
result = num1 + num2;

console.log(result);

var num1 = 7;   
var num = prompt("Cuantas mascotas tenes?");
var num2 = parseInt(num);
result = num1 - num2;

console.log(result);

   
var num = prompt("Cuantos hermanos tenes?");
var num1 = prompt("Cuantos haermanas tenes?");
var num2 = parseInt(num1);
var num3 = parseInt(num);
result = num2 + num3;

console.log(result);
*/
/*
var dia = prompt("Ingrese dia");

switch (dia.toLowerCase()) {
    case "lunes":
        console.log("Semana");
    break;
    case "martes":
        console.log("Semana");
    break;
    case "miercoles":
        console.log("Semana");
    break;
    case "jueves":
        console.log("Semana");
    break;
    case "viernes":
        console.log("Semana");
    break;
    case "sabado":
        console.log("Fin de semana");
    break;
    case "domingo":
        console.log("Fin de semana");
    break;
}
*/

var genero = prompt("Ingrese su genero");
var edad = prompt("Ingrese su edad");

if(genero != "female" && "male"){
    console.log("Sx. ");
} else if(genero === "female"){
    console.log("Sra. ")
} else if(genero === "male"){
    console.log("Sr. ");
}














