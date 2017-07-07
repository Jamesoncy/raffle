'use-strict';

module.exports= async function(res,resp,next){
  //console.log(res);
  await next();
}