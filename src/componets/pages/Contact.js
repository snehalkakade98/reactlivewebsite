import React from 'react'
import { useState } from 'react'

const Contact = () => {
 
  const[data, setData]= useState({
    username:"",
    mobileno:"",
    email:"",
    feedback:"",
  }); 

  const InputEvent =(event)=>{
    //all form name and value attribute get event.target
    const { name,value }= event.target;

    setData((preVal)=>{
      return{
         ...preVal,
         [name]:value,
      };
    });
  }
  const formSubmit = (e)=>{
     e.preventDefault();
     alert(`my name ${data.username}.my mobile no ${data.mobileno}.email is ${data.email}.feedback is ${data.feedback}`);
  };
  return (
    <div>
       <div className='container contactus py-4'>
         <div className='row'>
           <div className='col-12 col-lg-6 pt-5'>
            <div className='row'>
              <div className='col-12 col-lg-6 mt-2'>
                <div className='card p-2 shadow text-center'>
                <h4>Address</h4>
                <p> 2107, ‘C’ Ward, Main Road,
                                        Opp. Sangaokar Jumbo Xerox,
                                        Bhausingaji Road, Kolhapur - 416002</p>
                </div>
              </div>
              <div className='col-12 col-lg-6 mt-2'>
                <div className='card p-2 shadow text-center'>
                <h4>Call Us</h4>
                <p><a href="#">(0231) 2547776 / 2541742</a></p>
                </div>
              </div>
              <div className='col-12 col-lg-6 mt-2'>
                <div className='card p-2 shadow text-center'>
                <h4>Mail Us</h4>
                <p><a href="#">abc@gmail.com</a></p>
                </div>
              </div>
              <div className='col-12 col-lg-6 mt-2'>
                <div className='card p-2 shadow text-center'>
                <h4>Shop Time</h4>
                <p>Mon - Sat: 09AM to 05 PM</p>
                <p>Sunday - Close</p>
                </div>
              </div>
            </div>
           </div>

         
           <div className='col-12 col-lg-6'>
             <form onSubmit={formSubmit}>
           <div class="mb-3 mt-3">
    <label class="form-label">Username</label>
    <input type="text" class="form-control" 
    id="username" 
    placeholder="Enter username" 
    name="username" value={data.username}
    onChange={InputEvent}/>
  </div>

  <div class="mb-3 mt-3">
    <label class="form-label">Mobile No</label>
    <input type="number" class="form-control" 
    id="mobileno" 
    placeholder="Enter mobileno" 
    name="mobileno" value={data.mobileno}
    onChange={InputEvent}/>
  </div>

  <div class="mb-3 mt-3">
    <label  class="form-label">Email</label>
    <input type="email" class="form-control" 
    id="email" 
    placeholder="Enter email" 
    name="email"
    value={data.email}
    onChange={InputEvent}/>
  </div>

  <div class="mb-3 mt-3">
      <label >Feedback</label>
      <textarea type="text" class="form-control" rows="5" 
      id="feedback" 
      name="feedback"
      value={data.feedback}
      onChange={InputEvent}>

      </textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>

 

         </div>
       </div>
    </div>
  )
}

export default Contact
