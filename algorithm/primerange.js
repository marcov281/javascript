/******************************************************************************
 *  Execution       :   1. default node         cmd> node primerange.js 
 *                      2. if nodemon installed cmd> nodemon primerange.js
 * 
 *  Purpose         : to print all  the prime no in a given range
 * 
 *  @description    
 * 
 *  @file           : primerange.js
 *  @overview       : 1stcode module to print all  the prime no in a given range.
 *  @module         : primerange.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 04-09-2018
 *
 ******************************************************************************/
var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);

function range()
{
    prompts.question('enter the lower range-->',function(val){

        prompts.question('enter the upper range-->',function(val1){

            if(val<0||val1<0||isNaN(val)||isNaN(val1))
            {
                console.log('these range is not valid...Please try again!!');
                process.exit();
            }
           

            utility.primerange(val,val1);
            prompts.close();

    })
    })

}
range();