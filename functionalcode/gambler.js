/******************************************************************************
 *  Execution       :   1. default node         cmd> node gambler.js 
 *                      2. if nodemon installed cmd> nodemon gambler.js
 * 
 *  Purpose         : to simulate a real world gambling game
 * 
 *  @description    
 * 
 *  @file           : gambler.js
 *  @overview       : 1stcode module to simulate a real world gambling game.
 *  @module         : gambler.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);
function gambler()
{
    prompts.question("enter the play amount->",function(stake){
        {
            prompts.question("enter how many times u want to play->",function(play){
                {
                    prompts.question("enter your goal->",function(goal){

                        utility.gambler(stake,play,goal);
                        prompts.close();
                    });
                }
            });
        }
    });
}

gambler();