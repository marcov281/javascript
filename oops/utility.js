var list=require('./src/list.js')
var l=new list();
module.exports={

/*Maintain the List of CompanyShares in a Linked List So new CompanyShares can
be added or removed easily. Do not use any Collection Library to implement Linked
List. */

list_com_add:function(c_name,no_share,price)//add to list
{  
var obj={
            com_name:c_name,
            no_of_share:no_share,
            share_price:price
        }
    
    l.append(obj);//append to list
console.log('\nyour object sucessfully stored\n')

},

list_com_display:function()//display function
{
    l.print();//display function implemented in linked lit
},

list_com_delete:function(name)//delete object 
{
   var a= l.remove(name);//delete function in linked liat
if(a)
console.log('sucessfully sold all share of '+name);
},





/** program to initialize deck of cards having suit ("Clubs","Diamonds", "Hearts", "Spades") & Rank 
 * ("2", "3", "4", "5", "6", "7", "8", "9", "10","Jack", "Queen", "King", "Ace"). Shuffle the
 *  cards using Random method and then distribute 9 Cards to 4 Players and Print the Cards the 
 * received by the 4 Players using 2D Array... */

 cards:function()
 {
    var all_cards=[]
    
    
    for(i=2;i<=10;i++)
    {                           //to enter no card of clubs in the array
        var clubs='clubs-'
        clubs=clubs+i;
        all_cards.push(clubs)
    }
    all_cards.push('clubs-ace')//
    all_cards.push('clubs-king')//..
    all_cards.push('clubs-queen')//..to enter picture cards of clubs in the array
    all_cards.push('clubs-jack')//..

    for(i=2;i<=10;i++)
    {                           //to enter no card of diamonds in the array
        var diamonds='diamonds-'
        diamonds=diamonds+i;
        all_cards.push(diamonds)
    }
    all_cards.push('diamonds-ace')//
    all_cards.push('diamonds-king')//..
    all_cards.push('diamonds-queen')//..to enter picture diamonds of clubs in the array
    all_cards.push('diamonds-jack')//.

    for(i=2;i<=10;i++)
    {                           //to enter no card of spades in the array
        var spades='spades-'
        spades=spades+i;
        all_cards.push(spades)
    }
    all_cards.push('spades-ace')//
    all_cards.push('spades-king')//..
    all_cards.push('spades-queen')//..to enter picture spades of clubs in the array
    all_cards.push('spades-jack')//.

    for(i=2;i<=10;i++)
    {                           //to enter no card of hearts in the array
        var hearts='hearts-'
        hearts=hearts+i;
        all_cards.push(hearts)
    }
    all_cards.push('hearts-ace')//
    all_cards.push('hearts-king')//..
    all_cards.push('hearts-queen')//..to enter picture hearts of clubs in the array
    all_cards.push('hearts-jack')//


var player1=[];//
var player2=[];//
var player3=[];// blank array to distribute cards to playes
var player4=[];//
var counts1=9;
var counts2=9;
var counts3=9;
var counts4=9;

for(var i=0;i<52;i++)//max cards 52
{
    var rand=Math.random();

    if(rand<0.25 && counts1>0)//1st condotion
    {
        player1.push(all_cards[i])
        counts1--;
    }

    else if(rand>0.25 && rand<0.5 && counts2>0)//2nd condition
    {
        player2.push(all_cards[i])
        counts2--;
    }

    else if(rand>0.5 && rand<0.75 && counts3>0)//3rd condition
    {
        player3.push(all_cards[i])
        counts3--;
    }

    else if(rand>0.75 && rand<1 && counts4>0)//4th condition
    {
        player4.push(all_cards[i])
        counts4--;
    }
}

var arr_print=[];
str='player1->'
for(var i=0;i<9;i++)
{ 
    str=str+player1[i]+' ,'
}

arr_print.push(str)
str='player2->'

for(var j=0;j<9;j++)
{
    str=str+player2[j]+' ,'
}

arr_print.push(str)
str='player3->'


for(var i=0;i<9;i++)
{
    str=str+player3[i]+' ,'
}

arr_print.push(str)
str='player4->'

for(var i=0;i<9;i++)
{
    str=str+player4[i]+' ,'
}

arr_print.push(str)



for(var i=0;i<arr_print.length;i++)
{
    console.log(arr_print[i]+'\n')
}



},




/**Extend the above program to create a Player Object having Deck of Cards, and having ability to
 *  Sort by Rank and maintain the cards in a Queue implemented using Linked List. Do not use any
 *  Collection Library. Further the Player are also arranged in Queue. Finally Print the Player 
 * and the Cards received by each Player. */

cards_extend:function()

{
    var queue=require('./src/queue-list.js')
    var q1=new queue();
    var q2=new queue();
    var q3=new queue();
    var q4=new queue();


    var all_cards=[]
    
    
    for(i=2;i<=10;i++)
    {                           //to enter no card of clubs in the array
        var clubs='clubs-'
        clubs=clubs+i;
        all_cards.push(clubs)
    }
    all_cards.push('clubs-ace')//
    all_cards.push('clubs-king')//..
    all_cards.push('clubs-queen')//..to enter picture cards of clubs in the array
    all_cards.push('clubs-jack')//..

    for(i=2;i<=10;i++)
    {                           //to enter no card of diamonds in the array
        var diamonds='diamonds-'
        diamonds=diamonds+i;
        all_cards.push(diamonds)
    }
    all_cards.push('diamonds-ace')//
    all_cards.push('diamonds-king')//..
    all_cards.push('diamonds-queen')//..to enter picture diamonds of clubs in the array
    all_cards.push('diamonds-jack')//.

    for(i=2;i<=10;i++)
    {                           //to enter no card of spades in the array
        var spades='spades-'
        spades=spades+i;
        all_cards.push(spades)
    }
    all_cards.push('spades-ace')//
    all_cards.push('spades-king')//..
    all_cards.push('spades-queen')//..to enter picture spades of clubs in the array
    all_cards.push('spades-jack')//.

    for(i=2;i<=10;i++)
    {                           //to enter no card of hearts in the array
        var hearts='hearts-'
        hearts=hearts+i;
        all_cards.push(hearts)
    }
    all_cards.push('hearts-ace')//
    all_cards.push('hearts-king')//..
    all_cards.push('hearts-queen')//..to enter picture hearts of clubs in the array
    all_cards.push('hearts-jack')//


var player1=[];//
var player2=[];//
var player3=[];// blank array to distribute cards to playes
var player4=[];//
var counts1=9;
var counts2=9;
var counts3=9;
var counts4=9;

for(var i=0;i<52;i++)//max cards 52
{
    var rand=Math.random();

    if(rand<0.25 && counts1>0)//1st condotion
    {
        player1.push(all_cards[i])
        counts1--;
    }

    else if(rand>0.25 && rand<0.5 && counts2>0)//2nd condition
    {
        player2.push(all_cards[i])
        counts2--;
    }

    else if(rand>0.5 && rand<0.75 && counts3>0)//3rd condition
    {
        player3.push(all_cards[i])
        counts3--;
    }

    else if(rand>0.75 && rand<1 && counts4>0)//4th condition
    {
        player4.push(all_cards[i])
        counts4--;
    }
}

player1.sort();//
player2.sort();//
player3.sort();//   to sort all the cards
player4.sort();//

for(i=0;i<9;i++)    //to add to the queue
{
    q1.enqueue(player1[i])
}

for(i=0;i<9;i++)    //to add to the queue
{
    q2.enqueue(player2[i])
}
for(i=0;i<9;i++)    //to add to the queue
{
    q3.enqueue(player2[i])
}
for(i=0;i<9;i++)    //to add to the queue
{
    q4.enqueue(player2[i])
}

console.log(q1.print())
console.log('\n');
console.log(q2.print())
console.log('\n');
console.log(q3.print())
console.log('\n');
console.log(q4.print())



},





/**  InventoryManager   to   manage   the  Inventory.   The   Inventory   Manager   will   use   
 * InventoryFactory   to   create   Inventory  Object   from   JSON.   The   InventoryManager   will
 * call   each   Inventory   Object   in   its   list  to   calculate   the   Inventory   Price
 * and   then   call   the   Inventory   Object   to   return   the  JSON   String.   The   main   
 * program   will   be   with   InventoryManager   */

inven_manager:function(r1,choice)
{
    var fs=require('fs')
    var src1=fs.readFileSync('./src/inven_manager.json');//creating object of company json
    var obj=JSON.parse(src1)
    if(choice==1)
    {
        var name_of=r1.question('enter the name of the company you want to add->')//taking com name
        if(!isNaN(name_of)||name_of==''||name_of==' ')//validation of string
        {
            console.log('invalid company name')
            process.exit();
        }
        var no_of_share=r1.question('enter the no of share u want to add->')//no of share input
        if(isNaN(no_of_share)||no_of_share<1||no_of_share==''||no_of_share==' ')//integer validation
        {
            console.log('invalid no of share!!please try again later ')
            process.exit();
        }
        var price=r1.question('enter the price of each share->')//price of each share input
        if(isNaN(price)||price<1||price==''||price==' ')//validation
        {
            console.log('invalid price of share!!plesae enter valid share price')
            process.exit();
        }

        var obj1={//creating object to push to json object

            name:name_of,
            no_share:no_of_share,
            share_price:price
        }
    obj.inventory.push(obj1)//pushing to json object
    var obj=JSON.stringify(obj)//creating json ffrom object
    fs.writeFileSync('./src/inven_manager.json',obj);//writing on json file
    console.log('sucessfully updated :)');
    process.exit()
    }

    else if(choice==2)//if want to search details
    {
        var name=r1.question('\n\nenter the company name-->')//company name
        var arr=obj.inventory.filter(function(val){//filter out perticular object that meet certain criteria
            return val.name==name;
        })
        console.log('total share available of '+name+' is->'+arr[0].no_share)//message
        console.log('share of each price-->'+arr[0].share_price)//message
        console.log('total price of share is->',(arr[0].no_share*arr[0].share_price))//message
    }
    
    else if(choice==3)//close program
    {
        console.log('exiting the program')
        process.exit();
    }


},






/** Further maintain the Stock Symbol Purchased or Sold in a Stack implemented using  
 * Linked   List   to   indicate   transactions   done.  */

inven_stack:function(r,user_name)

{
    var s=require('./src/inven_stack_implementation.js')
    var stack=new s();

var fs=require('fs')
var src1=fs.readFileSync('./src/stack_of_company_5.json');//creating object of company json
var obj_com=JSON.parse(src1)

var src2=fs.readFileSync('./src/user.json');//creating object of user json file
var obj_user=JSON.parse(src2)


console.log('current share market\n')//
for(i in obj_com.stock)             //printing the current share market status
console.log('each share of "'+obj_com.stock[i].c_name+'" is->'+obj_com.stock[i].share_price+',total share available->'+obj_com.stock[i].no_share)

    // var user_name=r.question('\n\nenter your username->')//requiring user name from user
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
 var choice =r.question('\nenter your choice \n1..sell\n2..buy\n3..print status\n4..view transaction\n5..exit\n')

if(isNaN(choice)||choice<1||choice>5||choice==''||choice==' ')//validation
{
    console.log('invalid choice!! try again later ')
    process.exit();
}


else
{


 if(choice==1)  //sell functionality to sell the share
 {
     var no=r.question('enter the no of share u want to sell->')
        if(no>obj_user.user[x].no_share||isNaN(no)||no<1||no==''||no==' ')//validation  of input
        {
            console.log('you have less no of share!!try again later')
            process.exit();
        }
        else
        {
            var arr =  obj_com.stock.filter(function(com) { //navigate to specified object
                return com.c_name==obj_user.user[x].c_name;//filter to filter a value in an object array
            });
            var total=(arr[0].share_price)*no;
            console.log('\n\nsucessfully sold..'+total+' credited to your account   :)');
            obj_user.user[x].no_share=obj_user.user[x].no_share-no;//update objrct
            console.log('ramaining share->'+obj_user.user[x].no_share)//priny message
            var str=JSON.stringify(obj_user);//make json file
            fs.writeFileSync('./src/user.json',str)//update in json

            //pushing object to stack
            var obj_stack={share_sold_in:obj_user.user[x].c_name,no_of_share_sole:no,share_sold_by:user_name}    
            

            stack.push1(obj_stack)
         
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
        console.log('available share is less !!!try again later')
        process.exit();
    }


    else
    {
        console.log('sucessfully purchased '+no+' share in '+arr[0].c_name)
        no=Number(no)
        obj_user.user[x].no_share=(obj_user.user[x].no_share)+no;//object updatation
        arr[0].no_share=arr[0].no_share- no;//onject updation of share
        console.log('sucesfully devited '+(no*arr[0].share_price)+' from your account')
        
        
        //creating and inserting object to the stack
        var obj2={share_brought_in:obj_user.user[x].c_name,no_of_share_brought:no,brought_by:user_name}
        stack.push1(obj2);

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
        console.log('\n\n<-----TRANSACTION HISTORY---->>')
        stack.display();

    
}



else if(choice==5)
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



},







/**Further maintain DateTime of the transaction in a Queue implemented using Linked
List to indicate when the transactions were done.here we will push the time of tranaction with the 
object also */


inven_queue:function(r,user_name)

{
    var s=require('./src/inven_queue_implementation.js')
    var queue=new s();

var fs=require('fs')
var src1=fs.readFileSync('./src/stack_of_company_5.json');//creating object of company json
var obj_com=JSON.parse(src1)

var src2=fs.readFileSync('./src/user.json');//creating object of user json file
var obj_user=JSON.parse(src2)


console.log('current share market\n')//
for(i in obj_com.stock)             //printing the current share market status
console.log('each share of "'+obj_com.stock[i].c_name+'" is->'+obj_com.stock[i].share_price+',total share available->'+obj_com.stock[i].no_share)

    // var user_name=r.question('\n\nenter your username->')//requiring user name from user
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
 var choice =r.question('\nenter your choice \n1..sell\n2..buy\n3..print status\n4..view transaction\n5..exit\n')

if(isNaN(choice)||choice<1||choice>5||choice==''||choice==' ')//validation
{
    console.log('invalid choice!! try again later ')
    process.exit();
}


else
{


 if(choice==1)  //sell functionality to sell the share
 {
     var no=r.question('enter the no of share u want to sell->')
        if(no>obj_user.user[x].no_share||isNaN(no)||no<1||no==''||no==' ')//validation  of input
        {
            console.log('you have less no of share!!try again later')
            process.exit();
        }
        else
        {
            var arr =  obj_com.stock.filter(function(com) { //navigate to specified object
                return com.c_name==obj_user.user[x].c_name;//filter to filter a value in an object array
            });
            var total=(arr[0].share_price)*no;
            console.log('\n\nsucessfully sold..'+total+' credited to your account   :)');
            obj_user.user[x].no_share=obj_user.user[x].no_share-no;//update objrct
            console.log('ramaining share->'+obj_user.user[x].no_share)//priny message
            var str=JSON.stringify(obj_user);//make json file
            fs.writeFileSync('./src/user.json',str)//update in json

            //pushing object to stack
            var obj_stack={share_sold_in:obj_user.user[x].c_name,no_of_share_sole:no,share_sold_by:user_name,tranaction_time:new Date()}    
            

            queue.enqueue(obj_stack)//enqueueing transaction details
         
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
        console.log('available share is less !!!try again later')
        process.exit();
    }


    else
    {
        console.log('sucessfully purchased '+no+' share in '+arr[0].c_name)
        no=Number(no)
        obj_user.user[x].no_share=(obj_user.user[x].no_share)+no;//object updatation
        arr[0].no_share=arr[0].no_share- no;//onject updation of share
        console.log('sucesfully devited '+(no*arr[0].share_price)+' from your account')
        
        
        //creating and inserting object to the stack
        var obj2={share_brought_in:obj_user.user[x].c_name,no_of_share_brought:no,brought_by:user_name,tranaction_time:new Date()}
        queue.enqueue(obj2);//enqueueing transaction details

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
        console.log('\n\n<-----TRANSACTION HISTORY---->>')
        queue.print();

    
}



else if(choice==5)
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



},




/**The software to be designed is a program that can be used to maintain an address book. An address book
holds a collection of entries, each recording a person's first and last names, address, city, state, zip, and
phone number. */

book:function(r,choice)//taking readline reference and choice of user
{
    var fs=require('fs')
    var src_book=fs.readFileSync('./src/book.json')//requireing json file

    var obj_book=JSON.parse(src_book)//creating object of tat json file
   
/**
 * @description if user want to perform search operation
 */
if(choice==1)
{
    
    var name=r.question('\n\n\nenter the first name-->')
    //filter method will return a new array of that search result
    var arr=obj_book.book.filter(function(val){
        return val.f_name==name;
    })
    console.log('\n\nyour search result--->')
    var name=arr[0].f_name+' '+arr[0].l_name
    console.log('name:'+name+', mobile no:'+arr[0].mob_no+', zip:'+arr[0].zip+',address:'+arr[0].address+'\n');
}


/**
 * @descriptionif user want to add new contact
 */
if(choice==2)
{
    

    var name1=r.question('\n\n\n\nenter the first name-->')//user input
    if(!isNaN(name1)||name==''||name1==' '||/\d/.test(name1==true))//validation
    {
        console.log('invalid first name!!!')//err msg
        process.exit();
    }
    var name2=r.question('enter the last name-->')//user input
    if(!isNaN(name2)||name2==''||name2==' '||/\d/.test(name2==true))//validation
    {
        console.log('invalid last name!!!')//err msg
        process.exit();
    }
    var no=r.question('enter the mobile no-->')//user input
    if(isNaN(no)||no.length!=10||no==''||no==' ')//validation
    {
        console.log('invalid mobile.no!!!')//err msg
        process.exit();
    }
    var pin=r.question('enter the zip code-->')//user input
    if(isNaN(pin)||pin.length!=6||pin==''||pin==' ')//validation
    {
        console.log('invalid zip no!!!')//err msg
        process.exit();
    }
    var add=r.question('enter the address(separated by ",")-->')//user input
    if(!isNaN(add)||add==''||add==' ')//validation
    {
        console.log('invalid address!!!')//err msg
        process.exit();
    }
    /**
     * @description assigning the user value to the object 
     */
    var obj=
    {

        f_name:name1,
        l_name:name2,
        mob_no:Number(no),
        zip:Number(pin),
        address:add
    }
//pushing  th new object to json object
obj_book.book.push(obj)

obj_book=JSON.stringify(obj_book);//making json file again

fs.writeFileSync('./src/book.json',obj_book)
// obj_book=JSON.parse(obj_book)
console.log('\n\ncontact added sucessfully   :)')
var name=name1+name2;
console.log('name:'+name+', mobile no:'+no+', zip:'+pin+',address:'+add+'\n')
}
/**
 * @description to delete an existing contact
 */


if(choice==3)
{
    var name=r.question('\n\n\nenter the first name-->')
    // obj_book=JSON.parse(obj_book)
    var removeIndex = obj_book.book.map(function(item) { return item.f_name; }).indexOf(name);
    obj_book.book.splice(removeIndex, 1);
    // var obj_book=obj_book.book.filter(function(val){
    //     return val.f_name!=name;
    // })
   
    var str= JSON.stringify(obj_book);
    fs.writeFileSync('./src/book.json',str)
    console.log('\n\ncontact deleted sucesfully  ;)')
}



/**
 * @description to update data of an existing contact
 */
if(choice==4)
{
    var name=r.question('\n\n\nenter the contact first name-->')
    for(var i=0;i<obj_book.book.length;i++)
    {
        if(obj_book.book[i].f_name==name)
        {
            var arr=(obj_book.book[i]);
        }
        
    }
if(arr==undefined)
{
    console.log('not in directory')
    process.exit()
}

var name=arr.f_name+' '+arr.l_name
console.log('name:'+name+', mobile no:'+arr.mob_no+', zip:'+arr.zip+',address:'+arr.address+'\n');
var choice=r.question('\n\n\nchoose option to edit..\n1.mobile no\n2.zip\n3.address\n')
   if(isNaN(choice)||choice<1||choice>3||choice==''||choice==' ')
   {
       console.log('invalid option choosen!!! please try again')
       process.exit
   }

if(choice==1)
{
    var no=r.question('enter the new mobile no-->')
    no=Number(no)
    arr.mob_no=no;
}

if(choice==2)
{
    var zip=r.question('enter the new zip code--->')
    zip=Number(zip)
    arr.zip=zip;
}

if(choice==3)
{
    var add=r.question('enter the new addresss-->')
    arr.address=add
}

var str1=JSON.stringify(obj_book);
fs.writeFileSync('./src/book.json',str1)
//  obj_book=JSON.parse(obj_book)
console.log('\n---contact updated sucesfully---')
var name=arr.f_name+' '+arr.l_name
console.log('name:'+name+', mobile no:'+arr.mob_no+', zip:'+arr.zip+',address:'+arr.address+'\n');

}



/**
 * @description to print the contact list contact
 */

if(choice==5)
{
    

    var opt=r.question('---enter option---\n1.print book sorted by zip code\n2.print book sorted by name\n')
    if(opt==1)
    {
        obj_book.book=obj_book.book.sort(function(a,b)
        {
            return a.zip-b.zip;
        })
        
        for(var i=0;i<obj_book.book.length;i++)
        {
            var name=obj_book.book[i].f_name+' '+obj_book.book[i].l_name
            console.log('name:'+name+', mobile no:'+obj_book.book[i].mob_no+', zip:'+obj_book.book[i].zip+',address:'+obj_book.book[i].address+'\n');
        }
     
       
    }  
    else if(opt==2)
    {
        obj_book.book=obj_book.book.sort(function(a,b)
        {
            return (a.f_name > b.l_name) ? 1 : ((b.f_name > a.l_name) ? -1 : 0);} );
            for(var i=0;i<obj_book.book.length;i++)
        {
            var name=obj_book.book[i].f_name+' '+obj_book.book[i].l_name
            console.log('name:'+name+', mobile no:'+obj_book.book[i].mob_no+', zip:'+obj_book.book[i].zip+',address:'+obj_book.book[i].address+'\n');
        }
    }  
}






/**
 * @description to save the contact list though it is optional
 */


if(choice==6)
{
    console.log('saving the update...')
    obj_book.book=obj_book.book.sort(function(a,b)
    {return (a.f_name > b.l_name) ? 1 : ((b.f_name > a.l_name) ? -1 : 0);} );

    var str=JSON.stringify(obj_book);
    fs.writeFileSync('./src/book.json',str)

}
/**
 * @description to exit out of the program
 */

if(choice==7)
{   
    console.log('\n\nclosing the address book......')
    process.exit();
}
}
}