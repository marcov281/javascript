/******************************************************************************
 *  Execution       :   1. default node         cmd> node cards_extend.js 
 *                      2. if nodemon installed cmd> nodemon cards_extend.js
 * 
 *  Purpose         : to simulate real time card distributing
 * 
 *  @description    
 * 
 *  @file           : cards_extend.js
 *  @overview       :  to simulate real time card distributing
 *  @module         : cards_extend.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          :16-09-2018
 *
 ******************************************************************************/
var utility=require('./utility.js')
console.log('\n\n**********welcome to the game of sorted cards***********\n\n')
console.log('\nafter shuffle cards of each player-->\n\n')
utility.cards_extend();