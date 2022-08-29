class Node{
    constructor(data , link = null){
        this.data = data;
        this.link = link;
    }
};

class LinkedList{
   
     var head ;
      var length ;
    constructor(){
       head = null;
        length = 0;
    }
    
    
    isEmpty(){
        return (this.length === 0);
    }
    
    insertAtHead(value){
        var newNode = new Node(value);
        newNode.link = this.head;
        this.head = newNode;
        this.length++;
    }
    
    insertAtLast(value){
        if (this.isEmpty){
            this.head = new Node(value);
        }
        else {
            var temp = this.head;
            var newNode = new Node(value);
            while (temp.link != null){
                temp = temp.link;
            }
            temp.link = newNode;
        }
        this.length++;
    }
    
    print(){
        var temp = this.head;
        while (temp != null){
            process.stdout.write(temp.data + "->");
            temp = temp.link;
        }
        console.log("NULL\n");
    }
};

var l1 = new LinkedList();
l1.insertAtLast(4);
l1.insertAtHead(3);
l1.insertAtHead(2);
l1.insertAtHead(1);
l1.print()
