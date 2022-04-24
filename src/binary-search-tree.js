const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
	//сами Ноды
	constructor(data) {
		this.data = data; // node value
		this.left = null;   // left node child reference
		this.right = null; // right node child reference
	}
}

class BinarySearchTree {
	constructor() {
		this.rootMain = null;
	}
	//добавляем Ноду
	insertNode(node, newNode) {
		//тут просто
		//значения меньше значение текущей Ноды 
		if (newNode.data < node.data) {
			//пусто пишем туда
			if (node.left === null) {
				node.left = newNode;
			} else {
				//нет берем в анализ левую Ноду
				this.insertNode(node.left, newNode);
			}
		} else {
			//все тоже для правой
			if (node.right === null) {
				node.right = newNode;
			} else {
				this.insertNode(node.right, newNode);
			}
		}
	}

	add(data) {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		//первое добавление создание корня в this.rootMain
		let newNode = new Node(data);
		if (this.rootMain === null) {
			this.rootMain = newNode;
		} else {
			//потом создаем Node дерева
			this.insertNode(this.rootMain, newNode); // helper method below
		}
		//console.log(data);
		return 1;
	}
	root() {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		//console.log(1);
		return this.rootMain;
	}
	//поиск ноды с нужным значеним
	search(node, data) {
		//если пусто то пусто
		if (node === null) {
			return null;
		} else if (data < node.data) {
			//если значение меньше значения Ноды берем левую ноду
			return this.search(node.left, data);
		} else if (data > node.data) {
			//если значение больше значения Ноды берем правую ноду
			return this.search(node.right, data);
		} else {
			//если равно то нашли искомое
			return node;
		}
	}

	has(data) {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		//вызлв поиска по начиная с корня
		const returnValue = this.search(this.rootMain, data);
		//console.log(returnValue);
		if (returnValue) {
			return true;
		} else {
			return false;
		}
	}
	//ишем значение
	find(data) {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		//вызлв поиска по начиная с корня
		const returnValue = this.search(this.rootMain, data);
		//console.log(returnValue);
		return returnValue;
	}
	//удаление Ноды с перестройкой дерева
	removeNode(node, data) {
		if (node === null) {
			//значения нет ничего не делаем
			return null;
		} else if (data < node.data) {
			//как обычно значение меньше идем влево, берем левую Ноду и ишем там
			node.left = this.removeNode(node.left, data);
			return node;
		} else if (data > node.data) {
			//значение меньше идем вправо, берем правую Ноду и ишем там
			node.right = this.removeNode(node.right, data);
			return node;
		} else {
			//нашли, надо перестроить дерево
			if (node.left === null && node.right === null) {
				//у Ноды нет узлов удаляем ее передвая null
				node = null;
				return node;
			}
			if (node.left === null) {
				//у Ноды есть только левый узел, поднимем его наверх
				node = node.right;
				return node;
			} else if (node.right === null) {
				//у Ноды есть только правый узел, поднимем его наверх
				node = node.left;
				return node;
			}
			//у Ноды есть оба узла
			//тут правило что берем правую Ноду с минимальным значеним и поднимаем наверх и записываем, 
			//а в ее правую ветку подветку удаляемой ноды, удалив поднимаемый узел
			let newNode = this.minNode(node.right);
			node.data = newNode.data;
			node.right = this.removeNode(node.right, newNode.data);
			return node;
		}
	}
	remove(data) {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here

		if (this.rootMain === data) {
			this.rootMain = null;
			this.rootMain.left = null;
			this.rootMain.right = null;
			return;
		} else {
			//надо и корень обновлять
			this.rootMain = this.removeNode(this.rootMain, data);
			return;
		}
	}
	//идем всегда влево там минимум
	min() {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		let returnValue = this.rootMain;
		while (returnValue.left) {
			returnValue = returnValue.left;
		}
		return returnValue.data;
	}
	//идем всегда влево там минимум Нода, надо для удаления
	minNode(node) {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		let returnValue = node;
		while (returnValue.left) {
			returnValue = returnValue.left;
		}
		return returnValue;
	}
	//вправо всегда максимальная Нода
	max() {
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
		let returnValue = this.rootMain;
		while (returnValue.right) {
			returnValue = returnValue.right;
		}
		return returnValue.data
	}
}

module.exports = {
	BinarySearchTree
};

const tree = new BinarySearchTree();

tree.add(9);
console.log(tree);
tree.add(6);
console.log(tree);

tree.remove(9);
console.log(tree);

// tree.add(9);
// tree.add(14);
// tree.add(54);
// tree.add(2);
// tree.add(6);
// tree.add(8);
// tree.add(31);
// tree.add(1);
// tree.remove(36);
// tree.remove(6);
// tree.remove(2);
// tree.root().data;// => 1;
// //console.log(tree.root().data);
// tree.has(5); //=> trye
// tree.has(6); //=> false
// console.log(tree.has(5));
// console.log(tree.has(6));
// console.log(tree.find(3));
// // tree.min();// => 1

// // tree.max();// => 5
// console.log(tree.min());
// console.log(tree.max());
// console.log(tree.has(5));
// console.log(tree.find(3));
// // tree.remove(2);
// // console.log(tree.has(5));
// // console.log(tree.find(3));
// // tree.has(5); //=> false

// tree.max();// => 4