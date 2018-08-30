/******************************************************************************
 *  Execution       :   1. default node         cmd> node sumzero.js 
 *                      2. if nodemon installed cmd> nodemon sumzero.js
 * 
 *  Purpose         : to find al triplets that makes sum 0 in an given array
 * 
 *  @description    
 * 
 *  @file           : sumzero.js
 *  @overview       : 1stcode module to find al triplets that makes sum 0 in an given array.
 *  @module         : sumzero.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);

function x()
{
    prompts.question("enter the no. of interger u want to put->\n\n",function(val){

        utility.sumzero(prompts,val);
        // prompts.close();

    });



}
x();