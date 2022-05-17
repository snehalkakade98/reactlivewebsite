import React from 'react'

const ServicesCard = (props) => {
  return (
    <>
       <div className=" col-12 col-md-4 col-lg-4 col-sm-12 mt-2 ">
      <div className="main_services">
        <div className="services">
          <div className="services-logo">
            <i className="fas fa-building " style={{color: "#1b94eb"}}>{props.icon}</i>
          </div>
          <h4>{props.title}</h4>
          <p className="text">{props.para}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default ServicesCard
