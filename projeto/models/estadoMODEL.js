const estadoDB = require('../database/estadoDB')

class Estado{ 
    constructor(ala_id, cama_id, pac_estado) {
        this.ala_id = ala_id;
        this.cama_id = cama_id;
        this.pac_estado = pac_estado;
        
    }
}     


module.exports.getAllEstados = function() { 
    var estados = estadoDB.getAllEstados();
    return estados; }
        