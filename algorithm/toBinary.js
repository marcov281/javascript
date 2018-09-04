/******************************************************************************
 *  Execution       :   1. default node         cmd> node toBinary.js 
 *                      2. if nodemon installed cmd> nodemon toBinary.js
 * 
 *  Purpose         : to convert any decimal value to binary number
 * 
 *  @description    
 * 
 *  @file           : toBinary.js
 *  @overview       : to convert any decimal value to binary number.
 *  @module         : toBinary.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 04-09-2018
 *
 ******************************************************************************/
var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);

function binary()
{
    console.log('\nwelcome to decimal to binary conversion\n')
    prompts.question('Enter the decimal value u want to convert-->',function(val){
        if(val<0||isNaN(val))
        {
            console.log('invalid value!!!Please tery again');
            process.exit();
        }
        utility.toBinary(prompts,val);

    })

}
binary();