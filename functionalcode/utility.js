    
           
 module.exports={//this is name replace code
            demo: function(name)
        {
        if(name.length<=3)
        console.log("user name should be minimum 4 digit\n\n");
        else
        console.log("hello "+name+", how are you\n\n");
        },





        /*this is leap yaera code we have to pass year as argument to check
        wheather it is leap year or not*/
        LeapYear:function(year)
        {
            if(year.length<=3)
                console.log("enter a valid year");
            else if (year%100==0&&year%400==0)//if it is a century
                console.log("this is a leap year");
            else if(year%100!=0&&year%4==0) //if it is not a century
                console.log("thhis is a leap year");
            else
                console.log("this is not a leap year");
        },






        /*this code takes vlue from cmd line argument and print the 
        table of power of two upto that range*/
        powerof2:function(limit) 
        {  if(limit>=31)
            console.log("value is out of limit,please re-enter");//to check limit
            else
        {
            for(var i=limit;i>=1;i--)
            {
                var value=2;
            
                for(var j=1;j<=i;j++)
                
                value=value*2;
                //compute the power value
                
                console.log("2^"+i+"="+value);
                }}
        },






        /*thhis is toss coin pogram here we have to pass the no of tosses
        and this code will calculate the no of head and tails and 
        it will also calculate the percetage of head vs tails*/ 
        tosscoin:function (no)
            {
                var head=0;
                var tail=0;
                for(var i=0;i<no;i++)//no of toss
                {
            var random = Math.random();//random funtion to get value from 0 to 1 
            if(random>0.5)
                head++;
            else
                    tail++;
                }
                console.log('no. of head = ->'+head);
                console.log('no. of tail = ->'+tail);
                console.log('percentage of head vs tail->'+(head/tail)*100);
                
            },      
            //finding harmonic number
        harmonic: function(term)
        {
            var sum=0;
            for(var i=1;i<=term;i++)
            {
                sum+=(1/i);
            }
            console.log('the harmonic number of '+term+'th term is ->'+sum);
        },






/*code to find prime factorization,Prime Factorization" is finding which prime numbers 
multiply together to make the original number*/
    
        primefactor: function(num)
        {
            //print no of 2 than divides the number(as smallest prime)
            while(num%2==0)
            {
                console.log(2);
                num=num/2;// to remove all 2's
            }
            //n must be odd now so we can skip 1 element i.e i=i+2
            for(var i=3;i<=Math.sqrt(num);i=i+2)
            {
                //while i divide num print i
                while(num%i==0)
                {
                    console.log(i);
                    num=num/i;
                }
            } 
            //if n is prime and greater than 2
            if(num>2)
            console.log(num);
        },





/*this code will take two commandline argument as co-ordinates like(x,y)
 and will calculate the distance from (0,0)*/
        distance: function(x,y)
        {
            var dis=Math.sqrt((x*x)+(y*y));
            console.log('the distance from centre to co-ordinates ('+x+','+y+') is ->'+dis);

        },






/* this code will create a basic simulator of gambling here we need to pass
 starting money as stake, no of times want to play as play, and goal..*/

 gambler: function(stake,play,goal)
 {
    var total_game=0;
    var curr_bal=0;
    var win=0;
    var loose=0;
    this.stake=stake;
    this.goal=goal;
    //above these are the all property

    while(curr_bal<=goal && stake>=0)//checking playing ability
    {
        //game logic starts
        stake=stake-1;
        total_game++;       //this is game count
        if(total_game%3==0)//this is win logic
        {
            curr_bal+=10;   //win money
            win++;
        }
        else //this is loose logic
        {
            stake=stake-2;  //loose deduction
            loose++;        //loose count
        }

    }
        if(stake<=0)//if money over
        {
            console.log("\n\n\nsorry! you are out of money");
            console.log('you total won->'+curr_bal+'$');
            console.log('you played '+total_game+' no of games');
            console.log ('your win percentage is->'+(win/total_game)*100+'%');
            console.log('your loose percentage is ->'+(loose/total_game)*100+'%');
        }

        else if(curr_bal>=goal)//if reach goal
        {
            console.log('\n\n\n\nyay! you reach your goal');
            console.log('you total won'+curr_bal+'$');
            console.log('you played '+total_game+' no of games');
            console.log('your win percentage is->'+(win/total_game)*100+'%');
            console.log('your loose percentage is'+(loose/total_game)*100+'%');

        }
 },






/*this is a code about creating random coupon by taking a range which is dynamic 
and can be taken from user*/
 coupons:function(min,max)
    {
        var random=[],i,n;
        for(i=min;i<max;i++)
        {
            n=_.random(min,max)
            random.push(n);

        }
            console.log(random);
            console.log('the length'+random.length);
            var distinct=new Set(random);
            console.log(distinct);
            console.log("number of distinct coupon "+[...distinct].length);

        },






 /*this code is use to take value from user of a 2d array and print the same result 
 in the console,The array is dynamic in size */
arr2d: function(  prompts,row,cols)
            {
                this.row=row;
                this.cols=cols;
                var limit=row*cols;
                
                

                var arr1=[];
            function input( limit)
            {
                
                if (arr1.length >= limit)
                 {
                     var k=0;
                     array2d = [];
                     var string = '';
                   for(var i=0;i<row;i++){
                       for(var j=0;j<cols;j++){
                        string = string + arr1[k] + ' ';
                        k++;
                       }
                       array2d.push(string);
                       string = '';
                   }
                   for (let index = 0; index < array2d.length; index++) {
                       console.log(array2d[index]);
                       
                       
                   }
                   //console.log(array2d);
                 }
                 
                 

               else 
               {
                prompts.question(`Please enter the ${(arr1.length + 1)} th value: `, function(ans)
                {
                    arr1.push(ans);
        
                    input(limit);
                    

                });
                }
              

            }
            input(limit);
            
            },


        




/*this is a quadratic equation pogram this pogram take 3 value a,b,c from user and prints the root
of ax^2 + bx+c , in this pogram we will use some basic math formula and some commonly ued 
math function to get the desire result*/

equation: function(a,b,c)
{
    this.a=a;
    this.b=b;
    this.c=c;

    var delta=Math.floor()(b*b-4*a*c);

    var root1= (-b+delta)/2*a;    //this is a simple formula
    var root2= (-b-delta)/2*a;    //this is a simple formula

    console.log('the first root is -> '+root1);
    console.log('the second root is -> '+root2);
    
},






/* this is a windchill program this takes 2 inputs one is the temparature in farenhite and
another is the wind speed in miles/hour, a simple formula is provided by that we have to calculate the
current weather*/ 

    windchill: function(temp,wind)
    {
        this.wind=wind;
        this.temp=temp;

        var weather=35.74+(0.6215*temp)+(((0.4275*temp)-35.75)*Math.pow(wind,0.16));
        console.log('\n\nthe effective temsparature of today will be-> '+weather);
        console.log('have a good day :)');

    },






/*this is triplate pogram it is used to find sum of zero ,user have to provide the no of elements and the 
value want to enter then this pogram will calculate all the set of triplets that makes the sum =0*/


sumzero:function(prompts,value)
{
    this.value=value;
    var arr2=[];
    var count=0;
  
    
    function y(value)
    {
        if(arr2.length>=value)
        { 
           
            for(var i=0;i<value;i++)
            {
                
                 for(var j=i+1;j<value;j++)
                   {
                   
                         for(var k=j+1;k<value;k++)
                     {
                       
                     
                     {
                         
                         if(Number(arr2[i])+Number(arr2[j])+Number(arr2[k])===0)
                         {
                             if((Number(arr2[i])!=Number(arr2[j]))!=Number(arr2[j]))
                             {
                             count++;
                             console.log('triplets found ['+arr2[i]+', '+arr2[j]+', '+arr2[k]+']');
                             }
                         }
                     }
                     }
                     }
            }
                        console.log('total no of triplets->'+count);
                        prompts.close();
        }

        else

        prompts.question('enter the value->',function(a){

            arr2.push(a);
            //prompts.close();

            y(value);
           
        });
       
    }

    y(value);


},





/* this is a stopwatch pogram by using this we can provide option to users and start/pause/stop a 
stopwatch
it gives a real time like simulation to use*/


currentTime : function()
{
     var d=new Date();    //it will give today's date
     return d.getTime(); //it will give the current time
},
elapsedTime : function(start,stop)
{
    var t=(stop-start)/1000; //since it comes in mili sec, we are converting it to seconds
    var m=0;
    if(t>=60)
    {
        m=m+1;
        t=t-60;
    }
    var h=0;
    if(m>=60)
    {
        h=h+1;
        m=m-60;
    }
    console.log("elapsed time: "+h+" hours "+m+" minute "+t+" seconds");
},




/*thhis is a code of permutation in this code we will permute
a given string provided by the user, at first we have to convert in a char array then
we have to use backtracking formula */


permute :function(alphabets, startIndex, endIndex) {
    if (startIndex === endIndex) 
    {
        //console.log(startIndex);
        //console.log(endIndex);   
        console.log(alphabets.join(''));
    }
     else
     {
      var i;
      for (i = startIndex; i <= endIndex; i++)
       {
        swap(alphabets, startIndex, i);
        this.permute(alphabets, startIndex + 1, endIndex);
        swap(alphabets, i, startIndex); // backtrack
      }
    }

    function swap (alphabets, index1, index2) {
        var temp = alphabets[index1];
        alphabets[index1] = alphabets[index2];
        alphabets[index2] = temp;
        return alphabets;
      }
      
  },

 }






