function linkedlist()
{
    this.head =null;
}
linkedlist.prototype.isEmpty = function()
{
    return this.head === null;
};
//[5]->[10]->[15]->[20]->null
//1.create a new node with val
//2.make the new node point to the current head
//3.update this head to point to the new node
linkedlist.prototype.prepend = function(val)
{
    var newNode = {
        data : val,
        next:this.head
    };
    this.head = newNode;
};

//1.append method
//2.create a new node using val
//3.travers to the end of the list
//4.make the last node's `next` value point to the new node



linkedlist.prototype.enqueue = function(val)
{
    //console.log('hii1')
    var newNode = {
        data : val,
        next : null
    };

    if(this.isEmpty())
    {
        this.head = newNode;
        return
    }
    var current = this.head;

    while(current.next !==null)
    {
        current = current.next;
    }

    current.next = newNode;
};



       
//contains method
linkedlist.prototype.contains = function(val)
{
    var current = this.head;

    while(current !==null)
    {
        if(current.data ===val)
        {
            return true;
            console.log("word is present")
        }
        current = current.next
    }
     return false;
    // console.log("word is not present");
    //return ("word is not present");
};



linkedlist.prototype.dequeue = function()
{
   var temp1=this.head;
   var temp2=this.head.next;
   this.head=temp2;
   return temp1.data
};



//prints method
linkedlist.prototype.print = function()
{
    //console.log('hii')
    var output = '[';
    var current = this.head;

    while(current!==null)
    {
        output +=current.data;
        if(current.next !== null)
        {
            output +=', ';
        }
        current = current.next;
    }
    output += ']';
    return output;
    
};

linkedlist.prototype.size = function()
{
    var temp=this.head;
    var count=0;
    while(temp.next!=null)
    {
        temp=temp.next
        count++;
    }
    return count;
}





module.exports = linkedlist

