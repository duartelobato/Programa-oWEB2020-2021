var express = require('express');
var pacienteROUTE = express.Router();
var mPaciente = require('../models/pacienteMODEL');

pacienteROUTE.get('/', async function(req,res,next) {
 let pacientes = await mPaciente.getAllPacientes();
 res.send(pacientes);
});

module.exports = pacienteROUTE;
