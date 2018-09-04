/******************************************************************************
 *  Execution       :   1. default node         cmd> node findnumber.js 
 *                      2. if nodemon installed cmd> nodemon findnumber.js
 * 
 *  Purpose         : this pogram takes cla argument and find a number between 0 and that number 
 * 
 *  @description    
 * 
 *  @file           : findnumber.js
 *  @overview       : this pogram takes cla argument and find a number between 0 and that number .
 *  @module         : findnumber.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 04-09-2018
 *
 ******************************************************************************/
var utility=require('./utility.js');
var val=process.argv[2];
   //to take command line argument
if(val<0||isNaN(val))
{
    console.log('please enter valid value');
    process.exit();
}
console.log('\n\nthink of a number between 0 and '+val);
console.log('\n follow the instruction of the game\n\n');
utility.findnumber(val);