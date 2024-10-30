
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from './ImageSlider.module.scss';
import slider1 from '../../../public/slider/slider_1.png';
import slider2 from '../../../public/slider/slider_2.png';
import slider3 from '../../../public/slider/slider_3.png';

export const ImageSlider = () => {
   const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true, 
    centerPadding: "10%",


  };

  return (
    <div className={s.slider}>
      <Slider {...settings}>
      
          <img src={slider1} alt="Slider 1" />
     
          <img src={slider2} alt="Slider 2" />
     
          <img  src={slider3} alt="Slider 3" />
      
      </Slider>
    </div>
  );
};
