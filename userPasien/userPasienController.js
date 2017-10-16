UserPasien = require('./userPasienModel.js');

module.exports.getUserPasien = function(callback,limit){
    UserPasien.find(callback).limit(limit);
}
module.exports.getUserPasienById = function(_id,callback){
    UserPasien.findById(_id,callback);
}
module.exports.createUserPasien = function(tk,callback){
    UserPasien.create(tk,callback);
}
module.exports.removeUserPasien = function(_id,callback){
    UserPasien.findByIdAndRemove(_id,callback);
}
module.exports.updateUserPasien = function(_id,tk,callback){
    UserPasien.findByIdAndUpdate(_id,tk,callback);
}