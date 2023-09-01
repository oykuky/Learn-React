import React from 'react'
import { useState } from 'react'


function Header({todo,setTodo}) {

    const [value , setValue ] = useState(""); //value kullanıcının girdiği metni tutar
    const [id, setId] = useState(0); //liste ögelerinin idisini tutar
    const onchange = (e) => {
      setValue(e.target.value)
    }
    const handleKeyDown = (e) => {
      if (e.key === "Enter"){
        e.preventDefault();
        setId(id + 1)
        setTodo([...todo , {id : id , text :value , completed : false }])
        setValue("")
      }

    }
  

  return (
    <div>
    <header class='header'>
      <h1>todos</h1>
      <form>
        <input class="new-todo" 
        placeholder="What needs to be done?" 
        onChange={onchange}
        onKeyDown={handleKeyDown}
        value={value}
        autoFocus
        />
      </form>
    </header>
    </div>
  )
}

export default Header