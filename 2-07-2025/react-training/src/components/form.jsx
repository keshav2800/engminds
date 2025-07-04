import React from 'react'
import { useState } from 'react'

export default function Form() {
    const [user, setUser] = useState({
        username: "",
        useremail: "",
    })

    function handleChange(e){
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        // console.log("name",e.target.name);
        // console.log("value",e.target.value);    
    }

    function handleSubmit(e){
        e.preventDefault();
        alert(`your form is submitted here is the details ${user.username} and ${user.useremail}`)
        console.log(user);
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        {/* console.log(user); */}
     <div>Name: <input type="text" placeholder='enter your name' id='username' name='username' onChange={handleChange} /></div>
     <div> email : <input type="email" placeholder='enter your email' id='email' name='useremail'onChange={handleChange} /></div>
     <button type='submit'>Submit</button>
    </form>
    </>
   
  )
}