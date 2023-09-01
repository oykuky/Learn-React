import { useState } from 'react'
import Header from './Header'
import Newtodo from './Newtodo'
import Footer from './Footer'
import "../App.css"
import '../index.css'

//TÜM COMPONENTTLER BURADA TOPLANOCAK 

function Index() {
  const [todo , setTodo] = useState([]);

  return (
    <div>
      <section class='todoapp'>
        <Header setTodo = {setTodo} todo = {todo} />

          <section class='main'>
            <input class="toggle-all" type="checkbox" />
            <label for="toggle-all">
              Mark all as complete
            </label>

            <ul class="todo-list">
                <li class="completed">
                  <div class="view">
                    <input class="toggle" type="checkbox" />
                    <label>Learn JavaScript</label>
                    <button class="destroy"></button>
                  </div>
                </li>
                <li>
                  <div class="view">
                    <input class="toggle" type="checkbox" />
                    <label>Learn React</label>
                    <button class="destroy"></button>
                  </div>
                </li>
                <li>
                  <div class="view">
                    <input class="toggle" type="checkbox" />
                    <label>Have a life!</label>
                    <button class="destroy"></button>
                  </div>
                </li>
            </ul>
            <Newtodo todo = {todo} setTodo = {setTodo} />
          </section>
      </section>
        <Footer/>

    </div>
   
  
  )
}

export default Index