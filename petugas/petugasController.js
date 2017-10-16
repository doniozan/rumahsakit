Petugas = require('./petugasModel.js');

module.exports.getPetugas = function(callback,limit){
    Petugas.find(callback).limit(limit);
}
module.exports.getPetugasById = function(_id,callback){
    Petugas.findById(_id,callback);
}
module.exports.createPetugas = function(tk,callback){
    Petugas.create(tk,callback);
}
module.exports.removePetugas = function(_id,callback){
    Petugas.findByIdAndRemove(_id,callback);
}
module.exports.updatePetugas = function(_id,tk,callback){
    Petugas.findByIdAndUpdate(_id,tk,callback);
}