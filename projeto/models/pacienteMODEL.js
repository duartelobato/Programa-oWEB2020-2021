const pacienteDB = require('../database/pacienteDB')

class Paciente{ 
    constructor(pac_id, pac_nome,pac_idade, pac_altura, pac_peso, pac_doenca, pac_entrada, pac_estado) {
        this.pac_id = pac_id;
        this.pac_nome = pac_nome;
        this.pac_idade = pac_idade;
        this.pac_altura = pac_altura;
        this.pac_peso = pac_peso; 
        this.pac_doenca = pac_doenca; 
        this.pac_entrada = pac_entrada; 
        this.pac_estado = pac_estado; 
          
    }
}     


module.exports.getAllPacientes = function() { 
    var pacientes = pacienteDB.getAllPacientes();
    return pacientes; }
        

     
      
      
      
