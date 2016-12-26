'use strict';

function Node(parent, name) {
  this.name = name;
  if (parent) {
    this.parent = parent;
    parent[name] = this;
  }
}

let root = new Node(null, 'root');
let n1 = new Node(root, 'n1' );
let n2 = new Node(root, 'n2' );
let n3 = new Node(root, 'n3' );

console.dir(root, { depth: null });

function isEqual(obj1,obj2){ 

	for(let key in obj1){ 
		if(obj1[key]!=obj2[key])return false; 

	} 
	return true; 
		} 
		
//рекурсивно проходим по дереву, если находим равный объект возвращаем его 
function search(tree, query){ 

	for(let node in tree){ 
		if( typeof tree[node] === 'object'){ 

			if(isEqual(tree[node],query))return tree[node]; 

			var res = search(tree[node],query); 
		if(res)return res; 
		} 
	} 
}
