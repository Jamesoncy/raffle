import UserModel from 'Model/UserModel';
import _ from 'underscore';
module.exports= async function(ctx,resp,next){
  let auth = ctx.cookies.get("auth");
  if(auth) {
    let user =  await UserModel.checkTokenExist(auth, true);
 	  if(!user) {
      ctx.body = {
	  		message: "You Token Not Exist"
	  	};
      ctx.status = 400;
    }
    else {
      ctx.user = user;
    }
  } else {
        ctx.body = {
  			message: "You Token Not Exist"
  	    };
        ctx.status = 400;
  }
  await next();
}
