SatuanHargaDokter = require('./satuanHargaDokterModel.js');

module.exports.getSatuanHargaDokter = function(callback,limit){
    SatuanHargaDokter.find(callback).limit(limit);
}
module.exports.getSatuanHargaDokterById = function(_id,callback){
    SatuanHargaDokter.findById(_id,callback);
}
module.exports.createSatuanHargaDokter = function(tk,callback){
    SatuanHargaDokter.create(tk,callback);
}
module.exports.removeSatuanHargaDokter = function(_id,callback){
    SatuanHargaDokter.findByIdAndRemove(_id,callback);
}
module.exports.updateSatuanHargaDokter = function(_id,tk,callback){
    SatuanHargaDokter.findByIdAndUpdate(_id,tk,callback);
}