import React from 'react'
import { useState } from 'react'

function Newtodo({todo ,setTodo}) {

   function deleteClick (id){
		const rmvItem = todo.filter((todoItem) =>{
			return todoItem.id !== id
		}
		)
		setTodo(rmvItem)

		//Eşleşen bir id bulunursa, bu id ile eşleşmeyen todoItem'lar yeni bir dizi olan rmvItem içinde korunur
    }
	
	//todo dizisi map() fonksiyonu ile döngüye alınır
	// Eğer todo öğesinin id'si, parametre olarak gelen id'ye eşitse:
    //  Önceki todo öğesinin tamamlanma durumunu tersine çevirip yeni bir obje oluşturulur
	const changeCompleted =  (id) => {
		setTodo(
		  todo.map((todoItem) =>
			todoItem.id === id ? { ...todoItem, completed: !todoItem.completed } : todoItem
		  )
		);
	  };
	 // tamamlanmış ögeyi filtreden çıkararak sadece tamamlanmamış öğeleri tutarız
	const clearAllCompleted = () => {
		setTodo(todo.filter((todoItem => !todoItem.completed)))
	} 

	const [filter,setFilter] = useState('all');
	// Filtreleme düğmelerine tıklama işlemini yöneten bir işlev 
	const filterClick = (filter) => {
		setFilter(filter)
	}

	let filteredTodo = todo;
	if(filter === 'active') {
		filteredTodo = todo.filter(todoItem => !todoItem.completed)
	}
	else if (filter === 'completed'){
		filteredTodo = todo.filter(todoItem => todoItem.completed)
	}


  return (
    <div>
    <ul class = "todo-list"> 
	{ todo.map((todoItem) => 

    <li className = {`${todoItem.completed ? "completed" : ""}`} style = {{display: filter === 'all' || (filter === 'active' && !todoItem.completed) || (filter === 'completed' && todoItem.completed) ? 'block' : 'none'}} key={todoItem.id} >
		 <div class ="view">
				<input class="toggle" type="checkbox" checked ={todoItem.completed} onChange={() => changeCompleted(todoItem.id)} /> 
				<label>{todoItem.text}</label> 
				<button class="destroy" onClick={() => deleteClick(todoItem.id)}></button> 
		 </div>
		  </li> 
		  )}
	</ul>

    <footer class="footer">
		<span class="todo-count">
			<strong></strong>
			items left
		</span>

		<ul class="filters">
			<li>
				<a href="#/" onClick={() => filterClick('all')} class="selected">All</a>
			</li>
			<li>
				<a href="#/" onClick={() => filterClick('active')} >Active</a>
			</li>
			<li>
				<a href="#/" onClick={() => filterClick('completed')}>Completed</a>
			</li>
		</ul>

		<button onClick={clearAllCompleted} class="clear-completed">
			Clear completed
		</button>
	</footer>
    
    </div>
  )
}

export default Newtodo