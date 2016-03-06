'use strict'

const DIR_STATES = ['N', 'E', 'S', 'O'];


var vehiculo = function(x, y, dir){
    this.dir = dir;
    this.posx = x;
    this.posy = y;
    
    return this;
}

vehiculo.prototype.izquierda = function(){
    let val = DIR_STATES.indexOf(this.dir);
    let newDir = (val === 0) ? 3 : val -1;
        
    this.dir = DIR_STATES[newDir];
};
    
vehiculo.prototype.derecha = function(){
    let val = DIR_STATES.indexOf(this.dir);
    let newDir = (val === 3) ? 0 : val +1;
        
    this.dir = DIR_STATES[newDir];
};
    
vehiculo.prototype.mover = function(){
    switch(this.dir){
        case 'N':
            this.posy++;
            break;
            
        case 'E':
            this.posx++;
            break;
            
        case 'S':
            this.posy--;
            break;
            
        case 'O':
            this.posx--;
            break;
    }
};
    
vehiculo.prototype.print = function(){               
    console.log(`${this.posx} ${this.posy} ${this.dir}`);
};

vehiculo.prototype.printDir = function(){
    console.log(this.dir);
}

// exports:
module.exports = vehiculo;