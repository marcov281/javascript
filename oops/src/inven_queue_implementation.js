function queue()
{
    this.head =null;
}
queue.prototype.isEmpty = function()
{
    return this.head === null;
};
//[5]->[10]->[15]->[20]->null
//1.create a new node with val
//2.make the new node point to the current head
//3.update this head to point to the new node
queue.prototype.prepend = function(val)
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



queue.prototype.enqueue = function(val)
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
queue.prototype.contains = function(val)
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



queue.prototype.dequeue = function()
{
   var temp1=this.head;
   var temp2=this.head.next;
   this.head=temp2;
   return temp1.data
};



//prints method
queue.prototype.print = function()
{
   
    var current = this.head;

    while(current!==null)
    {
      console.log(current.data)
        current = current.next;
    }


    
};

queue.prototype.size = function()
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





module.exports = queue

