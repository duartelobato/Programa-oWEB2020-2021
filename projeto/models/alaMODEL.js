const alaDB = require('../database/alaDB')

class Ala{ 
    constructor(ala_id, ala_numero, ala_descricao) {
        this.ala_id = ala_id;
        this.ala_numero = ala_numero;
        this.ala_descricao = ala_descricao;
        
    }
}     


module.exports.getAllAlas = function() { 
    var alas = alaDB.getAllAlas();
    return alas; }
        