/******************************************************************************
 *  Execution       :   1. default node         cmd> node monthlypayment.js 
 *                      2. if nodemon installed cmd> nodemon monthlypayment.js
 * 
 *  Purpose         : it is used to calculate the monthly installment to pay for a loan
 * 
 *  @description    
 * 
 *  @file           : monthlypayment.js
 *  @overview       : 1stcode module it is used to calculate the monthly installment to pay for a loan.
 *  @module         : monthlypayment.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          : 04-09-2018
 *
 ******************************************************************************/
var amount=process.argv[2];
var year=process.argv[3];
var rate=process.argv[4];
var utility=require('./utility.js')
if(isNaN(amount)||isNaN(year)||isNaN(rate)||amount<0||year<0||rate<0)
{
    console.log('please enter valid value only')
    process.exit();
}
utility.monthlyPayment(amount,year,rate);
