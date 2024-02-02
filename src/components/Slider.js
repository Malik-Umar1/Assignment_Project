

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import tomatoes from '../imgs/tomatoes.png'
import salad from '../imgs/salad.png'
import meal from '../imgs/meal.png'
import corn from '../imgs/corn.png'
import supreme from '../imgs/supreme.png'
import soup from '../imgs/soup.png'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



const Slider = () => {
    const [slide, setSlide] = useState(1);
    const goNext = () => {
      if (swiper.current && slide<4) {
        setSlide(previousState=>previousState+1)
        swiper.current.swiper.slideNext();
      }
    };
  
    const goPrev = () => {
      if (swiper.current && slide>1) {
        setSlide(previousState=>previousState-1)
        swiper.current.swiper.slidePrev();
      }
    };
  
    const swiper = React.useRef(null);
  return (
    <>
            <Swiper

// ref={swiper}
//         pagination={{
//           type: 'fraction',
//         }}
//         navigation={true}
//         modules={[Pagination, ]}
//         className="mySwiper"
//         navigation={{
//           nextEl: '.custom-swiper-button-next',
//           prevEl: '.custom-swiper-button-prev',
//         }}
        // pagination={{
        //   el: '.swiper-pagination',
        //   type: 'fraction',
        // }}
        // className="mySwiper"
        ref={swiper}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }}
        pagination={{
          el: '.swiper-pagination',
          type: 'fraction',
        }}
        slidesPerView={3}
        spaceBetween={20}
        className="mySwiper"
      >
        <SwiperSlide>  <div className="card">
                <img src={tomatoes}></img>
                <div className="content-containr">
                <h1 className="subline">Grilled Tomatoes at Home</h1>
                <p className="contentt">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                <div className="read-btn"><a href="#">Read More</a></div>
                </div>
               
            </div></SwiperSlide>
        <SwiperSlide> <div className="card">
                <img src={salad}></img>
                <div className="content-containr">
                <h1 className="subline">Snacks for travel</h1>
                <p className="contentt">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                <div className="read-btn"><a href="#">Read More</a></div>
                </div>
                
            </div></SwiperSlide>
        <SwiperSlide><div className="card">
                <img src={meal}></img>
                <div className="content-containr">
                <h1 className="subline">Post-Workout Recipes</h1>
                <p className="contentt">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                <div className="read-btn"><a href="#">Read More</a></div>
                </div>
               
            </div></SwiperSlide>
        <SwiperSlide> <div className="card">
                <img src={corn}></img>
                <div className="content-containr">
                <h1 className="subline">How to grill corn</h1>
                <p className="contentt">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                <div className="read-btn"><a href="#">Read More</a></div>
                </div>
                
            </div></SwiperSlide>
        <SwiperSlide>  <div className="card">
                <img src={supreme}></img>
                <div className="content-containr">
                <h1 className="subline">Crunchwrap Supreme</h1>
                <p className="contentt">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                <div className="read-btn"><a href="#">Read More</a></div>
                </div>
               
            </div></SwiperSlide>
        <SwiperSlide>  <div className="card">
                <img src={soup}></img>
                <div className="content-containr">
                <h1 className="subline">Broccoli Cheese Soup</h1>
                <p className="contentt">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                <div className="read-btn"><a href="#">Read More</a></div>
                </div>
                
            </div>
            </SwiperSlide>

      </Swiper>
<div className='wrapper-nav'>
<div className="custom-navigation">
        <div className={`${slide>1?"custom-swiper-button-prev":"custom-swiper-button-disabled"}`} onClick={goPrev}> <IoIosArrowBack /></div>
        <div className="pag">{slide}/4</div>
        <div className={`${slide<4?"custom-swiper-button-next":"custom-swiper-button-disabled"}`} onClick={goNext}><IoIosArrowForward /></div>
      </div>
</div>
    </>
  )
}

export default Slider;