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
        this.length--;
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
        this.length--;
    }
    
    getLength(){
        return this.length;
    }
    
    getFirst(){
        if (!this.isEmpty()){
            return this.head.data;
        }
        return -1;
    }

    getLast(){
        if (!this.isEmpty()){
            return this.last.data;
        }
        return -1;
    }
    
    reverse(){
        if (!this.isEmpty() && this.length > 1){
            var prev = null;
            var next = null;
            var curr = this.head;
            this.last = this.head;
            while (curr != null){
                next = curr.link;
                curr.link = prev;
                prev = curr;
                curr = next;
            }
            this.head = prev;
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
l1.reverse();
l1.print();
console.log("Length : " + l1.getLength());
console.log("head : " + l1.getFirst());
console.log("last : " + l1.getLast());

// Output : 
// 4->3->2->1->5->NULL

// 5->1->2->3->4->NULL

// Length : 5
// head : 5
// last : 4
