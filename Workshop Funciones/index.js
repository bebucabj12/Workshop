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




























