/******************************************************************************
 *  Execution       :   1. default node         cmd> node book.js 
 *                      2. if nodemon installed cmd> nodemon book.js
 * 
 *  Purpose         : to maintain an address book
 * 
 *  @description    
 * 
 *  @file           : book.js
 *  @overview       : 1stcode module we can use it like a real time address book
 *  @module         : book.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          :16-09-2018
 *
 ******************************************************************************/
var fs=require('fs')//requiring file system
var r=require('readline-sync')
var utility=require('./utility.js')//requiring utility file
/**
 * @description thhis function will take the choice user want to perform and send the choice
 * to the book function in utility
 */
function book()
{
    console.log('<<*************ADDRESS BOOK*************>>')
    var choice=r.question('\n\nenter your choice--\n1.search contact\n2.add new contact\n3.delete contact\n4.edit contact\n5.print book\n6.save\n7.close\n')
    if(isNaN(choice)||choice<1||choice>7||choice==''||choice==' ')//data validation
    {
        console.log('invalid choice!!!try again')
        process.exit();  
    }
    utility.book(r,choice)

}
while(1)//program will ask choice again and again untill user terminates it
{
book();
}
