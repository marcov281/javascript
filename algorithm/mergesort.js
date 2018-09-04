/******************************************************************************
 *  Execution       :   1. default node         cmd> node mergesort.js 
 *                      2. if nodemon installed cmd> nodemon mergesort.js
 * 
 *  Purpose         : this is a mere sort implementation here we can sort integer and strings
 * 
 *  @description    
 * 
 *  @file           : mergesort.js
 *  @overview       : 1stcode module this is a mere sort implementation here we can sort integer and strings.
 *  @module         : mergesort.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 04-09-2018
 *
 ******************************************************************************/
var readline = require('readline-sync');
var util=require('./utility.js');
 
 function mergesort()
   {
   var size= readline.question("enter the size of the array :");
   if(isNaN(size)===false && size>1)
      { var array=[];
       for(i=0;i<size;i++)
       {
        var a=readline.question(`enter the ${(i)} value-> `) 
        // if(isNaN(a)) console.log("invalid");
         array.push(a)   
        }
        util.mergesort(array);
       console.log("the sorted array:["+util.mergesort(array)+"]");
      } 
      else console.log("invalid");
      
   }
   mergesort();