/******************************************************************************
 *  Execution       :   1. default node         cmd> node newtonsqrt.js 
 *                      2. if nodemon installed cmd> nodemon newtonsqrt.js
 * 
 *  Purpose         : to calculate squareroot of any number using newtons formula
 * 
 *  @description    
 * 
 *  @file           : newtonsqrt.js
 *  @overview       : 1stcode module to calculate squareroot of any number using newtons formula.
 *  @module         : newtonsqrt.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 04-09-2018
 *
 ******************************************************************************/
var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);
function a()
{
    prompts.question('enter the value U want to find root-->',function(val){
        if(isNaN(val)||val<0)
        {
            console.log('please enter valid value only!!')
            process.exit();
        }
        utility.newtonSqrt(prompts,val);

    })

}
a();