/******************************************************************************
 *  Execution       :   1. default node         cmd> node management.js.js 
 *                      2. if nodemon installed cmd> nodemon management.js.js
 * 
 *  Purpose         : to display all the details of company that available in the json file
 * 
 *  @description    
 * 
 *  @file           : management.js.js
 *  @overview       :  to display all the details of company that available in the json file
 *  @module         : management.js.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          :16-09-2018
 *
 ******************************************************************************/
var fs=require('fs')
var src=fs.readFileSync('./src/inventory.json');

var obj=JSON.parse(src);

for(x in obj.rice)
{
    console.log('total price of '+obj.rice[x].name+' rice is->'+(obj.rice[x].weight*obj.rice[x].price))
}

for(y in obj.pulse)
{
    console.log('total price of '+obj.pulse[y].name+' is ->'+(obj.pulse[y].weight*obj.pulse[y].price))
}
for(z in obj.wheat)
{
    console.log('total price of '+obj.wheat[z].name+' is ->'+(obj.wheat[z].weight*obj.wheat[z].price))
}
