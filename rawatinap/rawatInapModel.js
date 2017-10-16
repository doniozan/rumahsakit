let mongoose = require('mongoose');

let rawatInap = mongoose.Schema(
    {
        KdRuangInap : String,
		NamaRuangInap : String,
		JnsRuangInap : String,
		HargaRuangInap : Number
    },
    {
        collection: 'RawatInap'
    }
);

let RawatInap = module.exports = mongoose.model('RawatInap', rawatInap);