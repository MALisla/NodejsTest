var express = require('express');
var db = require('../db.js');
var router = express.Router();

//route for homepage
router.get('/',async function(req, res, next) {
  var data = await db.query("select * from member")
  console.log(data);
  res.render('register', { members: data });
});

router.post('/save',async function(req, res, next) {
  await db.query("insert into member(username,password,email) value ('"+req.body.username+"','"+req.body.password+"','"+req.body.email+"');")
  res.redirect('/');
});
// //route for update data
// router.post('/update',async function(req, res, next) {
//   var sql = "update member set username='"+req.body.username+"', password='"+req.body.password+"', email='"+req.body.email+ "' WHERE member_id="+req.body.id;
//   await db.query(sql, (err, results) => {
//     if(err) throw err;
//     res.redirect('/');
//   });
// });

// router.get('/',(req, res) => {
//   var sql = "select * from member";
//   var query = db.query(sql, (err, results) => {
//     if(err) throw err;
//     res.render('register',{
//       members: results
//     });
//   });
// });

// //select show all
// router.get('/list',async function(req, res, next) {
//   var data = await db.query("select * from member")
//   console.log(data);
//   res.render('list', { title: 'List Member' , members: data });
// });

// //route for insert data
// router.post('/save',function(req, res, next) {
//   var data = {member_username:req.body.username, member_password: req.body.password, member_email: req.body.email};
//   var sql = "insert into member set ?";
//   var query = db.query(sql, data,(err, results) => {
//     if(err) throw err;
//     res.redirect('/');
//   });
// });

// //route for update data
// router.post('/update',(req, res) => {
//   var sql = "update member set username='"+req.body.username+"', password='"+req.body.password+"', email='"+req.body.email+ "' WHERE member_id="+req.body.id;
//   var query = db.query(sql, (err, results) => {
//     if(err) throw err;
//     res.redirect('/');
//   });
// });

// //route for delete data
// router.post('/delete',(req, res) => {
//   var sql = "delete from member where member_id="+req.body.member_id+"";
//   var query = db.query(sql, (err, results) => {
//     if(err) throw err;
//       res.redirect('/');
//   });
// });

module.exports = router;

// //Homepage
// router.get('/', function(req, res, next) {
//   res.render('register');
// });

// //insert
// router.post('/postregister',async function(req, res, next) {
//   await db.query("insert into member(username,password,email) value ('"+req.body.username+"','"+req.body.password+"','"+req.body.email+"');")
//   res.send(req.body.username+"/"+req.body.password+"/"+req.body.email);
// });

// //select show all
// router.get('/list',async function(req, res, next) {
//   var data = await db.query("select * from member")
//   console.log(data);
//   res.render('list', { title: 'List Member' , members: data });
// });

//update
// router.get('/list',async function(req, res, next) {
//   await db.query(function(err))
//     if (err) throw err;
//     var data = "UPDATE customers SET address";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result.affectedRows + " record(s) updated");
//     });
// });

//delete
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//   });
// });
// module.exports = router;

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