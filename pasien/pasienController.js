Pasien = require('./pasienModel.js');

module.exports.getPasien = function(callback,limit){
    Pasien.find(callback).limit(limit);
}
module.exports.getPasienById = function(_id,callback){
    Pasien.findById(_id,callback);
}
module.exports.createPasien = function(tk,callback){
    Pasien.create(tk,callback);
}
module.exports.removePasien = function(_id,callback){
    Pasien.findByIdAndRemove(_id,callback);
}
module.exports.updatePasien = function(_id,tk,callback){
    Pasien.findByIdAndUpdate(_id,tk,callback);
}