var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);
function gambler()
{
    prompts.question("enter the play amount->",function(stake){
        {
            prompts.question("enter how many times u want to play->",function(play){
                {
                    prompts.question("enter your goal->",function(goal){

                        utility.gambler(stake,play,goal);
                        prompts.close();
                    });
                }
            });
        }
    });
}

gambler();