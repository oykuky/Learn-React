import React from "react";
import {useState,useEffect} from "react"

function Form(addContact) {
    const [form ,setForm] = useState({fullName: "" , phone_number: ""});
    //inputtaki değişiklikler                                               
    const onChangeInput = (e) => {
        setForm({...form , [e.target.name] : e.target.value})
    }
    //form objesini yazdırma
    const onSubmit = (e) => {
        e.preventDefault(); //sayfa yenilemesinin iptali, ilgili elementin tarayıcı tarafından o an yaptığı varsayılan işlemi engellemeye yarar
        if(form.fullName === "" || form.phone_number === "") {return false;}
       
        addContact([...contacts, form]); //array e eski verileri koruyarak atama yapıldı
        console.log(form);
    }
    return (
        <form onSubmit={onSubmit} >
        <div className="m-5">
           <div className="m-5">
            <input  name="fullName" placeholder="Full Name" onChange={onChangeInput}/>
           </div>
           <div>
           <input  name="phone_number" placeholder="Phone Number" onChange={onChangeInput} />
           </div>
           <button className="m-3 btn btn-secondary"> ADD </button>
        </div>
        </form>
    );
}

export default Form