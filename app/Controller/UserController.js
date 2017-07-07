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
          ctx.cookies.set('auth', [{ token: checkLogin.token, id: checkLogin.id }] );
          ctx.body = {
      			token: checkLogin.token,
      			message: "Authenticated Successfully"
      		};
      	}
        else ctx.status = 400;
    }

    async showUserDetails(ctx, resp){
      /*let id = ctx.cookie
      let user = await this.getLoginUser();
    	ctx.body = user;
    	ctx.body = "hello";*/
    }

   
}

module.exports =  new UserController;