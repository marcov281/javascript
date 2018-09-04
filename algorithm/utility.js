//var prompt = require('prompt');
//var prompt = require('prompt-sync')();

module.exports = {
    /* this is a pogram of anagram detection in this pogram user have to give two string 
    this pogram will check wheather those two string are anagram or not
    @author soumallya mondal
    date-04/09/2018*/

    anagram: function (item1, item2) {
        var arr1 = item1.split(''); //to convert the string into array
        var arr2 = item2.split(''); //to convert the string into array
        var arr1 = arr1.sort(); //sort the array 
        var arr2 = arr2.sort(); ////sort the array 

        if (arr1.join(',') === arr2.join(',')) //check wheather they are equal or not
        {
            console.log('anagram detected');
            process.exit();
        } else
            console.log('not anagram');
        process.exit();
    },




    /* this pogram find the range of prime numbers, user have to enter the range  in
     which they want to find the prime numbers 
     @author soumallya mondal
    date-30/08/2018*/

    primerange: function (item, item2) {
        var count = 0;

        while (item < item2) {
            var flag = false; //COUNTER FOR LATER REFERENCE

            for (var i = 2; i <= item / 2; ++i) {

                if (item % i == 0) // condition for nonprime number
                {
                    flag = true;
                    break;
                }
            }

            if (!flag)
                console.log('primes are ->' + item);

            ++item;

        }
    },





    /*this pogram will check wheather a number is prime or not then it will check wheather these 
    number are palindrome or anagram, here user have to give some range  in between we have to find 
    all of these
    @author soumallya mondal
    date-30/08/2018*/

    extendprime: function (a,b) 
    { 
        var arr=[]
     for(var i=a;i<b;i++)
     {
         var flag=true
         for(j=2;j<i;j++)
         {
             if(i%j==0)
             {
                 flag=false
             }
         }
         if(flag)
         {
             arr.push(i);
         }
     }
     return arr;
   
    },
    anagram1:function(item1,item2)
    {
        item1=item1.toString();
        item2=item2.toString();
        var arr1 = item1.split(''); //to convert the string into array
        var arr2 = item2.split(''); //to convert the string into array
        var arr1 = arr1.sort(); //sort the array 
        var arr2 = arr2.sort(); ////sort the array 

        if (arr1.join(',') === arr2.join(',')) //check wheather they are equal or not
        {
            return true;
        } 
        else 
        return;

    },
    palindrome1: function (num) {
        
        var temp = num;

        var rev=0;
        //console.log('temp-->'+temp)
        while (num >0) 
        { 
         rev = (rev * 10) + (num%10);
            num =Math.floor(num / 10) ;
        }
        //console.log('rev-->'+rev)
        if (temp === rev)
        {
          
            return true;
        }
        else{
         return false;
    }
     
    },








    /* this program is Binary Search the Word from Word List here user need to give a large sentence
    and provide a word to search..this pogram will find the word in the list wheather it is available
    or not using binary search
    @author soumallya mondal
    @date-04/09/2018*/

    binaryword: function ( word)

    {
        var fs = require('fs'); //file open
        var contents = fs.readFileSync('DATA', 'utf8'); //read data
        //console.log(contents)
        var arr = contents.split(' '); //convert each sentence to array
        arr = arr.sort(); //sort thr whole array
        start = 0;
        end = arr.length-1;
       // console.log(arr)


        while (start <= end) //simple binary search logic
        {
            mid = Math.floor((start + end) / 2);
           // console.log(arr[mid])

            if (arr[mid] === word) {
                console.log('\n\n\n\nYay...Match found')
                process.exit();
            } else if (word > arr[mid]) {
                start = mid + 1;
            } else if (word < arr[mid]) {
                end = mid - 1;
            }

        }
         {
            console.log('\n\n\n\nooopss..No match found');
            process.exit();
        }

    },




    /* this is a game implemented by binary search to find a number takes a command­line argument N, 
    asks you to think of a numberbetween 0 and N­1, where N = 2^n, and always guesses the answer with n
    questions.
    @author soumallya mondal
    @date-04/09/2018**/

    findnumber: function (val) {
       
        var readlineSync = require('readline-sync');
        
        var arr = [];
        var arr1 = [];
        for (i = 0; i < val; i++) {
            arr.push(i);    //to fill an array with value from 0 to given range
        }

        var first = 0;
        var last = arr.length;
        

         while (first <= last) 
         {
            var mid = Math.floor((first + last) / 2);   //find the mid element and check its the no or not
            //console.log(mid);
var val=readlineSync.question(`\n\n\nIs ${arr[mid]} is the element?\nif yes press 1-->\nelse press 0-->`);
            if (val == '0') 
            {
            arr1.push(arr[mid]);
var val1= readlineSync.question(`\n\n\n\nif your value > ${arr[mid]} \n\n\nif yes press 1--> \nif no press 0-->`);
            
                {                           //if not the no then ask if it is larger than mid or smaller
                if (val1 === '1')
                {
                first = mid + 1;
                } 
                else
                last = mid - 1;                   
                }    
            
            }
            else if (val === '1') 
            {
                console.log('yay!!! we found your element');
                console.log('total searched-->'+arr1);
                //break;
                process.exit();
        
            }
        }
},






/*this is a pogramme of bubble sort ,­
 Reads in integers prints them in sorted order using Bubble Sort
 @author soumallya mondal
@date-04/09/2018**/

 bubblesort:function(prompts,val)
 {
    var arr=[];
    bub();
    function bub()
    {
        if(arr.length>=val)
        {
            var n=arr.length;
            for(var i=0;i<n-1;i++)  //compare of two consucutive value in each iteration
            {
                for(j=i+1;j<n;j++)
                {
                    if(Number(arr[j]<Number(arr[i])))
                    {                                       // swaping items
                        var temp=Number(arr[j]);
                        arr[j]=arr[i];
                        arr[i]=temp;
                    }
                }
            }
        console.log('the sorted array is -->'+arr);
        process.exit();
        }

        else
        {
            prompts.question(`enter the ${arr.length+1}th value-> `,function(val1){

                arr.push(val1);
                bub();
            })
        }
    }


 },





 /*tempconversion is a program which converts farenhite to celcius and celcius to farenhite
 here user need to choose the conversion first then  they need to give temparature 
 as input 
 @author soumallya mondal
@date-04/09/2018**/

tempConversion:function(prompts,val)
{
    if(val==1)  //converting farenhite to celcius
    {
        prompts.question('\nenter the temparature in FARENHITE-->',function(val1){

            var c=(5/9)*(val1-32);
            console.log('\nrelative temparature in celcius is-->',+Math.floor(c));
            prompts.close();
        })
    }

    if(val==2)
    {                       //converting celcius to farenhite
        prompts.question('\nenter the temparature in celcius-->',function(val2){

            var f=((9/5)*val2)+32;
            console.log('\nrelative temparature in farenhite is-->',+Math.floor(f));
            prompts.close();

        })
    }


},




/*this pogram is written to check the root of a number which cant be calculated using normal
sqrt root implementation here we use newtons method to find the root which 
will be in deimal format
@author soumallya mondal
@date-04/09/2018**/

newtonSqrt:function(prompts,val)
{

    var t=val;

    while(Math.abs(t -(val/t))>Number.EPSILON*t)    //priwritten condition
    {  
        t=((val/t)+t)/2;    //priwritten formula
    }

    console.log('\n\nthe approx root of the value is-->'+t);
    prompts.close();

},





/*this pogram takes decimal number as an input from user then decompose the decimal value
and then make it a binary form and prints the result
@author soumallya mondal
@date-04/09/2018*/

toBinary:function(prompts,val)
{
var arr='';

while(val>0)
    {                               //converting decimal to binary and inserting reverse
        var r=val%2;
        arr=arr+r;
        val=Math.floor(val/2);
        
    }
   var arr1=arr.split("").reverse().join("");   //reverse to get the original


console.log('binary equivalant -->'+arr1);
prompts.close();

},






/*this program works on bit level here user will enter some value then we need to change the value
to 8bit binary equivalant then we have to exchange the two nibble of the equivalant
and the new number what we will get have to check wheather it is a number of 2 to the power or not
@author soumallya mondal
@date-04/09/2018*/

bitsSwap:function(prompts,val)
{
    var arr=[];

while(val>0)
    {                       //converting decimal to binary
        var r=val%2;
        arr.unshift(r);
        val=Math.floor(val/2);
        
    }
while(arr.length<8)                    //
{
    for(i=0;i<(8-arr.length);i++)   //adding 0 to blank bits
    {
        arr.unshift(0);             //
    }

}
console.log('before swapping-->'+arr);
for(var i=0;i<4;i++)
{
    var temp=arr[4+i]       //
    arr[4+i]=arr[i];        //swaping bits
    arr[i]=temp;            //
}
console.log('after swapping-->'+arr)
var sum=0;

for(i=7;i>=0;i--)
{
    //console.log(Number(arr[7-i]))
    sum=sum+(Number(arr[7-i])*this.pow(i)); //converting to decimal

}

console.log('value after bit swapping will be-->'+sum)
this.isPower(sum);  //checking if the new value is a power of 2 or not
prompts.close();

},

pow:function(val)
{
    //console.log(val)
    var a=1;
    for(var i=1;i<=val;i++)
    {
        a=a*2;
    }
    //console.log(a)
    return a;
},

isPower:function(val)  
{
    var temp=val;
    var count=0;
    if(val%2==0)
    {
        while(val%2==0)
        {
            count++;
            val=val/2;
        }
        if(val==1)
        console.log('\nit is  power of 2-->2^'+count+'= '+temp);
        else 
        console.log('\nooups..It is not a power of 2\n');
    }
    else   
        console.log('\nooups..It is not a power of 2\n');


},





/*this pogram is based on insertion sort,, in this pogram user have to provide a string of 
words and this pogram will sort all the words in that string using insertion sort
@author soumallya mondal
@date-04/09/2018*/

insertionsort:function(prompts,val)
{
    //console.log(val)
    var arr= val.split(' ');
    for(var i=1;i<arr.length;i++)
    {
        var value=arr[i];
        var hole=i;
        while(hole>0 && arr[hole-1]>value){

            arr[hole]=arr[hole-1];
            hole=hole-1;

        }
        arr[hole]=value;
    }

console.log('\n\nthe sorted list is--> '+arr);
console.log('\n\n\n')
prompts.close();
},





/*this pogram is based on merge sort algorithm, here user will pass some string value we have to
use divide and conquar technique to sort the array untill the array size become 0 or 1
@author soumallya mondal
@date-04/09/2018 */

mergesort:function(array)
    {
        if (array.length === 1) 
            // return once we hit an array with a single item
            return array;
       var middle = Math.floor(array.length / 2) ;// get the middle item of the array rounded down
        var left = array.slice(0, middle) ;// items on the left side
        var right = array.slice(middle) ;// items on the right side
      
        return this.merge(
          this.mergesort(left),
          this.mergesort(right)
        )
        
    },
   // compare the arrays item by item and return the concatenated result
   merge:function (left, right) 
   {
    var result = [];
  var indexLeft = 0;
  var indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }


  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))

},



/*to calculate monthlyPayment that reads in threecommand­line arguments P, Y, and R and calculates 
the monthly payments you would have to make over Y years to pay off a P principal loan amount 
at R per cent interest compounded monthly.
@author soumallya mondal
@date-04/09/2018*/

monthlyPayment:function(p,y,R)
{
    //console.log(p+'dsad'+y+'sfs'+R)
    var n=12*y;
    var r=R/1200;
    var payment=(p*r)/(1-(Math.pow((1+r),-n)));     //pridefine formula
    console.log('\nyou need to pay monthly-->'+Math.floor(payment))
},






/*There is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which can be returned by Vending Machine. 
this is a Program to calculate the minimum number of Notes as well as the Notes to be returned by 
the Vending Machine as a Change
@author soumallya mondal
@date-04/09/2018*/

vending:function(val)
{
    var count_1000=0;
    var count_500=0;
    var count_100=0;
    var count_50=0;
    var count_10=0;
    var count_5=0;
    var count_2=0;
    var count_1=0;
    recur(val);
function recur(val)     //simple recursion with if-else to find no of notes
{
            if(val>=1000)
            {
                count_1000++;
                val=val-1000;
            }
           else if (val>=500)
            {
                count_500++
                val=val-500;
            }
         else if (val>=100)
            {
                count_100++
                val=val-100;
            }
            else if (val>=50)
            {
                count_50++
                val=val-50;
            }
            else if (val>=10)
            {
                count_10++
                val=val-10;
            }
            else if (val>=5)
            {
                count_5++
                val=val-5;
            }
            else if (val>=2)
            {
                count_2++
                val=val-2;
            }
            else if (val>=1)
            {
                count_1++
                val=val-1;
            }
            else 
           return;
            recur(val)           
}


console.log('\n\nTransaction completed\n\n')
if(count_1000!=0)
{
    console.log('you got '+count_1000+' 1000 rupee note');
}

if(count_500!=0)
{
    console.log('you got '+count_500+' 500 rupee note');
}

if(count_100!=0)
{
    console.log('you got '+count_100+' 100 rupee note');
}

if(count_50!=0)
{
    console.log('you got '+count_50+' 50 rupee note');
}

if(count_10!=0)
{
    console.log('you got '+count_10+' 10 rupee note');
}

if(count_5!=0)
{
    console.log('you got '+count_5+' 5 rupee note');
}

if(count_2!=0)
{
    console.log('you got '+count_2+' 2 rupee note');
}

if(count_1!=0)
{
    console.log('you got '+count_1+' 1 rupee note');
}
console.log('total no of notes dispenced -->'+(count_1000+count_500+count_100+count_50+count_10+count_5+count_2+count_1));
process.exit();

},






/*calender static function that takes a date as input and prints the day of the week that date 
falls on. this program is taking three command­line arguments: m (month), d (day), and y (year). 
For m using 1 for January, 2 for February, and so forth. For output print 0 for Sunday, 1 for Monday, 2 for
Tuesday, and so forth.
@author soumallya mondal
@date-04/09/2018*/

calender:function(m,d,y)
{
     var y0 =(y-((14-m)/12))
     //console.log(y0)
     var x =((y0 + y0/4 - y0/100 + y0/400))
     //console.log(x)
     var m0 = 12
     //Math.floor((m + 12) * (((14 - m) / 12) - 2))
     //console.log(m0)
     var d0 = Math.floor(((d +x+31))%7)
     switch(d0)
     {
        case 1:console.log('this is sunday');
        break;

        case 2:console.log('this is monday');
        break;

        case 3:console.log('this is tuesday');
        break;
        case 4:console.log('this is wednesday');
        break;
        case 5:console.log('this is thursday');
        break;
        case 6:console.log('this is friday');
        break;
        case 7:console.log('this is saturday');
        break;
        default:console.log('ooppss!!! no date found')
     }

    },






/*Check using Stopwatch the Elapsed Time for every method calld. Output the Search and Sorted List.
 More importantly print elapsed time performance in descending order
 @author soumallya mondal
@date-04/09/2018*/

 binaryword1: function ( word)

    {
        var fs = require('fs'); //file open
        var contents = fs.readFileSync('DATA', 'utf8'); //read data
        //console.log(contents)
        var arr = contents.split(' '); //convert each sentence to array
        arr = arr.sort(); //sort thr whole array
        start = 0;
        end = arr.length-1;
       // console.log(arr)


        while (start <= end) //simple binary search logic
        {
            mid = Math.floor((start + end) / 2);
           // console.log(arr[mid])

            if (arr[mid] === word) {
                console.log('\n\nYay...Match found')
                return;
            } else if (word > arr[mid]) {
                start = mid + 1;
            } else if (word < arr[mid]) {
                end = mid - 1;
            }

        }
         {
            console.log('\n\nooopss..No match found');
            return;
        }

},


    currentTime : function()
{
     var d=new Date();    //it will give today's date
     return d.getTime(); //it will give the current time
},


elapsedTime : function(start,stop)
{
    var t=(stop-start) //since it comes in mili sec, we are converting it to seconds
    
    return t;
},


insertionsort1:function(val)
{
    //val=val.toString();
    var arr= val.split(' ');
    for(var i=1;i<arr.length;i++)
    {
        var value=arr[i];
        var hole=i;
        while(hole>0 && arr[hole-1]>value){

            arr[hole]=arr[hole-1];
            hole=hole-1;

        }
        arr[hole]=value;
    }

console.log('\n\nthe sorted list is--> '+arr);
console.log('\n\n')

},


bubblesort1:function(val)
 {
    var arr= val.split(' ');
    bub();
    function bub()
    {       
          var n=arr.length;
            for(var i=0;i<n-1;i++)
            {
                for(j=i+1;j<n;j++)
                {
                    if(arr[j]<arr[i])
                    {
                        var temp=arr[j];
                        arr[j]=arr[i];
                        arr[i]=temp;
                    }
                }
                  
            }
            console.log('\n\nthe sorted array is -->'+arr);
            return;
    }

 },





 
}



