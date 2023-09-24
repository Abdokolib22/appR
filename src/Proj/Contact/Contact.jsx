import React from 'react'

export default function Contact() {
  return <>
  <div className="form h-100">
    <div className="container my-5 py-5 h-100">
    <form className='w-75 mx-auto py-5'>
      <input type="text"  placeholder='Username' className='form-control mb-3 border-0'/>
      <input type="number"  placeholder='UserAge' className='form-control mb-3 border-0'/>
      <input type="email"  placeholder='Useremail' className='form-control mb-3 border-0'/>
      <input type="password"  placeholder='Userpassword' className='form-control mb-3 border-0'/>
      <button type="button " className='btn btn-info'>Submit</button>
</form>
    </div>
 
  </div>
  
  
  </>
}
