import Controller from 'Controller.js';
import Raffle from 'Model/RaffleModel';
import _ from 'underscore';
import shuffle from 'shuffle-array';

class RaffleController extends Controller{
    
    constructor(){
    	super();
    }

    async login(ctx, resp) {
      await ctx.render('login');
    }

    async showCustomer(ctx) {
    	let collection = await Raffle.getRaffleCustomer();
        ctx.body = await shuffle(collection);
    }

    async showWinners(ctx) {
        let data = await Raffle.getRaffleWinners(),
          lists = _.groupBy(data, function(element, index){
            return Math.floor(index/4);
          });
        lists = _.toArray(lists); 
        ctx.body = lists;
    }

    async showRaffle(ctx) {
    	await ctx.render('raffle');
    }

    async updateCustomer(ctx) {
        let  { customerCode, prize } = ctx.request.body;
        ctx.body = await Raffle.updateCustomer(customerCode, prize);
    }

    
}

module.exports =  new RaffleController;