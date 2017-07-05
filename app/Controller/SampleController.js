import Controller from 'Controller.js';
class SampleController extends Controller {
    
    constructor(){
    	super();
    }

    async sampleFunction(ctx, resp) {
      ctx.body = await this.code;
    }

    async getFramework(){
    	console.log("James Framework");
    }

}

module.exports =  new SampleController;