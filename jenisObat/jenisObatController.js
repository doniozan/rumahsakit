JenisObat=require('./jenisObatModel.js');
module.exports.getJenisObat=function(callback,limit){
    JenisObat.find(callback).limit(limit);
}
module.exports.createJenisObat=function(jenisobat,callback){
    JenisObat.create(jenisobat,callback);
}
module.exports.removeJenisObat=function(_id,callback){
    JenisObat.findByIdAndRemove(_id,callback);
}
module.exports.updateJenisObat=function(_id,jenisobat,callback){
    JenisObat.findByIdAndUpdate(_id,jenisobat,callback);
}
module.exports.getJenisObatById=function(id,callback){
    JenisObat.findById(id,callback);
}