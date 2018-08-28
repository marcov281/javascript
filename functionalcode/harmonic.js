var r1=require('readline');
var prompts=r1.createInterface(process.stdin,process.stdout);
var utility=require('./utility.js');
function harmonic()
{
    prompts.question("enter the term to find harmonic-> \n\n",function(term){
        utility.harmonic(term);
        prompts.close();
    });
}
harmonic();