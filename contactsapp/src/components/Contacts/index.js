import React, { useEffect } from 'react'
import List from './List'
import Form from './Form'
import { useState } from 'react'
import './style.css'
import {IntlProvider,FormattedMessage} from "react-intl"
import LangButton from '../LangButton';


//büyük component
function Contacts() {
  const isLocale = localStorage.getItem('locale');
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale,setLocale] = useState(defaultLocale);
  const message ={
    'tr-TR':{
      title1: "Rehber Uygulaması"
    } ,
     'en-US' : {
       title1: "Contacts App"
   }
   }
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
        localStorage.setItem('locale',locale)
    },[contacts,locale]);

  return (
   <IntlProvider messages={message[locale]}>
     <div id='container'>
     <LangButton setLocale={setLocale}/>
      <FormattedMessage id="title1"/>
    
        <Form addContact={setContacts} contacts = {contacts} />
        <List listofcontacts = {contacts}/>

        {/* form bileşeni yeni kişilerin eklendiği component'dir
        'addContact' propu ile ile yeni kişileri eklemek için kullanılan işlevi 'setContacts' 
        alır ve mevcut listeyi 'contacts' görüntülemek için 'contacts' propunu alır. */}
    </div>
   </IntlProvider>
   

  )
}

export default Contacts

//state, bir bileşenin durumunu tutan ve bu durumun güncellenebileceği bir nesnedir.