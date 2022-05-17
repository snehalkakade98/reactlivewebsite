import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slick from './Slick';
import MultiItemSlider from './MultiItemSlider';
import '../style.css';
import About from '../About';





const Home = () => {
  return (
    <div>
     <main>
	<section >
		
		<Slick/>
    </section>

	<section className="about">
	<About/>
	</section>

	<section className="pt-5">
	<MultiItemSlider/>
	</section>
	
	
</main>


    </div>
  )
}

export default Home
