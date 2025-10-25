// DOM stands for Document Object Model.
// 👉 It is a programming interface that represents an HTML or XML document as a tree structure.
// Each element (like <div>, <p>, <h1>, etc.) becomes a node/object in this tree.
// Using JavaScript, we can access, change, add, or delete these elements through the DOM.

//OR
//The dom represents an html document as a tree of nodes.every part of the document-the elements, attribute, text, comments- is a 
//node in the treee.
//Document Node: the root of the tree,represting the entire html document
//element node:represents html elements(eg-<p>,<div>,<h1>).
//text node: represents the actual text content witin elements
//attribute nodes: represents the attribute of an html elements.
//comment node: 


/*TYPES OF DOM NODES:
every node in the dom has a node type property, which is an interger indicating the type of the
node.some common node types indlude:

-->1: ELEMENT_NODE(EG,<p>,<div>)
-->2: TEXT_NODE(The actual text inside an elememt or attribute)
-->8: COMMENT_NODE(a comment in the html)
-->9:DOCUMENT_NODE(the root document object)
-->10:DOCUMENT_TYPE_NODE(EG:<!DOCTYPE html>)
-->9:DOCUMENT_FRAGMENT_NODE(a light weight container for nodes)*/

//example with an element
// let heading=document.createElement('h1');//creates an <h1> element node
// console.log('Node type of h1:', heading.nodeType)

// //example with an text node
// let text=document.createTextNode("hello");
// console.log('node type of text:',text.nodeType);

let head1=document.getElementById('head-1');
head1.innerText='hello'
let div1=document.getElementById('div-1');
//console.log(div1);
div1.innerHTML='<p>this is para </p>';

let input1=document.getElementById('input-1');
console.log(input1.value);