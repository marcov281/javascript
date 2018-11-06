/******************************************************************************
 *  Execution       :   1. default node         cmd> node reg_exp.js.js 
 *                      2. if nodemon installed cmd> nodemon reg_exp.js.js
 * 
 *  Purpose         : to display some message by taking user input and relacing with some existing string
 * 
 *  @description    
 * 
 *  @file           : reg_exp.js.js
 *  @overview       :  to display some message by taking user input and relacing with some existing string
 *  @module         : reg_exp.js.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          :16-09-2018
 *
 ******************************************************************************/
var fs=require('fs')//requiring file-system
var r=require('readline-sync')
var contents=fs.readFileSync('./src/regex','utf8')

var f_name=r.question('enter your first name->')//
var l_name=r.question('enter your last name->')// taking user input
var c_no=r.question('enter your contact no->')//
if(f_name==''||f_name==' '||!isNaN(f_name)) //validating first name
{
    console.log('\n\ninvalid first name!! try again')
    process.exit()
}
else if(l_name==''||l_name==' '||!isNaN(l_name))//validating last name
{
    console.log('\n\ninvalid last name!! try again')
    process.exit()
}
else if(/\d/.test(f_name)==true||/\d/.test(l_name)==true)  //checking for numbers in input string
{
    console.log('\n\nname doesnot contains number!!! try again')
    process.exit()
}
else if(c_no==''||c_no==' '||isNaN(c_no)||c_no.length!=10)//validating contact no
{
    console.log('\n\ninvalid contact no!! try again')
    process.exit()
}


var full_name=f_name+' '+l_name;   //merging first and last name

var obj={

        "<<name>>":f_name,
        "<<full name>>":full_name,//creating object to replace in string
        "<91­xxxxxxxxxx>":c_no,
        "01-01-2016":new Date()
    
        }


var new_contents=contents.replace(/<<name>>|<<full name>>|<91­xxxxxxxxxx>|01-01-2016/gi,function(mat)
{
    return obj[mat]     //replacing the string 
})

console.log('\n\n'+new_contents)    //printing the string to console