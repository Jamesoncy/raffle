import Controller from 'Controller.js';
import UserModel from 'Model/UserModel';
class UserController extends Controller{
    
    constructor(){
    	super();
    }

    async checkLogin(ctx, resp) {
      let { username, password } = ctx.request.body,
      	checkLogin = await UserModel.checkCredentials(username, password);
      	if(checkLogin != false) {
          ctx.cookies.set('auth', checkLogin.token );
          ctx.body = {
      			token: checkLogin.token,
      			message: "Authenticated Successfully"
      		};
      	}
        else {
          ctx.status = 404
          ctx.body = {
            message: "Invalid Credentials"
          };
        }
    }

    async showUserDetails(ctx, resp){
      ctx.body = ctx.user;
    }

   
}

module.exports =  new UserController;