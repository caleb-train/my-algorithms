export class Node {
  constructor(val) {
    this.child = val;
    this.next = null;
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let pre = current;
    while (current) {
      if (!current.next) {
        const end = pre.next;
        pre.next = null;
        this.tail = pre;
        this.length--;
        if (this.length === 0) this.head = this.tail = null;

        return end;
      }
      pre = current;
      current = current.next;
    }
  }

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) this.head = this.tail = null;

    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) return undefined;
    let count = 0;
    let currNode = this.head;
    while (count !== pos) {
      currNode = currNode.next;
      count++;
    }
    return currNode;
  }

  set(ind, val) {
    let node = this.get(ind);
    if (node) {
      node.child = val;
      return true;
    }
    return false;
  }

  insert(ind, val) {
    if (ind < 0 || ind > this.length) return false;
    if (ind === this.length) return list.push(val);
    if (ind === 0) return list.unshift(val);
    let prevNode = this.get(ind - 1);
    if (prevNode) {
      const newNode = new Node(val);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
      return true;
    }
    return false;
  }

  remove(ind) {
    if (ind < 0 || ind >= this.length) return false;
    if (ind === 0) return list.shift();
    let prevNode = this.get(ind - 1);
    if (prevNode) {
      prevNode.next = prevNode.next.next;
      this.length--;
      return this;
    }
    return false;
  }

  reverse() {
    let currNode = this.head;
    this.head = this.tail;
    this.tail = currNode;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = currNode.next;
      currNode.next = prev;
      prev = currNode;
      currNode = next;
    }
  }
}

const list = new SinglyLinkedList();
list.push(23);
list.push(34);
list.push(4);
console.log(list.shift());
console.log(list.unshift(3));
console.log(list.get(0));
console.log(list.insert(2, 90));
console.log(list.remove(3));
console.log(list);
