//global
let express = require('express');
let mong = require('mongoose');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());
require('./koneksidb/koneksidb.js');
let verifyToken = require('./middleware/verifyToken');
app.use('/', function ( req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, DELETE");    
    next();
});
// let loginRoute = require('./login/loginRoute');
// app.use('/api',loginRoute);
let userPetugasRoute = require('./userPetugas/userPetugasRoute');
app.use('/api',userPetugasRoute);

app.listen(process.env.PORT || 8889, function() {
  console.log('Node app is running on port', app.get('port'));
});
