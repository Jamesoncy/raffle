import 'babel-polyfill';
import Model from 'Model.js';

class PersonModel extends Model {

	constructor(){
		super();
		this.table = "users";
	}

	async getData(){
		return await this.query("SELECT * from " + this.table);
	}

}

module.exports = new PersonModel;