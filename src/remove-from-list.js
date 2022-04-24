const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * 
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, value) {
	//throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
	//конец вернем ноду или null если совпало значение
	if (!list.next) {
		if (list.value === value) {
			return null;
		}
		return list;
	}
	if (list.value === value) {
		//если значение совпало перепишем указатель на следующюу ноду и пойдем смотреть дальше
		list = removeKFromList(list.next, value); // если значения подряд
		list.next = removeKFromList(list.next, value);
		return list;
	} else {
		//если значение гн совпало пойдем смотреть дальше
		list.next = removeKFromList(list.next, value);
		return list;
	};
}

module.exports = {
	removeKFromList
};

//console.log(removeKFromList([3, 1, 2, 3, 4, 5], 3));
class ListNode {
	constructor(x) {
		this.value = x;
		this.next = null;
	}
}
function convertArrayToList(arr) {
	return arr.reverse().reduce((acc, cur) => {
		if (acc) {
			const node = new ListNode(cur);
			node.next = acc;
			return node;
		}

		return new ListNode(cur);
	}, null);
}
const initial = convertArrayToList([1, 2, 3, 3, 4, 5]);

//console.log(removeKFromList(initial, 3));

let tt = removeKFromList(initial, 3);

console.log(tt);