class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const value = new Node(val);

        if (this.size === 0) {
            this.first = value;
            this.last = value;
        } else {
            const temp = this.first;
            this.first = value;
            this.first.next = temp;
        }
        this.size++;
        return this.size;
    }

    pop() {
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
