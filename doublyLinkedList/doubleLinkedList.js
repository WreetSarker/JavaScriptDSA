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

    shift() {
        if (!this.head) {
            return undefined;
        }
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        const value = new Node(val);
        if (this.length === 0) {
            this.head = value;
            this.tail = value;
        } else {
            this.head.prev = value;
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
        const mid = Math.trunc(this.length / 2);
        if (idx <= mid) {
            let current = this.head;
            let count = 0;
            while (count !== idx) {
                current = current.next;
                count++;
            }
            return current;
        } else {
            let current = this.tail;
            let count = this.length - 1;
            while (count !== idx) {
                current = current.prev;
                count--;
            }
            return current;
        }
    }

    set(idx, val) {
        let foundNode = this.get(idx);
        if (foundNode !== null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(idx, val) {
        const value = new Node(val);
        if (idx < 0 || idx > this.length) {
            return false;
        } else if (idx === 0) {
            return !!this.unshift(value);
        } else if (idx === this.length) {
            return !!this.push(value);
        } else {
            let prevNode = this.get(idx - 1);
            let temp = prevNode.next;
            prevNode.next = value;
            value.prev = prevNode;
            value.next = temp;
            temp.prev = value;
            this.length++;
            return true;
        }
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        } else if (idx === 0) {
            return this.shift();
        } else if (idx === this.length - 1) {
            return this.pop();
        } else {
            let current = this.get(idx);
            let temp = current.next;
            current.prev.next = temp;
            temp.prev = current.prev;

            current.prev = null;
            current.next = null;
            this.length--;
            return current;
        }
    }
}

