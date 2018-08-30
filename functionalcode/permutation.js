/******************************************************************************
 *  Execution       :   1. default node         cmd> node permutation.js 
 *                      2. if nodemon installed cmd> nodemon permutation.js
 * 
 *  Purpose         : to give an user string and permute it and show result
 * 
 *  @description    
 * 
 *  @file           : permutation.js
 *  @overview       : 1stcode module to put a string in between another string.
 *  @module         : permutation.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);

function findperm()
{

//   var alphabets = ['A','B','C'];
prompts.question('enter a string to check-->\n',function(alphabets){
    var val=alphabets.split('');
    utility.permute(val, 0, val.length-1); 
    prompts.close();
})
}
findperm();