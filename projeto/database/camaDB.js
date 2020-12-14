var pool = require("../connection");
module.exports.getAllCamas = async function() {
 try {
 const sql = 'SELECT * FROM cama';
 const camas = await pool.query(sql);
 console.log(sql);
 return camas;
 } catch (err) {
 console.log(err);
 return err;
 }
}