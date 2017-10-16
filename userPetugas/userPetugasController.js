UserPetugas = require('./userPetugasModel.js');

module.exports.getUserPetugas = function(callback,limit){
    UserPetugas.find(callback).limit(limit);
}

module.exports.getUserPetugasById = function(id,callback,limit){
    UserPetugas.findById(id,callback).limit(limit);
}

module.exports.createUserPetugas = function(userPetugas,callback){
    UserPetugas.create(userPetugas,callback);
}

module.exports.deleteUserPetugas = function(id,callback){
    UserPetugas.findByIdAndRemove(id,callback);
}

module.exports.updateUserPetugas = function(id,userPetugas,callback){
    UserPetugas.findByIdAndUpdate(id,userPetugas,callback);
}