/******************************************************************************
 *  Execution       :   1. default node         cmd> node test.js 
 *                      2. if nodemon installed cmd> nodemon test.js
 * 
 *  Purpose         : to test or experiment small piece of code
 * 
 *  @description    
 * 
 *  @file           : test.js
 *  @overview       : 1stcode module to test or experiment small piece of code.
 *  @module         : test.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var r1=require('readline');
var prompts=r1.createInterface(process.stdin,process.stdout);
prompts.question("enter a string",function(val){

    arr(val);

});
function arr(val)
{
    var arr=val.split('');
console.log(arr[0]);

}