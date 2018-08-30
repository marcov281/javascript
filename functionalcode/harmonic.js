/******************************************************************************
 *  Execution       :   1. default node         cmd> node harmonic.js 
 *                      2. if nodemon installed cmd> nodemon harmonic.js
 * 
 *  Purpose         : to calculate the harmonic value of a number
 * 
 *  @description    
 * 
 *  @file           : harmonic.js
 *  @overview       : 1stcode module to calculate the harmonic value of a number.
 *  @module         : harmonic.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/

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