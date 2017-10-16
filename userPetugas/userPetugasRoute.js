let ex = require('express');
let route = ex.Router();
let userPetugasController = require('./userPetugasController.js')

route.get('/userPetugas', function (req, res) {
    userPetugasController.getUserPetugas(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/userPetugas/:_id', function (req, res) {
    let id = req.params._id;
    userPetugasController.getUserPetugasById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/userPetugas', function (req, res) {
    let userPetugas = req.body;
    userPetugasController.createUserPetugas(userPetugas, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/userPetugas/:_id', function (req, res) {

    userPetugasController.deleteUserPetugas(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/userPetugas/:_id', function (req, res) {
    let userPetugas = req.body;
    userPetugasController.updateUserPetugas(req.params._id,userPetugas, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;