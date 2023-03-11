
// const taskBox = document.querySelector('.task-box');

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const taskInput = document.querySelector('.task-input');

todoButton.addEventListener('click', addTodo);
taskInput.addEventListener('click', deleteCheck);

function addTodo(event) {

	event.preventDefault();

	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');

	const newTodo = document.createElement('li');
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);

	const completedButton = document.createElement('button');
	completedButton.innerHTML = '<i class="fas fa-check"></i>'; 
	completedButton.classList.add('complete-btn'); 
	todoDiv.appendChild(completedButton); 

	const trashButton = document.createElement('button');
	trashButton.innerHTML = '<i class="fas fa-trash"></i>';
	trashButton.classList.add('trash-btn');
	todoDiv.appendChild(trashButton);

	if (!todoInput.value) {
		alert("Trebuie sa introduci un task!")
	}
	else {
		todoInput.value = '';
		taskInput.appendChild(todoDiv);
	}
}

function deleteCheck(e) {
	const item = e.target;
	if (item.classList[0] === 'trash-btn') {
		const todo = item.parentElement;
		todo.remove();
	}
	console.log(item.classList[0]);

	if (item.classList[0] === 'complete-btn') {
		const todo = item.parentElement;
		todo.classList.toggle('completed');
	}
}

function FilterComplete() {
	for (let i = 0; i < taskInput.children.length; i++) {
		if (taskInput.children[i].localName === 'div' && taskInput.children[i].className !== "todo completed") {
			taskInput.children[i].style.display = 'none';
		}
		else
			if (taskInput.children[i].localName === 'div' && taskInput.children[i].className === "todo completed") {
				taskInput.children[i].style.removeProperty('display'); 
			}
	}
}

function FilterActive() {
	for (let i = 0; i < taskInput.children.length; i++) {
		if (taskInput.children[i].localName === 'div' && taskInput.children[i].className === "todo completed") {
			taskInput.children[i].style.display = 'none';
		}
		else
			if (taskInput.children[i].localName === 'div' && taskInput.children[i].className === "todo") {
				taskInput.children[i].style.removeProperty('display'); 
			}
	}
}

function FilterAll() {
	for (let i = 0; i < taskInput.children.length; i++) {
		if (taskInput.children[i].localName === 'div') {
			taskInput.children[i].style.removeProperty('display');
		}
	}
}

function ClearCompleted() {
	for (let i = 0; i < taskInput.children.length; i++)
	if	(taskInput.children[i].className === "todo completed") {
		taskInput.removeChild(taskInput.children[i]);
		i--;   
	}
}

const allbutton = document.getElementById('all');
allbutton.addEventListener('click', FilterAll)

const activebutton = document.getElementById('active');
activebutton.addEventListener('click', FilterActive)

const completedbutton = document.getElementById('completed');
completedbutton.addEventListener('click', FilterComplete)

const clearbutton = document.getElementById('call');
clearbutton.addEventListener('click', ClearCompleted)


  

