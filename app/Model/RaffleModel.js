import 'babel-polyfill';
import Model from 'Model.js';
import date from 'date-and-time';

const ACTIVE = 0
const NOT_ACTIVE = 1
class RaffleModel extends Model {
	constructor(){
		super("raffle");
	}

	async getRaffleCustomer(){
		return await this.select("customercode, description", [`status = ?`], [ACTIVE]);
	}

	async getRaffleWinners() {
		const updated = false
		return await this.select("customercode, description, prize, date_updated", [`status = ?`], [ NOT_ACTIVE ] , { updated });
	}

	async updateCustomer(code, prize) {
		let date_updated = date.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
		  fields = {
			prize,
			status: 1,
			date_updated
		};
		return await this.update([`customercode = ?`], fields, [ code ]);
	}

	async removeWinner(code) {
		return await this.update([`customercode = ?`], { status: NOT_ACTIVE, prize: `` }, [ code ]);
	}
}

module.exports = new RaffleModel;