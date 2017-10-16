let express = require('express');
let router = express.Router();
let rawatInapController = require('./rawatInapController.js');

router.get('/rawatinap', function(req, res){
    rawatInapController.getRawatInap(function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.get('/rawatinap/:id', function(req, res){
    rawatInapController.getRawatInapById(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.post('/rawatinap', function(req, res){
    let dataRawatInap = req.body;
    rawatInapController.addRawatInap(dataRawatInap, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.put('/rawatinap/:id', function(req, res){
    let dataRawatInap = req.body;
    rawatInapController.upRawatInap(req.params.id, dataRawatInap, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.delete('/rawatinap/:id', function(req,res){
    rawatInapController.rmRawatInap(req.params.id,function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

module.exports=router;