let mong = require('mongoose');
let userPetugas = mong.Schema({
	KdPetugas : String,
	UserPetugas : String,
	PassPetugas : String
});

let UserPetugas = module.exports = mong.model("UserPetugas", userPetugas, "UserPetugas");