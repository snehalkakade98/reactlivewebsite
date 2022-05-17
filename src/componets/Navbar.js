import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import './style.css';



const Navbar = () => {
  return (
    
  <>
  <header class="header px-5">
	<div className='d-flex justify-content-between text-white '>
		<h4 className='text-white'><marquee behavior="" direction="right">Welcome to our Organic</marquee></h4>
	</div>
</header>

<nav class="sticky1 navbar1">
	<div className='container'>
		<div className='row'>
			<div className='col-lg-4'>
			<div class="brand  display__logo">
		<a href="#top" class="nav__link"> <span >
			<img src={logo} alt="" />
			</span></a>
	</div>
			</div>

			<div className='col-lg-8 text-right d-flex justify-content-end'>
			<div class="nav">
		<ul class="nav__items">
		<li class="nav__item"><Link to="/" class="nav__link">Home</Link></li>
		<li class="nav__item"><Link to="about" class="nav__link">About</Link></li>
		<li class="nav__item"><Link to="services" class="nav__link">services</Link></li>
		<li class="nav__item"><Link to="gallery" class="nav__link">Gallery</Link></li>
		<li class="nav__item"><Link to="contact" class="nav__link">contact</Link></li>
		
		
			
			
		</ul>
	</div>
			</div>
		</div>
	


	
</div>
</nav>


  
  
  
  </>




  )
}

export default Navbar
