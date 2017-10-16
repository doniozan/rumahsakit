let mong = require('mongoose');
let userPasien = mong.Schema({
    KdPasien:String,
	UserPasien:String,
	PassPasien:String,
});
let UserPasien = module.exports = mong.model("UserPasien",userPasien,"UserPasien");