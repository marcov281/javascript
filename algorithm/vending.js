/******************************************************************************
 *  Execution       :   1. default node         cmd> node vending.js 
 *                      2. if nodemon installed cmd> nodemon vending.js
 * 
 *  Purpose         : this code is to simulate the real life atm machine
 * 
 *  @description    
 * 
 *  @file           : vending.js
 *  @overview       : this code is to simulate the real life atm machine.
 *  @module         : vending.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 04-09-2018
 *
 ******************************************************************************/
var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);

function atm()
{
    prompts.question('hello, Pleae enter the amount u want to withdrawl-->',function(val){
        if (isNan(val) && val<=0)
        {
            console.log('please enter the valid amount');
            prompts.close();
        }
        utility.vending(val);


    })

}
atm();