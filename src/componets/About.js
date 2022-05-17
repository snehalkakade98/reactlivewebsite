import React from 'react'
import about1 from '../assets/images/about-right.png';


const About = () => {
  return (
    <div className='container mt-3 py-5'>
     <div className='row'>
        <div className='col-12 col-lg-6 aboutus'>
        <span class="head">परिचय</span>
         <br></br>  <br></br>
         <h3 class="mt-0 heading"> We have a lot of great new things for you but overall, the Farm Program we created in 2014 will remain. ...!</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Debitis adipisci consequatur, libero quod nihil ex laborum exercitationem harum 
            amet beatae sed expedita dignissimos ipsam ut voluptatum dicta cupiditate 
            perferendis eligendi!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Debitis adipisci consequatur, libero quod nihil ex laborum exercitationem harum 
            amet beatae sed expedita dignissimos ipsam ut voluptatum dicta cupiditate 
            perferendis eligendi.. Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Debitis adipisci consequatur, libero quod nihil ex laborum exercitationem harum 
            amet beatae sed expedita dignissimos ipsam ut voluptatum dicta cupiditate 
            perferendis eligendi Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Debitis adipisci consequatur, libero quod nihil ex laborum exercitationem harum 
            amet beatae sed expedita dignissimos ipsam ut voluptatum dicta cupiditate 
            perferendis eligendi
            </p>
          
        </div>

        <div className='col-12 col-lg-6'>
          <img src={about1} alt="" className='aboutimg' />
          
        </div>
       </div>      
    </div>
  )
}

export default About
