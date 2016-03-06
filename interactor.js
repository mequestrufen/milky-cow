'use strict'

var Vehiculo = require('./vehiculo');

// controla la accion de los robots, interpretando <input>
var run = function(input){
    input.vehiculos.map(vehiculo => {
        
        // obtenemos los argumentos para crear cada vehiculo -> ...args        
        var args = vehiculo.posicion.split(' ');
        var robot = new Vehiculo(...args);
       
        // despachamos cada "robot" creado, y sus comandos:
        despacharVehiculo(robot, vehiculo.comando); 
    });
    
    return;
};

// despacha cada vehiculo e imprime su posicion final, despues de ejecutados sus comandos.
var despacharVehiculo = function(vehiculo, comando){
    
    // interpretamos cada comando e invocamos:
    var comandos = comando.split('');    
    comandos.map(command => {
       switch(command){
           case 'I':
                vehiculo.izquierda();
                break;
                
           case 'D':
                vehiculo.derecha();
                break;
                
           case 'M':
                vehiculo.mover();
                break;
       } 
    });
    
    // imprimimos a la stdout la posicion final del vehiculo:
    vehiculo.print();
}

// exports:
module.exports = {
    run
}