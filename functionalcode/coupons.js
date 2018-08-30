var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);
function coupons()
{
    prompts.question('enter the minimum value-> ',function(min){

        prompts.question('enter the max value->',function(max){

            utility.coupons(min,max);

        });

    });


}
coupons();