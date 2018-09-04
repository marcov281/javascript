/******************************************************************************
 *  Execution       :   1. default node         cmd> node extendprime.js 
 *                      2. if nodemon installed cmd> nodemon extendprime.js
 * 
 *  Purpose         : to take a range and filtered out palindrome,anagram and primes
 * 
 *  @description    
 * 
 *  @file           : extendprime.js
 *  @overview       : 1stcode module to take a range and filtered out palindrome,anagram and primes.
 *  @module         : extendprime.js - This is optional if expeclictly its an npm or local package
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
           
        var arr1=[];
        var arr2=[];
        var arr= utility.extendprime(val,val1);
        console
        for(var i=0;i<arr.length;i++)
             {
                 for(var j=i+1;j<arr.length;j++)
        
                 {
                     var a=utility.anagram1(arr[i],arr[j]);
                     if(a)
                    {
                        arr1.push(arr[i]);   
                        
                    } 
                 }
                 
             }
          
              
            var arr1=new Set(arr1);
            arr1=Array.from(arr1)
          

             for(var k=0;k<arr1.length;k++)
             {  
                 var b=utility.palindrome1(arr1[k])
                 if(b)
               {
                
                arr2.push(arr1[k]);
               } 
             }

             console.log('final array which are prime,palindrome and anagram are -->'+arr2);
           
             prompts.close();
        

    })
     })

}
range();