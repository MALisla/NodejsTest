var express = require('express');
var db = require('../db.js');
var router = express.Router();

//Homepage
router.get('/', function(req, res, next) {
  res.render('register');
});

//insert
router.post('/postregister',async function(req, res, next) {
  await db.query("insert into member(username,password,email) value ('"+req.body.username+"','"+req.body.password+"','"+req.body.email+"');")
  res.send(req.body.username+"/"+req.body.password+"/"+req.body.email);
});

//select show all
router.get('/list',async function(req, res, next) {
  var data = await db.query("select * from member")
  console.log(data);
  res.render('list', { title: 'List Member' , members: data });
});

//update ยังไม่เสร็จ
router.get('/list',async function(req, res, next) {
  await db.query(function(err))
    if (err) throw err;
    var data = "UPDATE customers SET address";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
});

//delete
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//   });
// });
module.exports = router;

// router.post('/postregister',async function(req, res, next) {
//   await db.query("insert into member(username,password,email) value ('"+req.body.username+"','"+req.body.password+"','"+req.body.email+"');")
//   res.send(req.body.username+"/"+req.body.password+"/"+req.body.email);
// });

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('addUser');
// });
// // addUser
// router.post('/addUser',async function(req, res, next) {
//     await db.query("insert into member(username,password,email) value ('"+req.body.username+"','"+req.body.password+"','"+req.body.email+"');")
//     res.send(req.body.username+"/"+req.body.password+"/"+req.body.email);
// });
//   router.get('/addUserMiddle', function(req, res, next) {
//       res.render('addUser',{
//           title:'Insert'
//       });
//   });
//   //queryAll
//   router.get('/queryAll', function(req, res, next) {
//     db.queryAll(req, res, next);
//   });
//   //query
//   router.get('/query', function(req, res, next) {
//     db.queryById(req, res, next);
//   });
//   //deleteUser 
//   router.get('/deleteUser', function(req, res, next) {
//     db.delete(req, res, next);
//   });
//   //updateUser
//   router.post('/updateUser', function(req, res, next) {
//     db.updateUser(req, res, next);
//   });
  
  // module.exports = router;