let mong = require('mongoose');
let pasien = mong.Schema({
    KdPasien:String,
	NamaPasien:String,
	AlamatPasien:String,
	KdProvinsi:String,
	KodePos:String,
	TglLahir:String,
	TinggiBadan:String,
	BeratBadan:String,
	StatusUkuranBadan:String,
	NoTlp:String
});
let Pasien = module.exports = mong.model("Pasien",pasien,"Pasien");
