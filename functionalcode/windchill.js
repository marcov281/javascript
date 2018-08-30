/******************************************************************************
 *  Execution       :   1. default node         cmd> node windchill.js 
 *                      2. if nodemon installed cmd> nodemon windchill.js
 * 
 *  Purpose         : to find effective temparature by using wind speed and current temparature
 * 
 *  @description    
 * 
 *  @file           : windchill.js
 *  @overview       : 1stcode module to find effective temparature by using wind speed and current temparature.
 *  @module         : windchill.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
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