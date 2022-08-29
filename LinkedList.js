class Node{
    constructor(data , link = null){
        this.data = data;
        this.link = link;
    }
};

class LinkedList{
    constructor(){
        var head;
        var length = 0;
    }
    
    isEmpty(){
        return (this.length == 0);
    }
    
    insertAtHead(value){
        if (this.isEmpty()){
            head = new Node(value);
        }
        else {
            var newNode = new Node(value);
            newNode.link = this.head;
            this.head = newNode;
        }
    }
    
    print(){
        var temp = this.head;
        while (temp != null){
            console.log(temp.data);
            temp = temp.link;
        }
    }
};

var l1 = new LinkedList();
l1.insertAtHead(1);
l1.print();
