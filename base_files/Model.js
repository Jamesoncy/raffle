import 'babel-polyfill';
import mysql from 'mysql2/promise';
import redis from 'redis';
import bluebird from 'bluebird';
import _ from 'underscore';
const test = "none";
const client = redis.createClient();
const conn = {
	host: "localhost",
	user: "root",
	database: "node"
}
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

class Model {

	async query(query, parameters = null){
		let connection = await mysql.createConnection(conn);
		const [rows, fields] = await connection.execute(query, parameters);
		return await rows;
	}

	async queryRow(query, parameters){
		let row = await this.query(query, parameters);
		if (!_.isEmpty(row)) return row[0]; 
		return row;
	}

	async setLoginToken(token, userDetails){
  		await client.set(token, userDetails);
  	}

}

module.exports = Model;