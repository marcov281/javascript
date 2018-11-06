/******************************************************************************
 *  Execution       :   1. default node         cmd> node inven_manager.js 
 *                      2. if nodemon installed cmd> nodemon inven_manager.js
 * 
 *  Purpose         : to create an inventory that can be managed easyly
 * 
 *  @description    
 * 
 *  @file           : inven_manager.js
 *  @overview       :  to create an inventory that can be managed easyly
 *  @module         : inven_manager.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          :16-09-2018
 *
 ******************************************************************************/
var r1=require('readline-sync');
var utility=require('./utility.js');
function manager()
{
    var choice=r1.question('enter your choice\n1.add a company\n2.view a company details\n3.exit\n')
    if(isNaN(choice)||choice<1||choice>3||choice==''||choice==' ')
    {
        console.log('invalid choice!!try again later')
        process.exit();
    }
    
    utility.inven_manager(r1,choice);//calling inven_manager function in utility file
}
manager();//calling the function