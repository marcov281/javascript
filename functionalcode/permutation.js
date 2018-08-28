var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);

function findperm()
{

//   var alphabets = ['A','B','C'];
prompts.question('enter a string to check-->\n',function(alphabets){
    var val=alphabets.split('');
    utility.permute(val, 0, val.length-1); 
    prompts.close();
})
}
findperm();