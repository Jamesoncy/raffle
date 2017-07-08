'use-strict';
import UserModel from 'Model/UserModel';
import _ from 'underscore';
module.exports= async function(ctx,resp,next){
  let auth = ctx.cookies.get("auth");
  if(auth) {
 	if(!UserModel.checkTokenExist(auth, true)) 
	  	ctx.body = {
	  		status: 400,
	  		message: "You Token Not Exist"
	  	};
  } else
  	    ctx.body = {
  			status: 400,
  			message: "You Token Not Exist"
  	    };
  await next();
}
