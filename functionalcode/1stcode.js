var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);

function demo(){
    prompts.question("enter your user name\n",function(name){
        utility.demo(name);
        prompts.close();
     });
}
   
demo();