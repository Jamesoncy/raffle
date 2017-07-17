import util from 'util';

module.exports = function(validator){
  return async function (ctx, resp, next){
  	ctx.checkBody(validator);
    let errors = await ctx.validationErrors();
	  if(errors){
	    ctx.body = `${ util.inspect(errors)} `;
	    ctx.status = 400;
	  } else await next();
  };
  

}
