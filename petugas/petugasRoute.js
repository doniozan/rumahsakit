let express = require('express');
let route = express.Router();
let petugasController = require('./petugasController.js');
Petugas = require('./petugasModel.js');

route.get('/petugas',function(req,res){
    petugasController.getPetugas(function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.get('/petugas/:_id',function(req,res){
	let id = req.params._id;
    petugasController.getPetugasById(id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.post('/petugas',function(req,res){
    let ptgs = req.body;
    petugasController.createPetugas(ptgs,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.delete('/petugas/:_id',function(req,res){
    petugasController.removePetugas(req.params._id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.put('/petugas/:_id',function(req,res){
    let ptgs = req.body;
    petugasController.updatePetugas(req.params._id,ptgs,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;