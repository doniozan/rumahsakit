let mong = require('mongoose');
let satuanHargaDokter = mong.Schema({
    KdDokter:String,
	HargaOperasi:Number,
	HargaVisit:String,
	HargaRawatJalan:Number
});
let SatuanHargaDokter = module.exports = mong.model("SatuanHargaDokter",satuanHargaDokter,"SatuanHargaDokter");