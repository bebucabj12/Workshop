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

---------------------------------------------------------------------------------

var genero = prompt("Ingrese su genero");
var edad = prompt("Ingrese su edad");

if(genero === "male"){
   console.log("Sr. ");
} else if(genero === "female"){
    console.log("Sra. ")
} else {
   console.log("Sx. ");
}

if(edad >= 18){
    prompt( " usted es mayor de edad puede ingresar.");    
} else {
    prompt( " usted es menor de edad no puede ingresar");
}

---------------------------------------------------------------------------------
// Pido la opración a realizar
var operation = prompt('Ingrese la operación a realizar, sum, res, mul o div')

// Pido el primer número
var number1 = parseInt(prompt('Ingerese el primer número'));

// Pido el segundo número al menos una vez, si la operación es división
// e ingreso cero lo pido de nuevo
var number2;

do {
  number2 = parseInt(prompt('Ingerese el segundo número'));
} while (operation === 'div' && number2 === 0)

// Creo una variable para guardar el resultado
var result;

// Comparo la operación elegida por el usuario para calcular el resultado
switch (operation) {
  case 'sum':
    result = number1 + number2
    break
  case 'res':
    result = number1 - number2
    break
  case 'mul':
    result = number1 * number2
    break
  case 'div':
    result = number1 / number2
    break
  default:
    result = 'Operación incorrecta'
    break
}

// Creo una variable donde voy a guardar el mensaje
// que muestro como resultado de la operación
var message = 'El resultado de la ' + operation + ' es: ' + result

// Muestro el mensaje en consola
console.log(message)


function hello(name){
    alert("Hola " + name);
}

var names = [
    "Max", "Tom", "Laura"
]

for(var i= 0; i < name.lenght; i++){
    hello(names[i]);
}



var nombre = prompt("Ingrese su nombre");
var apellido = prompt("Ingrese su apellido");

function saludo(nombre, apellido){
    var saludar("Hola " + nombre + apellido);
}

alert(saludar);


f"Hola unction hi (firstName, lastName){
    return 
}
-----------------------------------------------------------------------------------

Funciones estructurales (clase 3)

var studentList = [];

function Student(firstName,lastName,dni,mail){
    var id = Math.random();

    this.firstName = firstName;
    this.lastName = lastName;
    this.dni = dni;
    this.mail = mail;

this.getId = function (){
    if(this.firstName && this.lastName){
        return this.firstName + " " + this.lastName;
    } else {
        return " "
    }
} 
}
var student1 = new Student("pepe","ramirez",3425647,"berita@gmail.com");
var student2 = new Student("juna","rodriguez",3425455,"junaf@gmail.com");
var student3 = new Student("jose","perez",3425876,"josea@gmail.com");

studentList.push(student1);
studentList.push(student2);
studentList.push(student3);

console.log(studentList);
--------------------------------------------------------------------------------------
function Comparative(par1,par2){
    
    if(typeOf par1 === "string" && typeOf par2 === "String"){
        return true;
    } else {
        return false;
    }
}
-------------------------------------------------------------------------------------------------
function capture(){
    function Students(nombre, apellido, dni, mail){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.mail = mail;
    }
    var nombreCapturar = document.getElementById("nombre").value;
    var apellidoCapturar = document.getElementById("apellido").value;
    var dniCapturar = document.getElementById("dni").value;
    var mailCapturar = document.getElementById("mail").value;

    newStudent = new Students(nombreCapturar, apellidoCapturar, dniCapturar, mailCapturar);
}

 var dateBase = [];
 
 function add(){
     dateBase.push(newStudent);
 }

 -------------------------------------------------------------------------------------------------------

var studentList = [];
function Student(firstName,lastName,dni,mail){
    var id = Math.random();
    this.firstName = firstName;
    this.lastName = lastName;
    this.dni = dni;
    this.mail = mail;
this.getId = function (){
    if(this.firstName && this.lastName){
        return this.firstName + " " + this.lastName;
    } else {
        return " "
    }
};


var student1 = new Student ("pepe","ramirez",3425647,"berita@gmail.com");
var student2 = new Student ("juna","rodriguez",3425455,"junaf@gmail.com");
var student3 = new Student ("jose","perez",3425876,"josea@gmail.com");

studentList.push(student1);
studentList.push(student2);
studentList.push(student3);

console.log(studentList);

--------------------------------------------------------------------------------------------------- 
*/

var studentsList = [
    {
      firstName: 'Juan',
      lastName: 'Pérez',
      dni: 45678987
    },
    {
      firstName: 'Ana',
      lastName: 'Fernandez',
      dni: 45678989
    },
    {
      firstName: 'Pedro',
      lastName: 'Mármol',
      dni: 45678956
    },
    {
      firstName: 'Pablo',
      lastName: 'Picapiedras',
      dni: 45678983
    }
  ]

  var name = prompt("ingrese un nombre");
  
  function buscarAlumnos(){
      var i = 0;
      var position = studentsList[i];

      for(i=0; i<studentsList.length; i++){
          if(name === studentsList[i] && name === studentsList[i]){
          console.log("Se encontro el estudienta en la posicion " + position);
          return position;
        } else {
          console.log("No se pudo encontrar el estudiante");
          return -1
        }
  };

  buscarAlumnos(name);




























