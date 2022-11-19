const mysql = require('mysql');
module.exports = function top(req,res,next){
    var name = req.body.mozi1;
    var pass = req.body.mozi2;

    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123',
        database: 'sotukendb',
    });

    con.connect((err) =>{if(err)throw err});
    con.query('select * from dbuser' , (err, results) =>{if (err){throw err}if(results){}
    console.log(results);
        for (let i=0; i<results.length; ++i){
            if(name == results[i].ID && pass == results[i].PASS){
                req.session.name = results[i].ID;
                req.session.PASS = results[i].PASS;
                if(results[i].BUMON == "1"){
                    console.log("A部門");
                    next()

                }else if(results[i].BUMON == "2"){
                    console.log("B部門");
                    next()
                }
            }
        }
        con.end();
        console.log("connection end")
    });
}