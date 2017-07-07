import Controller from 'Controller.js';
import UserModel from 'Model/UserModel';
class UserController extends Controller{
    
    constructor(){
    	super();
    }

    async checkLogin(ctx, resp) {
      let { username, password } = ctx.request.body;
      await UserModel.checkCredentials(username, password);
      ctx.body = username;
      console.log(username);
      console.log(password);
      //await ctx.body = UserModel.che

    }

    
}

module.exports =  new UserController;