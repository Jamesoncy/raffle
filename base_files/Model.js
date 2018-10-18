
import 'babel-polyfill';
import mysql from 'mysql2/promise';
import { each, first } from 'lodash';
import squel from 'squel';

const conn = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	connectionLimit: 1000,
    queueLimit: -1, acquireTimeout: 2
};

class Model {

	constructor(table) {
		this.table = table
	}

	async select(fields = "*", whereParam = [], parameters = null, order_by = []) {

		let where = '';
		let order = '';

		if (where.length > 0 && parameters.length > 0) {
			where = ` WHERE ${whereParam.join(' AND ')}`
		}

		if (order_by.length > 0) {
			order = order_by.join(', ');
		}

		return this.execute(`
			SELECT ${fields} from ${this.table} ${where} ${order}
			`, parameters
		);
	}

	async execute(query, parameters = null) {
		try {
			let connection = await mysql.createConnection(conn);
			const [rows] = await connection.execute(query, parameters);
			connection.destroy();
			return await rows;
		} catch(e) {
			  console.log(e);
			  return [];
		}
	}

	async update(where, setFields) {
		let stmt = squel.update().table(this.table).setFields(setFields);

		  each(where, function(val) {
          	stmt.where(val);
		  });

		stmt = stmt.toString();

		return await this.execute(stmt);
	}

}

module.exports = Model;