var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);

function x()
{
    prompts.question("enter the no. of interger u want to put->\n\n",function(val){

        utility.sumzero(prompts,val);
        // prompts.close();

    });



}
x();