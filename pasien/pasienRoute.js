let express = require('express');
let route = express.Router();
let pasienController = require('./pasienController.js');
Pasien = require('./pasienModel.js');

route.get('/pasien',function(req,res){
    pasienController.getPasien(function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.get('/pasien/:_id',function(req,res){
	let id = req.params._id;
    pasienController.getPasienById(id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.post('/pasien',function(req,res){
    let ptgs = req.body;
    pasienController.createPasien(ptgs,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.delete('/pasien/:_id',function(req,res){
    pasienController.removePasien(req.params._id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.put('/pasien/:_id',function(req,res){
    let ptgs = req.body;
    pasienController.updatePasien(req.params._id,ptgs,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;