import React from 'react'

import ServicesCard from './ServicesCard';
import ServicesArray from './ServicesArray';

const Services = () => {
  return (
    <div>
      <section className="services-section py-5" > 
      
      <div className="container">
  <div className="row">

   {
     ServicesArray.map((val,index)=>{
       return <ServicesCard key={index}
          title={val.title} para={val.para} icon={val.icon}
       />
     })
   }


  
  </div>
</div> 
</section>
    </div>
  )
}

export default Services
