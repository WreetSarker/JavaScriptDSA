class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        const value = new Node(val);
        if (this.size === 0) {
            this.first = value;
            this.last = value;
        } else {
            this.last.next = value;
            this.last = value;
        }
        this.size++;
        return this.size;
    }

    dequeue() {
        if (this.size === 0) {
            return null;
        }
        const temp = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.size--;
        return temp.value;
    }
}

