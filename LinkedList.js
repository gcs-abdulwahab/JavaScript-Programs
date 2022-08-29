class Node{
    constructor(data , link = null){
        this.data = data;
        this.link = link
    }
};

class LinkedList{
    constructor(){
        this.head = null;
        this.last = null;
        this.length = 0;
    }
    
    isEmpty(){ return this.length == 0}
    
    insertAtHead(value){
        var temp = new Node(value);
        temp.link = this.head;
        this.head = temp;
        this.length++;

        if (this.length == 1){
            this.last = this.head;
        }
    }
    
    print(){
        var temp = this.head;
        var str = "";
        while(temp){
            str += (temp.data + "->");
            temp = temp.link;
        }
        console.log(str+"NULL\n");
    }
    
    insertAtLast(value){
        if (this.isEmpty()){
            this.insertAtHead(value);
            return
        }
        else {
            var temp = this.head;
            while (temp.link != null){
                temp = temp.link
            }
            temp.link = new Node(value);
            this.last = temp.link;
            this.length++;
        }
    }
        
    removeAtHead(){
        if (this.isEmpty()){
            return;
        }
        else if (this.length == 1) {
            this.head = null;
            this.last = null;
        }
        else {
            this.head = this.head.link;
        }
    }
    
    removeAtLast(){
        if (this.isEmpty()){
            return;
        }
        else if (this.length == 1){
            this.head = null;
            this.last = null;
        }
        else {
            var temp = this.head;
            while (temp.link.link != null){
                temp = temp.link;
            }
            this.last = temp;
            temp.link = null;
        }
    }
        
};

l1 = new LinkedList();
l1.insertAtLast(5);
l1.insertAtHead(1);
l1.insertAtHead(2);
l1.insertAtHead(3);
l1.insertAtHead(4);
l1.print();
l1.removeAtHead();
l1.removeAtLast();
l1.print();
console.log("head : " + l1.head.data);
console.log("last : " + l1.last.data);
