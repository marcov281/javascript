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



linkedlist.prototype.append = function(val)
{
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
        if(current.data.com_name ===val)
        {
            return true;
            
        }
        current = current.next
    }
     return false;
    // console.log("word is not present");
    //return ("word is not present");
};



linkedlist.prototype.remove = function(val)
{
    var str='\n\nthis company is not available in your inventory!!!!!!!!!!\n\n'
    if(!this.contains(val))
    {
        console.log(str);
        return
    }

    if(this.head.data.com_name ===val)
    {
        this.head = this.head.next;
        return true;
    }
    else{
        var prev = null;
        var curr = this.head;
        while(curr.data.com_name!==val)
        {
            prev = curr;
            curr = curr.next;
        }
        prev.next = curr.next;
        return true;
    }
    
};



//prints method
linkedlist.prototype.print = function()
{
 
    var current = this.head;

    while(current!=null)
    {
        console.log(current.data)
        
        current=current.next;
    }
  
 
};


module.exports = linkedlist

