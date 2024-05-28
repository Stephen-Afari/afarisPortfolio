import { useState } from "react";
import axios from "axios";
import './contactme.styles.scss'

export const ContactMe=()=>{
   const [name, setName]= useState('');
   const [phone, setPhone]= useState('');
   const [email, setEmail]= useState('');
   const [message, setMessage]= useState('')

const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
        await axios.post("/api/v1/send",{name,phone, email, message})
        alert('Email sent!!!');
//Clear the input fields
        setName('');
         setPhone('');
         setEmail('');
         setMessage('');

    }catch(error){

alert('Error sending Email')
    }
}
    return(
        <div className='formContainer'>
           <form onSubmit={handleSubmit}>
            <div className="nameAndPhoneInputs">
                <input className='nameInput' type="text" 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
                placeholder="Name"
                />
                <input className='phoneInput' type="tel"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                placeholder="Phone"
                />
</div>
<div className="emailAndTextAreaInputs">
<input className='emailInput' type="email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
placeholder="Email"
required
/>
<textarea className='textArea' 
value={message}
onChange={(e)=>setMessage(e.target.value)}
required
placeholder="Message"
/>
</div>

<button className='buttonIcon' type="submit">Send Email</button>
           </form>
  </div>
       
  
    )
}