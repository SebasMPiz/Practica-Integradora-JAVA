const fs = require('fs');
const { builtinModules } = require('module');

let tareas = {

    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse( fs.readFileSync( this.archivo, 'utf-8') );
    },
    escribirJSON: function (variable) {
        return fs.writeFileSync(this.archivo, JSON.stringify(variable))
    },
    guardarTarea: function (tareaAGuardar) {
        let arrayCompleto = this.leerJSON();
        arrayCompleto.push(tareaAGuardar);
        return this.escribirJSON(arrayCompleto)
    },
    leerPorEstado: function(estadoAConsultar) {    
        return this.leerJSON().filter(tarea => tarea.estado === estadoAConsultar)
    }}
        
module.exports = tareas


