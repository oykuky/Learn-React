import React from 'react'
import { useEffect, useState } from 'react'

function Fetch() {
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data)=>setUsers(data))
        .finally(() =>setIsLoading(false))
    },[])

    const [users ,setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='mt-5'>USERS
      <div className='mt-3'>

      {
            isLoading  && <div className='mb-2 text-warning'>Loading...</div>
      }

      {
            users.map((user) => 
            <div key={user.id}>{user.name}</div>
            )
      }

      </div> 
       
    </div>
  )
}

export default Fetch