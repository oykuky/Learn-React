import './App.css';
import {} from 'bootstrap';
import {Container,Col,Row} from 'reactstrap';
import { useState } from 'react';
import Header  from './components/Header';
import List2 from './components/List2';
import List1 from './components/List1';
import User from './components/User';
import UseEffect from './components/UseEffect';


const nameSur = {
  name: 'oyku' ,
  surname: 'kaya'
};

const friends = [
{ id: 1,
  name : "deniz"
},
{ id: 2,
  name : "merve "
},
{ id: 3,
  name : "pınar "
},
];

function App() {
  const [name , setName] = useState("öykü");
  const [surname , setSurname] = useState("Kaya");
  const [newFriends, setNewFriends] = useState(['ayşe','mine','kasım']);
  const [address, setAddress] = useState({title: 'İzmir' , zip : 2345});
  const [isVisible,setIsVisible] = useState(true);
  return (
    
    <div>
       
       {/* state kullanımı */}
      <nav className='m-5 text-center'>
        <h2 className=" text-primary">{name} {surname}</h2>
        <button className='m-5' onClick={() => setName("Kaya")}>Change the Name</button>
        <button className='m-5' onClick={() => setSurname("Deniz")}>Change the Surname</button>
      </nav>
      <hr/>
      <br></br>
      <div className='text-center'>
        {/* set edilen fonksiyonda array tipi olmalı ...array ile önceki array korunur ekleme işlemi yapılır */}
        <button className='m-5' onClick={() => setNewFriends([...newFriends,'fatma'])}>Arkadaş Ekle</button> 
        {
          newFriends.map((p) =>  (<div className='m-2 text-center'>{p}</div>) )
        }

        {/* object state */}
        <p className='m-5 text-primary'>{address.title} {address.zip} </p>
        <button onClick={() => setAddress({...address, title : 'Ankara'})} >Change</button>
      </div>

      <Container>
      <hr/>
        <Row className='m-5 text-center'>
        <Header/>
            <h4>Benim adım {nameSur.name} soyadım {nameSur.surname}</h4>
        </Row>
        <hr/>
        <Row className='m-4 text-center'>
          <Col xs= "3">
            <List1 title = "list1 "/>
          </Col> 
          <Col xs= "9">
          <List2 title = "list2 "/>
          </Col> 
        </Row>

        <Row className='text-center'>
          <User
          name = "Öykü"
          isLoggedin = {true}
          age = {22}
          friends = {friends}
          />

        </Row>
      </Container>
      <Container>
        {/* unmounted component */}
        <Row className='m-5 text-danger'>
          {/* isVisible true ise component gösterilir değilse gösterilmez */}
          {isVisible &&  <UseEffect/>}
          <button className='m-5 text-danger' onClick={() => setIsVisible(!isVisible)}>Toggle</button>
          {/* toggle butonu ile componenti kaldırırız görünürlüğü değişir */}
        </Row>
      </Container>
        
    </div>
  )
}

export default App;




// rfce component kısayol