import Model from 'Model.js';
import token from 'uuid/v1';
class UserModel extends Model {

	constructor(){
		super();
		this.table = "users";
	}

	async checkCredentials(username, password, generateToken = false) {
		let userCheck = await this.query("SELECT * from users where username = ? and password = ?", [username, password] );
		console.log(userCheck);
	}

}

module.exports = new UserModel;