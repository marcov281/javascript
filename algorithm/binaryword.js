/******************************************************************************
 *  Execution       :   1. default node         cmd> node binaryword.js 
 *                      2. if nodemon installed cmd> nodemon binaryword.js
 * 
 *  Purpose         : this pogram takes input as test file and search a perticular word 
 * 
 *  @description    
 * 
 *  @file           : binaryword.js
 *  @overview       : this pogram takes input as test file and search a perticular word .
 *  @module         : binaryword.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 04-09-2018
 *
 ******************************************************************************/
var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);

function binaryword()
{
    console.log('Welcome to binary word search')
    

        prompts.question('enter the word u want to search-->',function(word){

            if(isNaN(word))
            {

                utility.binaryword(word);
               
            }
            else 
            {
                console.log('please enter string only');
                prompts.close();
            }
            
    
    })



}
binaryword();