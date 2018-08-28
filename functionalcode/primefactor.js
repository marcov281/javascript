var r1=require('readline');
var utility=require('./utility.js');
var prompts= r1.createInterface(process.stdin,process.stdout);
function factors()
{
    prompts.question("enter the number to check factorization\n\n-> ",function(num){
        utility.primefactor(num);
        prompts.close();
    });
}
factors();