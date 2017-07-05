import 'babel-polyfill';
import AnimalES6 from './node_test.js';

class Base extends AnimalES6 {
	constructor(){
		super();
	}

	test(){
		console.log(this.name);
	}
}


var b = new Base();
lionES6.test();