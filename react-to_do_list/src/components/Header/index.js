import React from 'react'
import { useState } from 'react'


function Header({todo,setTodo}) {

    const [value , setValue ] = useState(""); //value kullanıcının girdiği metni tutar
    const [id, setId] = useState(0); //liste ögelerinin id'sini tutar
    //kullanıcının metin girdisini takip eder
    const onchange = (e) => {
      setValue(e.target.value)
    }
    // Klavyeden Enter tuşuna basıldığında çalışan bir olay işleyicisi tanımlanır
    const handleKeyDown = (e) => {
      if (e.key === "Enter"){
        e.preventDefault(); // Sayfanın varsayılan davranışını önle
        setId(id + 1)
        setTodo([...todo , {id : id , text : value , completed : false }]) // Todo listesine yeni bir öğe eklenir
        setValue(""); // Input değeri sıfırlannır

      }

    }
  

  return (
    <div>
    <header class='header'>
      <h1>todos</h1>
      <form>
        <input class="new-todo" 
        placeholder="What needs to be done?" 
        onKeyDown={handleKeyDown}
        onChange={onchange}
        value={value}
        autoFocus
        />
      </form>
    </header>
    </div>
  )
}

export default Header