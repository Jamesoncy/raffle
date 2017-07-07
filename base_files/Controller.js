import 'babel-polyfill';
import autobind from 'class-autobind';
import PersonModel from 'Model/PersonModel';
import redis from 'redis';
import bluebird from 'bluebird';
const test = "none";
const client = redis.createClient();

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

class Controller {
	
	constructor() {
		this.code = this.userDetails();
		autobind(this);
	}

  	async userDetails() {
  		return await PersonModel.getData();
  	}

  	async setLoginToken(token){

  	}

}

module.exports = Controller;