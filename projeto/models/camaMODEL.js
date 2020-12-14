const camaDB = require('../database/camaDB')

class Cama{ 
    constructor(cama_id, cama_ala_id, cama_pac_id, cama_datainicial) {
        this.cama_id = cama_id;
        this.cama_ala_id = cama_ala_id;
        this.cama_pac_id = cama_pac_id;
        this.cama_datainicial = cama_datainicial;
          
    }
}     


module.exports.getAllCamas = function() { 
    var camas = camaDB.getAllCamas();
    return camas; }
        