import Controller from 'Controller.js';
class PersonController extends Controller{
    
    constructor(){
    	super();
    //	this.code ="1233";
    //	this.helloWorld = this.helloWorld.bind(this);
    }

    async helloWorld(ctx, resp) {
     //ctx.body = await this.code; //Person_Model.getData();
     await ctx.render('sample');
    }

    async testCode(ctx,resp, next){
    	console.log(this.code);
        await next();
    }

    async loginView(){

    }
}

module.exports =  new PersonController;