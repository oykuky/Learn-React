import { useState } from 'react'
import Header from './Header'
import Newtodo from './Newtodo'
import Footer from './Footer'
import "../App.css"
import '../index.css'


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
            <Newtodo todo = {todo} setTodo = {setTodo} />
          </section>
      </section>
        <Footer/>

    </div>
   
  
  )
}

export default Index