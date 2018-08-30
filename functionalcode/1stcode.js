/******************************************************************************
 *  Execution       :   1. default node         cmd> node 1stcode.js 
 *                      2. if nodemon installed cmd> nodemon 1stcode.js
 * 
 *  Purpose         : to put a string in between another string
 * 
 *  @description    
 * 
 *  @file           : 1stcode.js
 *  @overview       : 1stcode module to put a string in between another string.
 *  @module         : 1stcode.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/

var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);

function demo(){
    prompts.question("enter your user name\n",function(name){
        utility.demo(name);
        prompts.close();
     });
}
   
demo();