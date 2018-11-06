/******************************************************************************
 *  Execution       :   1. default node         cmd> node buy_sell.js 
 *                      2. if nodemon installed cmd> nodemon buy_sell.js
 * 
 *  Purpose         : implements a data type that
 * 
 *  @description    
 * 
 *  @file           : buy_sell.js
 *  @overview       : 1stcode module might be used by a financial institution to keep track of customer information..
 *  @module         : buy_sell.js - This is optional if expeclictly its an npm or local package
 *  @author         : soumallya mondal
 *  @version        : 1.0
 *  @since          :16-09-2018
 *
 ******************************************************************************/
var fs=require('fs')
var r=require('readline-sync')//requiring file-system module

var src1=fs.readFileSync('./src/stack_of_company_5.json');//creating object of company json
var obj_com=JSON.parse(src1)

var src2=fs.readFileSync('./src/user.json');//creating object of user json file
var obj_user=JSON.parse(src2)


console.log('current share market\n')//
for(i in obj_com.stock)             //printing the current share market status
console.log('each share of "'+obj_com.stock[i].c_name+'" is->'+obj_com.stock[i].share_price+',total share available->'+obj_com.stock[i].no_share)

var user_name=r.question('\n\nenter your username->')//requiring user name from user
var bool=search(user_name); //if that found in the json file return true else return false



function search(name)   //the function that sear the name in the json
{
    
for(x in obj_user.user)//
{
    if(obj_user.user[x].name==name)//
    {  
        while(1)//
        {
            existing(x);//it is a function which operates all task for exix=sting user
        }  
       
    }
    else 
    continue;
}

new_user(user_name);//function that performs task for new user
}


function existing(val)
{ 
    
 console.log('\nwelcome back '+user_name )//give option to user to perform specific task
 var choice =r.question('\nenter your choice \n1..sell\n2..buy\n3..print report\n4..exit\n\n')

if(isNaN(choice)||choice<1||choice>4||choice==''||choice==' ')//validation
{
    console.log('invalid choice!! try again later ')
    process.exit();
}


else
{


 if(choice==1)  //sell functionality to sell the share
 {
     var no=r.question('\nenter the no of share u want to sell->')
        if(no>obj_user.user[x].no_share||isNaN(no)||no<1||no==''||no==' ')//validation  of input
        {
            console.log('invalid no. entered!!try again later')
            process.exit();
        }
        else
        {
            var arr =  obj_com.stock.filter(function(com) { //navigate to specified object
                return com.c_name==obj_user.user[x].c_name;//filter to filter a value in an object array
            });
            var total=(arr[0].share_price)*no;
            console.log('sucessfully sold..'+total+' credited to your account');
            obj_user.user[x].no_share=obj_user.user[x].no_share-no;//update objrct
            console.log('ramaining share '+obj_user.user[x].no_share)//priny message
            var str=JSON.stringify(obj_user);//make json file
            fs.writeFileSync('./src/user.json',str)//update in json
         
        }
        
}

else if(choice==2)//buy functionality
{
    var arr =  obj_com.stock.filter(function(com) {
        return com.c_name==obj_user.user[x].c_name;//filter to filter a value in an object array
    });
    var no=r.question('enter the no of share u want to buy in '+obj_user.user[x].c_name+'-->')
    if(isNaN(no)||no<1||no>(arr[0].no_share)||no==''||no==' ')//validation
    {
        console.log('invalid no !!!try again later')
        process.exit();
    }


    else
    {
        console.log('sucessfully purchased '+no+' share in '+arr[0].c_name)
        no=Number(no)
        obj_user.user[x].no_share=(obj_user.user[x].no_share)+no;//object updatation
        arr[0].no_share=arr[0].no_share- no;//onject updation of share
        console.log('sucesfully devited '+(no*arr[0].share_price)+' from your account')

        var str =JSON.stringify(obj_user)
        var str1=JSON.stringify(obj_com)
        fs.writeFileSync('./src/user.json',str)//write to json
        fs.writeFileSync('./src/stack_of_company_5.json',str1)//write to json
    }
    
}



else if (choice==3)
{
    var arr =  obj_com.stock.filter(function(com) {
        return com.c_name==obj_user.user[x].c_name;//filter to filter a value in an object array
    });
    
    console.log('\n\nuser name->',user_name)//
    console.log('stock in company->',obj_user.user[x].c_name)//..
    console.log('your total no of share->',obj_user.user[x].no_share)//..print status
    console.log('current price of each share->',arr[0].share_price)//..
    console.log('your total share value->',arr[0].share_price*obj_user.user[x].no_share)//

}


else if(choice==4)
{
    process.exit();
}



}
}

function new_user(user_name)//function to perform op in new user
{
    console.log('hello,'+user_name+' we have created your account')
    var com=r.question('\nchoose your company from above list to buy share-->')//takes company name 
    var no_of=r.question('\nenter the no of shares u want to buy-->')//takes no of share


    var obj={

        "name":user_name,//..
        "no_share":no_of,//..create a object and usees the input
        "c_name":com//..
    }
    obj_user.user.push(obj);//push to the user object array
    var arr=obj_com.stock.filter(function(item){//navigate
        return item.c_name==com
    })

    arr[0].no_share=arr[0].no_share-no_of;//update in object
    fs.writeFileSync('./src/stack_of_company_5.json',JSON.stringify(obj_com))//write to file
    fs.writeFileSync('./src/user.json',JSON.stringify(obj_user))//write to file

    console.log('purchase ucessfull')
    console.log('total cost to you '+arr[0].share_price*no_of)
}