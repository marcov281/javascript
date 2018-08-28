var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);
function check()
{  
    
    prompts.question("enter the year you want to cheack\n\n",function(year){
        utility.LeapYear(year);

prompts.close();
})};
check();