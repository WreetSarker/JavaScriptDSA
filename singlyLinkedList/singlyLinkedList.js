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

    shift() {
        if (this.length === 0) {
            return undefined;
        }
        let temp = this.head;
        this.head = this.head.next
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return temp;
    }

    unshift(val) {
        let value = new Node(val);
        if (!this.head) {
            this.head = value;
            this.tail = this.head;
        } else {
            value.next = this.head;
            this.head = value;
        }
        this.length++;
        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) {
            return null;
        }
        let counter = 0;
        let current = this.head;
        while (counter !== idx) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(idx, val) {
        if (!this.get(idx)) {
            return false;
        } else {
            this.get(idx).val = val;
            return true
        }
    }

    insert(idx, val) {
        let value = new Node(val);
        if (idx < 0 || idx > this.length) {
            return false;
        } else if (idx === 0) {
            return !!this.unshift(val);
        } else if (idx === this.length) {
            return !!this.push(val);
        } else {
            let prev = this.get(idx - 1);
            let temp = prev.next;
            prev.next = value;
            value.next = temp;
            this.length++;
            return true;
        }
    }


}
let list = new SinglyLinkedList()
list.push(1);
list.push(2);
list.push(3);
console.log(list);
console.log(list.insert(0, 0));
console.log(list);
list.insert(1, 'One');
console.log(list);
