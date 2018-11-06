/******************************************************************************
 *  Execution       :   1. default node         cmd> node inven_queue.js 
 *                      2. if nodemon installed cmd> nodemon inven_queue.js
 * 
 *  Purpose         : to create an inventory that can be managed easyly and can check the transaction and transaction time
 * 
 *  @description    
 * 
 *  @file           : inven_queue.js
 *  @overview       :  to create an inventory that can be managed easyly and can check the transaction and transaction time
 *  @module         : inven_queue.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          :16-09-2018
 *
 ******************************************************************************/
var r1=require('readline-sync');
var utility=require('./utility.js');

function inven_queue()
{
    console.log('************WELCOME***********')
    var choice=r1.question('enter your user name-->')//taking user name as an input
    if(!isNaN(choice)||choice==''||choice==' ')
    {
        console.log('invalid user name!!! please eneter the valid input')//err msg
        process.exit()
    }
    utility.inven_queue(r1,choice);
}
inven_queue();//calling function