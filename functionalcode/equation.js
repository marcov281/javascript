var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);

function mat()  //this function takes three value and pass to main function in utility
{
    prompts.question("enter the a value->\n",function(val1){

        prompts.question("enter the b value->\n",function(val2){

            prompts.question("enter the c value->\n",function(val3){

                var a=val1;
                var b=val2;
                var c=val3;
                utility.equation(a,b,c);
                prompts.close();

            });
        });

    });

}
mat();