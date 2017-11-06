'use-strict';

module.exports.routes = {
	"GET /get-customer": "Raffle.showCustomer",
	"GET /srs-raffle": "Raffle.showRaffle",
	"GET /get-customer-winners": "Raffle.showWinners",
	"POST /customer": "Raffle.updateCustomer",
	"POST /remove-customer-winner-list": "Raffle.removeWinner"
}