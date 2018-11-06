function Node(element) {  //node definition
    this.element = element; 
    this.next = null; 
} 

function stack_using_list() { 
    this.head = new Node("head");  
    this.find=find;
    this.display = display; 
    this.findPrevious = findPrevious; 
    this.pop = pop;
    this.size=size;
    this.push1=push1;
    this.isEmpty=isEmpty;
 
} 
function find(item) {   //this function find the node where the search element found
    var currNode = this.head; 
    while (currNode.element != item ) { //traverse till null
        currNode = currNode.next; 
    } 
    return currNode;
} 


function display() {    //this function display the whole linked list using a temporary node
    var currNode = this.head; 
    while (!(currNode.next == null)) {
        console.log(currNode.next.element); 
        currNode = currNode.next; 
    }
    
} 


//Removing Nodes from a Linked List 

function findPrevious(item) {   //this function find the previous node of a node where the search elemnt found
    var currNode = this.head; 
    while (!(currNode.next == null) && (currNode.next.element != item)) { 
        currNode = currNode.next; 
    } 
    return currNode; 
} 

function pop() {    //this is a pop function which works like a stack
    
    var temp=this.head;
    var curr=this.head.next;    //we are using two parallal pointer to traverse the value
    while(curr.next!=null)
    {
        temp=curr;
        curr=curr.next;
    }
    temp.next=null;
    return curr.element;    // it returns the last popped element
}

function size()         //this function return the size of the linked list
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
function push1(val)
{

    var newNode=new Node(val)
    

    if(this.isEmpty())
    {
        this.head = newNode;
        // return
    }
    var current = this.head;

    while(current.next !==null)
    {
        current = current.next;
    }

    current.next = newNode;
};


function isEmpty()
{

    return this.head==null

}

module.exports=stack_using_list