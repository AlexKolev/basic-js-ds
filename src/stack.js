const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class StackElement {
	constructor(x) {
		this.value = x;
		//this.next = null;
		this.prev = null;
	}
}
class Stack {
	constructor() {
		this.currentElement = null;
	}
	push(element) {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		if (!this.currentElement) {
			this.currentElement = new StackElement(element);
		} else {
			let newElement = new StackElement(element);
			newElement.prev = this.currentElement;
			this.currentElement = newElement;
		}
	}

	pop() {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		if (!this.currentElement) {
			return undefined;
		}
		let retElement = this.currentElement;
		if (this.currentElement.prev) {
			this.currentElement = this.currentElement.prev;
		}
		return retElement.value;
	}

	peek() {
		return this.currentElement.value;
	}
}

module.exports = {
	Stack
};


const stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(7);
console.log(stack.peek());//, 7);
console.log(stack.pop());//, 7);
console.log(stack.peek());//, 6);



// const stack = new Stack();

// stack.push(1); // adds the element to the stack
// console.log(stack.peek()); // returns the peek, but doesn't delete it, returns 1
// //stack.pop(); // returns the top element from stack and deletes it, returns 1
// console.log(stack.pop());
// console.log(stack.pop());
// //stack.pop(); // undefined