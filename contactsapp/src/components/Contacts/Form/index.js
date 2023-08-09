import React from "react";
import {useState,useEffect} from "react"

function Form({addContact , contacts}) {
    //form bir nesne değişkenidir
    const [form ,setForm] = useState({fullName: "" , phone_number: ""});

    //inputtaki değişiklikleri izler, e.target.name ile hangi input alanının değiştiği belirlenir                                              
    const onChangeInput = (e) => {
        setForm({...form , [e.target.name] : e.target.value})
        //değerler alınarak form state i güncellenir 
    }
    //bu fonks. form gönderildiğinde çalışır
    const onSubmit = (e) => {
        e.preventDefault(); //sayfa yenilemesinin iptali, ilgili elementin tarayıcı tarafından o an yaptığı varsayılan işlemi engellemeye yarar
        if(form.fullName === "" || form.phone_number === "") {return false;}
       
        addContact([...contacts, form]); //array e eski verileri koruyarak atama yapıldı,iletişim kişilerinin listesini güncellemek için kullanılır.
        setForm({fullName : "", phone_number :""}) //form içini temizleme
    }
    return (
        <form onSubmit={onSubmit} >
        <div>
           <div className="mb-3">
            <input  name="fullName" placeholder="Full Name" className="bg-warning" value={form.fullName} onChange={onChangeInput} />
           </div>
           <div>
           <input  name="phone_number" placeholder="Phone Number"  className="bg-warning" value={form.phone_number} onChange={onChangeInput} />
           </div>
           <button className="m-3 btn btn-success"> ADD </button>
           {/* Bu butona tıklanınca onSubmit fonksiyonu çağrılır. */}
        </div>
        </form>
        //Form içindeki input alanları, form state'inin ilgili değerleriyle eşleştirilir ve onChangeInput fonksiyonu değişiklikleri yakalar.
    );
}

export default Form

// Girilen bilgiler form state'inde saklanır ve eklenen kişiler contacts state'ine eklenir.