// ESTUDIANTE-A
// Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
// Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que retorne los estudiantes de un semestre dado.
// La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14} Función: estudiantesSemestre.
// Parámetros: estudiantes (array de objetos estudiante), semestre (un número).
// Retorno: array de objetos estudiante que pertenecen al semestre indicado. 

import Estudiante from "./clases/estudiantes.js";
import GrupoEstudiantes from "./clases/grupoEstudiantes.js";
import datos from "./datos.js";

let _grupoEstudiantes=new GrupoEstudiantes()
let $salida=document.getElementById("salida")
let $filtrarBtn=document.getElementById("filtrar")
datos.forEach(dato=>{
    let _nuevoEstudiante=new Estudiante(dato)
    _grupoEstudiantes.agregarEstudiante(_nuevoEstudiante)

})

$salida.innerHTML=`
    <h2>Los estudiantes son:</h2>
    <br>
    <ul>
        ${_grupoEstudiantes.estudiantes.map(estudiante=>{
            return `<li>${estudiante.nombre} - ${estudiante.semestre} semestre </li>`
        })}
    </ul>

`

let estudiantesSemestre=(estudiantes, semestre)=>{

    return estudiantes.filter(estudiante=>estudiante.semestre===semestre)

}

$filtrarBtn.addEventListener("click",e=>{

let semestre=+prompt("En base a cual semestre quieres filtrar a los estudiantes?(escribe 0 si quieres ver a todos los estudiantes)")

if(semestre===0){

    $salida.innerHTML=`
    <h2>Los estudiantes son:</h2>
    <br>
    <ul>
        ${_grupoEstudiantes.estudiantes.map(estudiante=>{
            return `<li>${estudiante.nombre} - ${estudiante.semestre} semestre </li>`
        })}
    </ul>
    `
}

if(semestre){
    let _estudiantesSemestre=estudiantesSemestre(_grupoEstudiantes.estudiantes, semestre)

    $salida.innerHTML=`
    <h2>Los estudiantes del semestre ${semestre} son</h2>
    <br>
    <ul>
        ${_estudiantesSemestre.map(estudiante=>{
            return `<li>${estudiante.nombre}</li>`
        })}
    </ul>
    `
}


})