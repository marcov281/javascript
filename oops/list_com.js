/******************************************************************************
 *  Execution       :   1. default node         cmd> node list_com.js.js 
 *                      2. if nodemon installed cmd> nodemon list_com.js.js
 * 
 *  Purpose         : to operate an inventory that can be managed using linked list
 * 
 *  @description    
 * 
 *  @file           : list_com.js.js
 *  @overview       :  to operate an inventory that can be managed using linked list
 *  @module         : list_com.js.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          :16-09-2018
 *
 ******************************************************************************/
var utility=require('./utility.js')

var r=require('readline-sync')
while(1)
{
    manage();
}
function manage()
{


    console.log('******************Choose Option******************')
    var choice=r.question('1.add to inventory\n2.delete from inventory\n3.close inventory\n4.display items\n');
    if(isNaN(choice)||choice<1||choice>4||choice==''||choice==' ')//choose option and validation
    {
        console.log('invalid option')//err msg
        process.exit();
    }

    else
    {

        if(choice==1)//add company details to the list
        {
            var c_name=r.question('\nenter company name where u want to buy share->')//com name
            if(c_name==''||c_name==' ')
            {
                console.log('please enter valid company name')//err msg
                process.exit();
            }
            
            var no_share=r.question('enter number of share u want to buy->')//no of share

            if(isNaN(no_share)||no_share==''||no_share==' '||no_share<1)//validation
            {
                console.log('please enter valid no of share')//err msg
                process.exit();
            }
            var price=r.question('enter the price of each share->');//price of each share input

            if(isNaN(price)||price==''||price==' '||price<1)
            {
                console.log('please enter valid price of share->')//error message
                process.exit();
            }

            utility.list_com_add(c_name,no_share,price);//add to the object and push the object to the list

        }


        else if(choice==2)//if want to sell share
        {
            var name=r.question('\n\nenter the company name u want to sell share-->')
            utility.list_com_delete(name);//calling LIST_com_delete function in utility
        }

      else if(choice==3)//close program
        {
            console.log('\n\n\nclosing program')
            process.exit();
        }

        else if(choice==4)//display of available objects in the node 
        {
            utility.list_com_display()
        }
        
    }
}