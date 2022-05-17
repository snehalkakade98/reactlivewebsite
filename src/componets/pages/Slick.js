// import slider components
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./assets/css/slider.css";
import { Images_data } from "./Images_data";




const Slick = () =>{
    return (
        <>
        <div className="container-fluid px-0">
           
            <Slider autoplay
             autoplaySpeed={5000} 
             dots={false}
             ininite={false}>
                <div>
                    <img src={Images_data[0]} alt="slider1" style={{height:"300px",width:"100%"}}/>
                </div>
                <div>
                    <img src={Images_data[1]} alt="product2" style={{height:"300px",width:"100%"}}/>
                </div>
                <div>
                    <img src={Images_data[2]} alt="slider2" style={{height:"300px",width:"100%"}}/>
                </div>
                <div>
                    <img src={Images_data[1]} alt="slider2" style={{height:"300px",width:"100%"}}/>
                </div>
                
            </Slider>
            </div>

           
        </>
    );
}
export default Slick; 