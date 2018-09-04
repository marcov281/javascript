/******************************************************************************
 *  Execution       :   1. default node         cmd> node calender.js 
 *                      2. if nodemon installed cmd> nodemon calender.js
 * 
 *  Purpose         : to take month date and year and calculate the day of week
 * 
 *  @description    
 * 
 *  @file           : calender.js
 *  @overview       : 1stcode module to take month date and year and calculate the day of week.
 *  @module         : calender.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 04-09-2018
 *
 ******************************************************************************/
var m=process.argv[2]
var d=process.argv[3]
var y=process.argv[4]
var utility=require('./utility.js')
if (m>12 ||d>31||isNaN(m)||isNaN(d)||isNaN(y)||m<0||d<0||y<0)
{
    console.log('enter valid value DOMRectReadOnly..Please try again!!')
    process.exit();
}
else
utility.calender(m,d,y);