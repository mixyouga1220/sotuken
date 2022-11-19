
const mysql = require('mysql');
module.exports = function top(req, res, next) {

  const cone = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '123',
      database: 'sotukendb',
  });

  cone.connect((err) =>{if(err)throw err});
  cone.query('select * from dbuser' , (err, result) =>{if (err){throw err}if(result){}

    for(let ii=0; ii<result.length; ii++){
      if(req.session.name == result[ii].ID ){
        if(result[ii].BUMON == "1"){
          console.log("A部門S");
          next()
        }else if (result[ii].BUMON == "2"){
          console.log("B部門S");
          next()
        }
      }
    }
    cone.end()
  });
}