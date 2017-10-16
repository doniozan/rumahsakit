let express = require('express');
let route = express.Router();
let satuanHargaDokterController = require('./satuanHargaDokterController.js');
SatuanHargaDokter = require('./satuanHargaDokterModel.js');

route.get('/satuanHargaDokter',function(req,res){
    satuanHargaDokterController.getSatuanHargaDokter(function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.get('/satuanHargaDokter/:_id',function(req,res){
	let id = req.params._id;
    satuanHargaDokterController.getSatuanHargaDokterById(id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.post('/satuanHargaDokter',function(req,res){
    let ptgs = req.body;
    satuanHargaDokterController.createSatuanHargaDokter(ptgs,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.delete('/satuanHargaDokter/:_id',function(req,res){
    satuanHargaDokterController.removeSatuanHargaDokter(req.params._id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.put('/satuanHargaDokter/:_id',function(req,res){
    let ptgs = req.body;
    satuanHargaDokterController.updateSatuanHargaDokter(req.params._id,ptgs,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;