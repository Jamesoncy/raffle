import 'babel-polyfill';

module.exports=async function(res,resp,next){
   //console.log(res);
  await next();
}