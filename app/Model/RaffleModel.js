import 'babel-polyfill';
import Model from 'Model.js';
import date from 'date-and-time';

class RaffleModel extends Model {

	constructor(){
		super();
	}

	async getRaffleCustomer(){
		return await this.select("caravancustomer", "customercode, description", [`status = 0`]);
	}

	async getRaffleWinners() {
		return await this.select("caravancustomer", "customercode, description, prize, date_updated", [`status = 1`] , {date_updated: false});
	}

	async updateCustomer(code, prize) {
		let date_updated = date.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
		  fields = {
			prize: prize,
			status: 1,
			date_updated: date_updated
		};
		return await this.update("caravancustomer", [`customercode = ${code}`], fields);
	}

}

module.exports = new RaffleModel;