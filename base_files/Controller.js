import 'babel-polyfill';
import autobind from 'class-autobind';
import PersonModel from 'Model/PersonModel';
const test = "none";

class Controller {
	
	constructor() {
		this.code = this.userDetails();
		autobind(this);
	}

  	async userDetails() {
  		return await PersonModel.getData();
  	}

}

module.exports = Controller;