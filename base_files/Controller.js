import 'babel-polyfill';
import autobind from 'class-autobind';
import UserModel from 'Model/UserModel';
import redis from 'redis';
import bluebird from 'bluebird';

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

class Controller {
	
	constructor() {
		this.client = redis.createClient();
		autobind(this);
	}

}

module.exports = Controller;