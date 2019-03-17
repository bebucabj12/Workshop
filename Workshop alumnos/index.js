var genero = prompt("Ingrese su genero");
var edad = prompt("Ingrese su edad");

if(genero != "female" && "male"){
    console.log("Sx. ");
} else if(genero === "female"){
    console.log("Sra. ")
} else if(genero === "male"){
    console.log("Sr. ");
}
