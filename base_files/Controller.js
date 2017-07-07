import 'babel-polyfill';
import autobind from 'class-autobind';
import PersonModel from 'Model/UserModel';
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

	async getLoginUser(ctx){
  		let auth = await client.get(ctx.cookie.get("auth")),
  			userInfo = await UserModel.getUserRow(auth.id);
  		return userInfo;
  	}

}

module.exports = Controller;