import React, { useEffect } from 'react'
import List from './List'
import Form from './Form'
import { useState } from 'react'
import './style.css'


//büyük component
function Contacts() {
    const [contacts, setContacts] = useState([
      {fullName : 'Öykü', phone_number : '0506456'}, 
      {fullName : 'Övgü', phone_number : '0554667'} 
    ]); //iletişim bilgileri için bir dizi state

    // Bu hook ile kişilerin güncel durumu yazdırılıyor , 'contacts' dizisi değiştiğinde useEffect içindeki fonk. tetiklenir
    // bileşen her render edildiğinde çalışır 
    //fakat sadece 'contacts' state'i değiştiğinde çalışmasını istiyoruz
    //bu yüzden useEffect içine [contacts] bağımlılık dizisini ekliyoruz
    useEffect(()=>{
        console.log(contacts)
    },[contacts]);

  return (
    <div id='container'>
      <h2>Contacts App</h2>
        <Form addContact={setContacts} contacts = {contacts} />
        <List listofcontacts = {contacts}/>

        {/* form bileşeni yeni kişilerin eklendiği component'dir
        'addContact' propu ile ile yeni kişileri eklemek için kullanılan işlevi 'setContacts' 
        alır ve mevcut listeyi 'contacts' görüntülemek için 'contacts' propunu alır. */}
    </div>
    

  )
}

export default Contacts

//state, bir bileşenin durumunu tutan ve bu durumun güncellenebileceği bir nesnedir.