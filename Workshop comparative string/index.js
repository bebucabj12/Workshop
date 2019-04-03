/* Objetos
var auto = {
    color:"verde",
    marca: "Volvo",
    modelo: 2018,
}

var ususario = {
    nombre: "Berenice",
    apellido: "Perez",
}

---------------------------------------------
Funciones estructurales

function Person(firstName, lastName, age){
    var numOld = 18;

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isOld = isOld;

    if(age > isOld){
        this.isOld = true;
    } else {
        this.isOld = false;
    }
}

var max = new Person ("Max" , "Tompson", 28);

console.log("Max");

-----------------------------------------------------------------

function Mascota(tamaño, pelaje, edad, peso) {
    var largoPelo = 20;

    this.tamaño = tamaño;
    this.pelaje = pelaje;
    this.edad = edad;
    this.peso = peso;

    if (largoPelo > 20) {
        this.peinado = "peinado disponible";
    } else {
        this.peinado = "No se puede peinar";
    };
};

var perro = new Mascota("Grande", "largo", "3", "29");


console.log(perro);

----------------------------------------------------------------------

var name = prompt("Ingrese un nombre");
var lastName = prompt("Ingrese apellido");

function comparative(nombre,apellido){
    typeof name === lastName;
}

comparative("bere", "bede");

-------------------------------------------------------------------------
*/

function includesText(text, baseText){
    if (typeof text === 'string' && typeof baseText === 'string'){
        if(text.toUpperCase().indexOf(baseText.toUpperCase()) !== -1){
            return true;
        } else {
            return false;
        }
}

includesText("Pa", "pablo");













































































































































