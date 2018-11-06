/******************************************************************************
 *  Execution       :   1. default node         cmd> node inven_stack.js 
 *                      2. if nodemon installed cmd> nodemon inven_stack.js
 * 
 *  Purpose         : to create an inventory that can be managed easyly and can check the transaction
 * 
 *  @description    
 * 
 *  @file           : inven_stack.js
 *  @overview       :  to create an inventory that can be managed easyly and can check the transaction
 *  @module         : inven_stack.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          :16-09-2018
 *
 ******************************************************************************/
var r1=require('readline-sync');
var utility=require('./utility.js');

function inven_stack()
{
    console.log('************WELCOME***********')
    var choice=r1.question('enter your user name-->')//taking user name as an input
    if(!isNaN(choice)||choice==''||choice==' ')
    {
        console.log('invalid user name!!! please eneter the valid input')//err msg
        process.exit()
    }
    utility.inven_stack(r1,choice);
}
inven_stack();//calling function