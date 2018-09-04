/******************************************************************************
 *  Execution       :   1. default node         cmd> node bubblesort.js 
 *                      2. if nodemon installed cmd> nodemon bubblesort.js
 * 
 *  Purpose         : this will take list of integer and then sort it using bubble sort 
 * 
 *  @description    
 * 
 *  @file           : bubblesort.js
 *  @overview       : this will take list of integer and then sort it using bubble sort .
 *  @module         : bubblesort.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 04-09-2018
 *
 ******************************************************************************/
var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);
function bubblesort()
{
    prompts.question('enter the no of integers u want to add-->',function(val){
        if(val<0||isNaN(val))
        {
            console.log('please enter a valid number');
            process.exit();
        }
        else 
        utility.bubblesort(prompts,val);
        
    })
}
bubblesort();