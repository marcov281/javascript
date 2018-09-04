/******************************************************************************
 *  Execution       :   1. default node         cmd> node insertionsort.js 
 *                      2. if nodemon installed cmd> nodemon insertionsort.js
 * 
 *  Purpose         : to sort some given string or list of integer
 * 
 *  @description    
 * 
 *  @file           : insertionsort.js
 *  @overview       : 1stcode module to sort some given string or list of integer.
 *  @module         : insertionsort.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 04-09-2018
 *
 ******************************************************************************/
var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);

function sort()
{
    prompts.question('please enter the string\n\n->',function(val1){
        console.log('\nperforming insertion sort\n')
        utility.insertionsort(prompts,val1);

    })
}
sort();