const mysql = require('mysql');

//const conne = mysql.createConnection({
//    host: 'localhost',
//    user: 'root',
//    password: '123',
//    database: 'sotukendb',
//});

module.exports = function top(req, res){
    console.log("aaaaaaaaaa")
    res.render('after.ejs', {
        bumon: '部門',
        name: '名前'
    })
//    if(results[i].BUMON == "1"){
//        res.render('after.ejs',{
//            bumon:"A部門ページです",
//            name:"こんにちは！" + results[i].NAME + "さん"
//        });
//    }
//    else if (results[i].BUMON == "2"){
//        res.render('after.ejs',{
//            bumon:"B部門ページです",
//            name:"こんにちは！" + results[i].NAME + "さん"
//        });
//    }
}