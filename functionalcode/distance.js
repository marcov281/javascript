/******************************************************************************
 *  Execution       :   1. default node         cmd> node distance.js 
 *                      2. if nodemon installed cmd> nodemon distance.js
 * 
 *  Purpose         : to calculate distance from (0,0) to certain point 
 * 
 *  @description    
 * 
 *  @file           : distance.js
 *  @overview       : 1stcode module to calculate distance from (0,0) to certain point .
 *  @module         : distance.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var x=process.argv[2];
var y=process.argv[3];
var utility=require('./utility.js');

var numbers = /^[0-9]+$/;
if(x.match(numbers) && y.match(numbers))
utility.distance(x,y);
else
console.log('please enter valid value!!  try again')