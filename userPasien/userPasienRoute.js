let express = require('express');
let route = express.Router();
let userPasienController = require('./userPasienController.js');
UserPasien = require('./userPasienModel.js');

route.get('/userPasien',function(req,res){
    userPasienController.getUserPasien(function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.get('/userPasien/:_id',function(req,res){
	let id = req.params._id;
    userPasienController.getUserPasienById(id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.post('/userPasien',function(req,res){
    let ptgs = req.body;
    userPasienController.createUserPasien(ptgs,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.delete('/userPasien/:_id',function(req,res){
    userPasienController.removeUserPasien(req.params._id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.put('/userPasien/:_id',function(req,res){
    let ptgs = req.body;
    userPasienController.updateUserPasien(req.params._id,ptgs,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;