class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const value = new Node(val);
        if (!this.head) {
            this.head = value;
            this.tail = value;
        } else {
            this.tail.next = value;
            value.prev = this.tail;
            this.tail = value;
        }
        this.length += 1;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }
        const currentTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = currentTail.prev;
            this.tail.next = null;
            currentTail.prev = null;
        }
        this.length--;
        return currentTail;
    }
}
