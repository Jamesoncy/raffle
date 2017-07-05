import 'babel-polyfill';
import Person_Model from './../Model/Person_Model.js';

let pm = new Person_Model();
class Person {
     async helloWorld(context, next) {
      context.body = await pm.getData();
  	}

     async testRun(ctx, next){
	  console.log('ashley');	
	  await next();
	  console.log('baho');
   }
}

module.exports = Person;