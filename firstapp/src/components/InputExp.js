import {useState} from 'react'
import { Input } from 'reactstrap';


function InputExp() {
    const [name ,setName] = useState('')

  return (
    <div> 
        Please enter name <br/>
        <Input value = {name} onChange={(event) => setName(event.target.value)}/>
        {name}
    </div>
  )
}

export default InputExp;