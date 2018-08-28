var r1=require('readline');
var prompts=r1.createInterface(process.stdin,process.stdout);
var utility=require('./utility.js');
function toss()
{
    prompts.question("enter the no of toss\n\n",function(no){
        utility.tosscoin(no);
        prompts.close();
    });
}
toss();