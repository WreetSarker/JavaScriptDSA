//piece of data - val
//reference to next node - next
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let value = new Node(val);
        if (!this.head) {
            this.head = value;
            this.tail = this.head;
        } else {
            this.tail.next = value;
            this.tail = value;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }
        let current = this.head;
        let currentTail = current;
        while (current.next) {
            currentTail = current;
            current = current.next;
        }
        this.tail = currentTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;

    }

    // traverse() {
    //     let current = this.head;
    //     while (current) {
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }
}
let list = new SinglyLinkedList()
list.push('hello');
console.log(list);
list.push('there');
console.log(list);
list.push('wreet');
console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.pop());
