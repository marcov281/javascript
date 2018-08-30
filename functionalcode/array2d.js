/******************************************************************************
 *  Execution       :   1. default node         cmd> node array2d.js 
 *                      2. if nodemon installed cmd> nodemon array2d.js
 * 
 *  Purpose         : to take user input in 2d array and print it back
 * 
 *  @description    
 * 
 *  @file           : array2d.js
 *  @overview       : 1stcode module to take user input in 2d array and print it back.
 *  @module         : array2d.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/

var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);

function array2d()
{
    prompts.question("eneter the no of rows->",function(row){

        prompts.question('enter the no of columns',function(cols){

            utility.arr2d(  prompts,row,cols);
           // prompts.close();

        });
    });
}
array2d();