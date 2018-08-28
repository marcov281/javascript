var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);

function weather()
{
    prompts.question("enter the temparature in farenhite (temp<50) -> \n",function(a){

        prompts.question("enter the wind speed in miles/hour (3<wind<120) -> \n",function(b){

                var temp=a;
                var wind=b;
                utility.windchill(temp,wind);
                prompts.close();
        });
    });
}
weather();