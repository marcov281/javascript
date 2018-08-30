/******************************************************************************
 *  Execution       :   1. default node         cmd> node LeapYear.js 
 *                      2. if nodemon installed cmd> nodemon LeapYear.js
 * 
 *  Purpose         : to check a year is leapyear or not
 * 
 *  @description    
 * 
 *  @file           : LeapYear.js
 *  @overview       : 1stcode module to check a year is leapyear or not.
 *  @module         : LeapYear.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
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