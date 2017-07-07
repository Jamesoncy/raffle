import Controller from 'Controller.js';

class PageController extends Controller{
    
    constructor(){
    	super();
    }

    async login(ctx, resp) {
      await ctx.render('login');
    }

    
}

module.exports =  new PageController;