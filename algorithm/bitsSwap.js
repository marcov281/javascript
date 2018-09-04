/******************************************************************************
 *  Execution       :   1. default node         cmd> node bitsSwap.js 
 *                      2. if nodemon installed cmd> nodemon bitsSwap.js
 * 
 *  Purpose         : to swap the nibble of 8bit integer and print new value
 * 
 *  @description    
 * 
 *  @file           : bitsSwap.js
 *  @overview       : 1stcode module to swap the nibble of 8bit integer and print new value.
 *  @module         : bitsSwap.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 04-09-2018
 *
 ******************************************************************************/
var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);

function bits()
{
    console.log('welcome to bits exchange program\n')
    prompts.question('Enter the No. u want to perform operation-->',function(val){
        if(isNaN(val) || val<0)
        {
            console.log('please enter integer only');
            prompts.close();
        }
        else
        utility.bitsSwap(prompts,val);

    })
}
bits();
