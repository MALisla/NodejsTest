var express = require('express');
var db = require('../db.js');
var router = express.Router();


// GET homepage
router.get('/', function(req, res, next) {
    res.render('register');
  });
  
// Create: adds data to a MySQL database using the SQL INSERT command.
router.post('/postregister',async function(req, res, next) {
    await db.query("insert into member(username,password,email) value ('"+req.body.username+"','"+req.body.password+"','"+req.body.email+"');")
        res.send(req.body.username+"/"+req.body.password+"/"+req.body.email);
});
  
// router.get('/show',async function(req, res, next) {
//     var datas = await db.query("select * from member")
//     console.log(datas);
//         res.render('show', { datas: datas });
// });

router.get('/show',async function(req,res) {
    await db.query("select * from member", function (err, result) {
      if (err) throw err;
      else {
        obj = {print: result};
        console.log(obj);
  
        res.render("show", obj);
      }
    })
  })

module.exports = router