/******************************************************************************
 *  Execution       :   1. default node         cmd> node tempconversion.js 
 *                      2. if nodemon installed cmd> nodemon stopwatch.js
 * 
 *  Purpose         : to convert farenhite to celcius and vice versa
 * 
 *  @description    
 * 
 *  @file           : stopwatch.js
 *  @overview       : to convert farenhite to celcius and vice versa.
 *  @module         : stopwatch.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 04-09-2018
 *
 ******************************************************************************/
var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);
function temp()
{
    prompts.question('enter choice \n 1.farenhite to celcius\n2.celcius to farenhite\n',function(val){
        if(val<1||val>2||isNaN(val))
        {
            console.log('invalid value!!! please try again');
            process.exit();
        }
        utility.tempConversion(prompts,val);

    })

}
temp();