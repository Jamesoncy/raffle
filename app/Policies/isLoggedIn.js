'use-strict';
import UserModel from 'Model/UserModel';
import _ from 'underscore';
module.exports= async function(ctx,resp,next){
  let auth = ctx.cookies.get("auth");
  console.log(auth);
  if(_.has(auth, "token") && _.has(auth, "id")) {
 	console.log(auth);
  	if(!UserModel.checkTokenExist(auth)) 
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
