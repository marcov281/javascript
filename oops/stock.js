/******************************************************************************
 *  Execution       :   1. default node         cmd> node stock.js.js 
 *                      2. if nodemon installed cmd> nodemon stock.js.js
 * 
 *  Purpose         : to add some object in the json file
 * 
 *  @description    
 * 
 *  @file           : stock.js.js
 *  @overview       :  to add some object in the json file
 *  @module         : stock.js.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          :16-09-2018
 *
 ******************************************************************************/
var fs=require('fs')//requiring file-system
var r=require('readline-sync')
var src=fs.readFileSync('./src/stock.json');

var obj=JSON.parse(src);
var no=r.question('\nenter the no of stocks u want to add-->')//taking number of input
if(isNaN(no)||no<1||no==''||no==' ')//input validation
{
    console.log('\ninavid no!!!try again\n');
    process.exit();
}
else
while(no>0)
{
    var c_name=r.question('\n\nenter the name of the stock-->')//..
    if(!isNaN(c_name)||c_name==''||c_name==' ')//input validation
    {
        console.log('something went wrong !!try again later')
        process.exit();
    }
    var no_share=r.question('enter the no of share available-->')
    if(isNaN(no_share)||no_share<1||no_share==''||no_share==' ')//input validation
    {
        console.log('something went wrong !!try again later')
        process.exit();
    }
    var price=r.question('enter the price of each share-->')
    if(isNaN(price)||price<1||price==' '||price=='')//input validation
    {
        console.log('something went wrong !!try again later')
        process.exit();       
    }
        
var object=//creating object with user input
{
    "name":c_name,
    "share":no_share,
    "share_price":price
}

obj.stock.push(object)//pushing to the object  of json file
console.log(obj)//printing object
fs.writeFileSync('./src/stock.json',JSON.stringify(obj))//writing to the file

    no--;//decremention no to terminate the loop
}
console.log('sucessfully updated')//printing msg