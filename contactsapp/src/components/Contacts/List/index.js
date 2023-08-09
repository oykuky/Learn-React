import {useState} from 'react'
import {ListGroup,ListGroupItem} from 'reactstrap'

//PROPS SÜSLÜ PARANTEZLER İÇİNDE TANIMLA !!!!!!!!!
function List({listofcontacts}) {
   // props 'u map ile kullanabilmek için bir array olmalı
   //filterText kullanıcının girdiği filtre metnidir.
  const [filterText,setFilterText] = useState('')

  //item her bir kişi
  // Object.keys(item) ifadesi,kişinin tüm özelliklerini bir dizi olarak döndürür 
  //Bu, kişinin içerdiği tüm özellikleri almak için kullanılır
  //some fonksiyonu, belirli bir koşulu en az bir kez sağlayan öğe varsa true, aksi takdirde false döndürür
  //some her kişinin tüm özellikleri (key) üzerinde gezinerek, filtre metni (filterText) içeren bir öğe olup olmadığını kontrol eder.

  const filtered = listofcontacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
     )
  })
 //item[key]:kişinin belirli bir özelliğine erişim sağlar
 //includes fonksiyonu yalnızca dizeler üzerinde çalışır o yüzden toString kullanılır
 //.includes(filterText.toLowerCase()): özelliğin içeriğinde (filterText) bulunup bulunmadığını kontrol eder
 //filterText içerikte bulunuyorsa true, bulunmuyorsa false döner
  return (
    <div className='m-5'>
        <h2 className='text-success'>Contact List</h2>

        {/* filterText State'i: Bu state, kullanıcının filtreleme için yazdığı metni tutar
         Kullanıcının girdisi her değiştiğinde,bu state güncellenir.
        onChange Olayı: Kullanıcı herhangi bir giriş yaptığında, onChange olayı tetiklenir ve yeni değeri setFilterText işlevi ile filterText state'ine atanır. */}
        <input className='mb-4 mt-4' placeholder='Filter Contact List' value={filterText} onChange={(e) => setFilterText(e.target.value)} />

        <ListGroup >

          {filtered.map((p , index) => (
             <ListGroupItem id='listitem' key={index}>
              <span>{p.fullName} </span>
              <span> {p.phone_number}</span>
             </ListGroupItem>
           ))}      
        </ListGroup>

        <p> Total contacts : {filtered.length} </p>

    </div>
  )
}

export default List