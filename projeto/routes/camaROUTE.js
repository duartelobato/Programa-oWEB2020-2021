var express = require('express');
var camaROUTE = express.Router();
var mCama = require('../models/camaMODEL');

camaROUTE.get('/', async function(req,res,next) {
 let camas = await mCama.getAllCamas();
 res.send(camas);
});

module.exports = camaROUTE;
