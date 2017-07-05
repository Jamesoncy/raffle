import 'babel-polyfill';
import mysql from 'mysql2/promise';

const conn = {
	host: "localhost",
	user: "root",
	database: "node"
}

class Model {

	async query(query){
		let connection = await mysql.createConnection(conn);
		const [rows, fields] = await connection.execute(query);
		return await rows;
	}

}

module.exports = Model;