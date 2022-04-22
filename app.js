let tareas = require("./tareas");
let argumento = process.argv[2]

switch (argumento){
    case "listar": 
    tareas.leerJSON().forEach(tarea => console.log(tarea))
    break;
    case undefined:
    console.log("Atención - Tienes que pasar una acción, puedes ingresar crear, filtrar, listar, help")
    break;
    default: 
    console.log("No entiendo que quieres hacer, puedes ingresar crear, filtrar, listar, help")
    break;
    case "crear":
    let arrayIngreso = process.argv
    arrayIngreso.shift(); arrayIngreso.shift(); arrayIngreso.shift();
    stringIngreso = arrayIngreso.join(" ")
    tareas.guardarTarea({titulo: stringIngreso, estado: "pendiente"})
    break;
    case "filtrar":
    let arrayIngreso2 = process.argv
    arrayIngreso2.shift(); arrayIngreso2.shift(); arrayIngreso2.shift();
    stringIngreso = arrayIngreso2.join(" ")
    console.log(tareas.leerPorEstado(stringIngreso))
    break;
    case "help":
    console.log("Puede ingresar los siguientes parametros: crear, filtrar, listar, help")

}

