RawatInap = require('./rawatInapModel.js');

module.exports.getRawatInap = function(callback,limit){
    RawatInap.find(callback).limit(limit);
}

module.exports.getRawatInapById = function(id, callback){
    RawatInap.findById(id, callback);
}

module.exports.addRawatInap = function(dataRawatInap, callback){
    RawatInap.create(dataRawatInap, callback);
}

module.exports.upRawatInap = function(id, dataRawatInap, callback){
    RawatInap.findByIdAndUpdate(id, dataRawatInap, callback);
}

module.exports.rmRawatInap = function(id, callback){
    RawatInap.findByIdAndRemove(id, callback);
}