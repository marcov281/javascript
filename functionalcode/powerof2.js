/******************************************************************************
 *  Execution       :   1. default node         cmd> node powerof2.js 
 *                      2. if nodemon installed cmd> nodemon powerof2.js
 * 
 *  Purpose         : to calculate the power of 2 upto the given range passed by CLA
 * 
 *  @description    
 * 
 *  @file           : powerof2.js
 *  @overview       : 1stcode module to calculate the power of 2 upto the given range passed by CLA.
 *  @module         : powerof2.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var limit =process.argv[2];
var utility=require('./utility.js');
utility.powerof2(limit);
