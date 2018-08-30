/******************************************************************************
 *  Execution       :   1. default node         cmd> node primefactor.js 
 *                      2. if nodemon installed cmd> nodemon primefactor.js
 * 
 *  Purpose         : to find all the prime factor of a user given number.
 * 
 *  @description    
 * 
 *  @file           : primefactor.js
 *  @overview       : 1stcode module to find all the prime factor of a user given number..
 *  @module         : primefactor.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var r1=require('readline');
var utility=require('./utility.js');
var prompts= r1.createInterface(process.stdin,process.stdout);
function factors()
{
    prompts.question("enter the number to check factorization\n\n-> ",function(num){
        utility.primefactor(num);
        prompts.close();
    });
}
factors();