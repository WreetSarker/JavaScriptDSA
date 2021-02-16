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
            return true;
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

    remove(idx) {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        } else if (idx === 0) {
            this.shift();
        } else if (idx === this.length - 1) {
            this.pop();
        } else {
            let prev = this.get(idx - 1);
            let removed = prev.next;
            prev.next = removed.next;
            this.length--;
            return removed;
        }
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

