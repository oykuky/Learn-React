import React from 'react'
import { useState } from 'react'

function Newtodo({todo ,setTodo}) {

   function DeleteClick (id){
    
    }




  return (
    <div class = "">
        <ul class = "todo-list">

        </ul>

       <footer class="footer">
		<span class="todo-count">
			<strong>2</strong>
			items left
		</span>

		<ul class="filters">
			<li>
				<a href="#/" class="selected">All</a>
			</li>
			<li>
				<a href="#/">Active</a>
			</li>
			<li>
				<a href="#/">Completed</a>
			</li>
		</ul>

		<button class="clear-completed">
			Clear completed
		</button>
	</footer>
      


    </div>
  )
}

export default Newtodo