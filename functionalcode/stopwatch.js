/******************************************************************************
 *  Execution       :   1. default node         cmd> node stopwatch.js 
 *                      2. if nodemon installed cmd> nodemon stopwatch.js
 * 
 *  Purpose         : to simulate a real world stopwatch functionality
 * 
 *  @description    
 * 
 *  @file           : stopwatch.js
 *  @overview       : 1stcode module to simulate a real world stopwatch functionality.
 *  @module         : stopwatch.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var readline=require('readline');
var utility=require('./utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function stopwatch()
{   
    read.question("enter to start",function()
    {   
        var start=utility.currentTime(); //to get starting time
        read.question("enter to stop",function()
        {
            var stop=utility.currentTime(); // to get stopping time
            utility.elapsedTime(start,stop);
            read.close();
        });
    });
}
stopwatch();