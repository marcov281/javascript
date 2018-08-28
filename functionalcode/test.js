var r1=require('readline');
var prompts=r1.createInterface(process.stdin,process.stdout);
prompts.question("enter a string",function(val){

    arr(val);

});
function arr(val)
{
    var arr=val.split('');
console.log(arr[0]);

}