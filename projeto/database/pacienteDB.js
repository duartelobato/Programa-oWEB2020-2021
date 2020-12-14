var pool = require("../connection");
module.exports.getAllPacientes = async function() {
 try {
 const sql = 'SELECT * FROM paciente';
 const pacientes = await pool.query(sql);
 console.log(sql);
 return pacientes;
 } catch (err) {
 console.log(err);
 return err;
 }
}