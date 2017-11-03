import 'babel-polyfill';
import mysql from 'mysql2/promise';
import redis from 'redis';
import autobind from 'class-autobind';
import bluebird from 'bluebird';
import _ from 'underscore';
import squel from 'squel';
import mssql from 'mssql';
const config = {
  user: 'markuser',
  password: 'tseug',
  server: '192.168.0.148',
  database: '_srspos',
  pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

class Model {

	constructor() {
	}

	async select(table, fields = "*", parameters = null, order_by = {}) {
		await mssql.close();
		await mssql.connect(config)
		let request = new mssql.Request(),
		  stmt = await squel.select()
						.from(table);

		if (fields != null) {
		  let array = fields.split(",");
		    await _.each(array, function(val) {
              stmt.field(val);
			});
		}
		
		if (parameters != null) {
		  await _.each(parameters, function(val) {
            stmt.where(val);
		  });
		}

		if (!_.isEmpty(order_by)) {
		  await _.each(order_by, function(val, index) {
            stmt.order(index, val);
		  });
		}

		stmt = stmt.toString();
		
		let result = await request.query(stmt);	
		  await mssql.close();
		return result.recordset;
	}

	async update(table, where, setFields) {
		await mssql.close();
		await mssql.connect(config)
		let request = new mssql.Request(),
		  stmt = squel.update().table(table).setFields(setFields);

		  await _.each(where, function(val) {
            stmt.where(val);
		  });

		stmt = stmt.toString();
		let result = await request.query(stmt);	
		  await mssql.close();
		return result;
	}

	async selectRow(table, fields = "*", parameters){
		let res = await this.select(table, parameters);
		return _.first(res);
	}

}

module.exports = Model;