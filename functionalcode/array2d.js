var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);

function array2d()
{
    prompts.question("eneter the no of rows->",function(row){

        prompts.question('enter the no of columns',function(cols){

            utility.arr2d(  prompts,row,cols);
           // prompts.close();

        });
    });
}
array2d();