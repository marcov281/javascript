/******************************************************************************
 *  Execution       :   1. default node         cmd> node tosscoin.js 
 *                      2. if nodemon installed cmd> nodemon tosscoin.js
 * 
 *  Purpose         : to find the num of heads and tails in a given num of toss
 * 
 *  @description    
 * 
 *  @file           : tosscoin.js
 *  @overview       : 1stcode module to find the num of heads and tails in a given num of toss.
 *  @module         : tosscoin.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var r1=require('readline');
var prompts=r1.createInterface(process.stdin,process.stdout);
var utility=require('./utility.js');
function toss()
{
    prompts.question("enter the no of toss\n\n",function(no){
        utility.tosscoin(no);
        prompts.close();
    });
}
toss();