// import slider components

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./MultiItemSlider/MultiItemSlider.css";
import { MultiImages_data } from "./Images_data";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

//icons add



const PreviousBtn=(props)=>{
    // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
        <ArrowBackIosIcon style={{ color: "white", fontSize: "30px" }} /> 
       {/* <AccessAlarm/> */}
    </div>
  );
};
    
const NextBtn=(props)=>{

    const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
     <NavigateNextIcon style={{ color: "white", fontSize: "30px" }} />
  
    </div>
  );
};
  
const carouselProperties = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToShow: 3,
    
    
    // infinite={false}
    // slidesToScroll={3}
    centerMode: true,
    centerPadding: "170px",
    autoplay:true,
    autoplaySpeed:5000,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          autoplay:true,
            autoplaySpeed:5000
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          autoplay:true,
            autoplaySpeed:5000
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          centerMode: false,
          slidesToScroll: 2,
          autoplay:true,
            autoplaySpeed:5000        },
      },
    ],
  };


const MultiItemSlider = () =>{
    return (
        <>
        <div className="container mt-3">
           <h2 className="text-center font-weight-bold py-2">Latest Products</h2>
           <p>Directly from the farm, freshly grown for our clients.</p>
            <Slider {...carouselProperties} >
             
             {
                MultiImages_data.map(item=>(
                    <div className="col-4 my-2 ">
                    <div className="pcard mx-2">
                    <Card item={item} />
                </div>  </div>                 
                 ))
             }
               
               
            </Slider>
               </div>

           
        </>
    );
};

const Card = ({ item }) => {
    return (
      <div style={{ textAlign: "center" }}>
        <img
          className="multi__image"
          src={item}
          alt=""
          style={{
            width: "100%",
            height: "170px",
            objectFit: "contain",
            marginBottom: "10px",
          }}
        />
        <p style={{ fontSize: "14px", padding: "5px 0" }}>TOP TRNDING TVs</p>
        <p style={{ fontSize: "16px", padding: "5px 0", color: "green" }}>
          From ₹ 7,000
        </p>
        <p style={{ fontSize: "14px", padding: "5px 0", color: "gray" }}>
          Up To ₹ 5,000 Off on HDFC
        </p>
      </div>
    );
  };
export default MultiItemSlider; 