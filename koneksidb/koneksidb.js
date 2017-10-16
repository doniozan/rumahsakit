let mongoose = require('mongoose');

let database = {
	user : '',
	pass : '',
	url : '',
	name : ''
}

mongoose.connect('mongodb://'+database.user+':'+database.pass+'@'+database.url+'/'+database.name);