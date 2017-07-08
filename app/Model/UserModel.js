import Model from 'Model.js';
import token from 'uuid/v1';
import _ from 'underscore';

class UserModel extends Model {

	constructor(){
		super();
		this.table = "users";
	}

	async checkCredentials(username, password) {
		let userCheck = await this.queryRow("SELECT * from users where username = ? and password = ? LIMIT 1", [username, password] );
		if (!_.isEmpty(userCheck) ) {
			let uuid = token();
			await this.setLoginToken(uuid, userCheck.id);
			return { token: uuid, id: userCheck.id };
		}
		return false;
	}

	async getUserRow(id){
		return await this.queryRow("SELECT * from users where id = ? LIMIT 1", [id] );
	}

	async setLoginToken(token, userDetails){
  		await this.client.set(token, userDetails);
  	}

	async checkTokenExist(auth , result = false){
		let id = await this.client.getAsync(auth);
		console.log(id);
		if(id && !result ) return id;
		else if (id && result) return await this.getUserRow(id);
  		return false;
	}

}

module.exports = new UserModel;