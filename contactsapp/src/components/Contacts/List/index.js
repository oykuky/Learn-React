import {useState} from 'react'
import {ListGroup,ListGroupItem} from 'reactstrap'

//PROPS SÜSLÜ PARANTEZLER İÇİNDE TANIMLA !!!!!!!!!
function List({listofcontacts}) {
   // props 'u map ile kullanabilmek için bir array olmalı
  const [filterText,setFilterText] = useState('')

  const filtered = listofcontacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
     )
  })
  console.log(filtered)
  return (
    <div className='m-5'>
        <h2 className='text-success'>Contact List</h2>

        {/* filterText State'i: Bu state, kullanıcının filtreleme için yazdığı metni tutar
         Kullanıcının girdisi her değiştiğinde,bu state güncellenir.
        onChange Olayı: Kullanıcı herhangi bir giriş yaptığında, onChange olayı tetiklenir ve yeni değeri setFilterText işlevi ile filterText state'ine atanır. */}
        <input className='m-5' placeholder='Filter Contact List' value={filterText} onChange={(e) => setFilterText(e.target.value)} />

        <ListGroup className='m-5'>

          {filtered.map((p , index) => (
             <ListGroupItem key={index} className='text-primary'>
              <p> Name : {p.fullName} <br/> Phone Number : {p.phone_number}</p>
             </ListGroupItem>
           ))}      
        </ListGroup>

    </div>
  )
}

export default List