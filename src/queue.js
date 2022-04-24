const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class QueueElement {
	constructor(x) {
		this.value = x;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.firstElement = null;
		this.lastElement = null;
	}

	enqueue(value) {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		//this.firstElement = this.insertElement(this.firstElement, value)
		if (!this.firstElement) {
			this.firstElement = new QueueElement(value);
		} else if (!this.lastElement) {
			let newElement = new QueueElement(value);
			this.firstElement.next = newElement;
			this.lastElement = newElement;
		} else {
			let newElement = new QueueElement(value);
			this.lastElement.next = newElement;
			this.lastElement = newElement;

		}
	}

	dequeue() {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here

		if (!this.firstElement) {
			return undefined;
		}
		let retElement = this.firstElement;
		if (this.firstElement.next) {
			this.firstElement = this.firstElement.next;
		} else {
			this.firstElement = null;
		}
		return retElement.value;
	}

	getUnderlyingList() {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		return this.firstElement;
	}
}

module.exports = {
	Queue
};


const queue = new Queue();

queue.enqueue(1); // adds the element to the queue
queue.enqueue(3); // adds the element to the queue
console.log(queue.dequeue());
console.log(queue.getUnderlyingList());
console.log(queue.dequeue()); // returns the top element from queue and deletes it, returns 1
console.log(queue.getUnderlyingList());// returns { value: 3, next: null }