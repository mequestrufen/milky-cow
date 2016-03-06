'use strict'

var Vehiculo = require('./vehiculo');
var Interactor = require('./interactor');

// inputs:
var input = {
    plano: '5 5',
    vehiculos: [{
        posicion: '1 2 N',
        comando: 'IMIMIMIMM'
    },
    {
        posicion: '3 3 E',
        comando: 'MMDMMDMDDM'
    }]   
};

// invocamos la secuencia de envio de robots:
Interactor.run(input);


// veamos:
// var v = new Vehiculo(1, 1, 'N');

// v.print();

// v.derecha();
// v.print();

// v.mover();
// v.print();