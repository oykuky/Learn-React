import React from 'react'
import {ListGroup,ListGroupItem} from 'reactstrap'

//PROPS SÜSLÜ PARANTEZLER İÇİNDE TANIMLA !!!!!!!!!
function List({listofcontacts}) {
   // props 'u map ile kullanabilmek için bir array olmalı
  if (!Array.isArray(listofcontacts)) {
    return <div>Error: listofcontacts prop should be an array.</div>;
}
  return (
    <div className='m-5'>
        <h2>Contact List</h2>
           

        <ListGroup>
          {listofcontacts.map((p , index) => (
             <ListGroupItem key={index}>
              <p> {p.fullName}</p>
              <p> {p.phone_number}</p>
             </ListGroupItem>

          ))}
         
        </ListGroup>

    </div>
  )
}

export default List