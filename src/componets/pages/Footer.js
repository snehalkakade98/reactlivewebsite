import React from 'react'
import logo from './assets/images/logo.png';


const Footer = () => {
  return (
    <>
       <footer className='footer container-fluid'>
           <div className='col-12'>
               <div className='row'>
                   <div className='col-12 col-lg-4 pl-2'>
                    <div className='img mx-auto text-center pb-2'>
                        <img src={logo} alt="" height={60} width={100} /></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perferendis ipsa adipisci dolorum quisquam tempora inventore quaerat aut similique voluptates, molestiae quidem quam velit maiores magnam, commodi dignissimos sint? Ipsa.</p>
                       <p>Contat:9854744551222</p>
                       <p>Email:abc@gmail.com</p>
                    </div>
                

                   <div className='col-12  col-lg-4 text-center links pt-4 text-warning'>
                       
                       <h2>Links</h2>
                       <ul>
                           <li>Home</li>
                           <li>About</li>

                           <li>services</li>
                           <li>contact</li>
                       </ul>
                   </div>

                   <div className='col-12  col-lg-4 text-center links pt-4  text-warning'>
                       
                       <h2>Products</h2>
                       <ul>
                           <li>Onian</li>
                           <li>Tomato</li>

                           <li>services</li>
                           <li>contact</li>
                       </ul>
                   </div>

                  
               </div>
           </div>
        
       </footer>
       <div className='container-fluid  py-2 px-5 foot' style={{background:"#b1acac"}}>
           <div className='d-flex justify-content-between text-white'>
               <p>comtanse technology pvt.ltd</p>
               <p>All Rights Reverseved</p>
           </div>
       </div>
    </>
  )
}

export default Footer
