/******************************************************************************
 *  Execution       :   1. default node         cmd> node stopwatch.js 
 *                      2. if nodemon installed cmd> nodemon stopwatch.js
 * 
 *  Purpose         : it is used to compare the execution time of various searching and sorting technique
 * 
 *  @description    
 * 
 *  @file           : stopwatch.js
 *  @overview       : it is used to compare the execution time of various searching and sorting technique.
 *  @module         : stopwatch.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 04-09-2018
 *
 ******************************************************************************/
var readlineSync = require('readline-sync');
var utility=require('./utility.js');
//var prompts=r1.createInterface(process.stdin,process.stdout);

function stop()
{
    var word=readlineSync.question('\nenter the string to binary search-->');
    var start=utility.currentTime();
    utility.binaryword1(word);
    var stop=utility.currentTime();
    var b_string=utility.elapsedTime(start,stop);

    var ins_str=readlineSync.question('\nenter the string to sort via insertion technique-->');
    var start=utility.currentTime();
    utility.insertionsort1(ins_str);
    var stop=utility.currentTime();
    var ins_time=utility.elapsedTime(start,stop);

    var bubble_sort=readlineSync.question('\nenter the string to sort via bubble sort--->');
    var start=utility.currentTime();
    utility.bubblesort1(bubble_sort);
    var stop=utility.currentTime();
    var bub_time=utility.elapsedTime(start,stop);

    console.log('\n\nelasped time by binary serach is-->'+b_string+'ms');
    console.log('elasped time by insertion sort is-->'+ins_time+'ms');
    console.log('elasped time by bubble sort is-->'+bub_time+'ms');









}
stop();