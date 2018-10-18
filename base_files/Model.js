
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
		this.connection =  mysql.createConnection(conn);
		this.table = table
	}

	async select(fields = "*", where = [], parameters = null, order_by = {}) {
		return this.execute(`
			SELECT ${fields} from ${this.table} where productId = ? order by ${id} desc limit 5
			`, [productId]
			);
	}

	async execute(query, parameters = null) {
		return await this.connection.query(query, parameters)
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