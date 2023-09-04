import React from 'react'
import { useEffect, useState } from 'react'

function Fetch() {
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data)=>setUsers(data))
    },[])

    const [users ,setUsers] = useState([]);

  return (
    <div className='mt-5'>USERS
      <div className='mt-3'>
      {
            users.map((user) => <div key={user.id}>{user.name}</div>)
      }

      </div> 
       
    </div>
  )
}

export default Fetch