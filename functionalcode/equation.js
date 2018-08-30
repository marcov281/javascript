/******************************************************************************
 *  Execution       :   1. default node         cmd> node equation.js 
 *                      2. if nodemon installed cmd> nodemon equation.js
 * 
 *  Purpose         : to calculate the root of quaddratic equation
 * 
 *  @description    
 * 
 *  @file           : equation.js
 *  @overview       : 1stcode module to calculate the root of quaddratic equation.
 *  @module         : equation.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);

function mat()  //this function takes three value and pass to main function in utility
{
    prompts.question("enter the a value->\n",function(val1){

        prompts.question("enter the b value->\n",function(val2){

            prompts.question("enter the c value->\n",function(val3){

                var a=val1;
                var b=val2;
                var c=val3;
                utility.equation(a,b,c);
                prompts.close();

            });
        });

    });

}
mat();