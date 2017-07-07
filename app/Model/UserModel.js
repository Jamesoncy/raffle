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

	async checkTokenExist(auth){
		console.log(auth);
		let id = await client.get(auth.id);
		if(id == auth.id) return await UserModel.getUserRow(id);
  		return false;
	}

}

module.exports = new UserModel;