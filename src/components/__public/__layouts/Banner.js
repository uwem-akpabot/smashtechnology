import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import mzgc_logo_87x78 from '../../../assets/img/logos/mzgc_logo_87x78_removebg.png';
import slide1 from '../../../assets/img/_Pics_Eagles_and_MZGC/slides/Praise_God.jpeg';
import slide2 from '../../../assets/img/banner/1.jpg';
import slide3 from '../../../assets/img/_Pics_Eagles_and_MZGC/slides/Choir.jpeg';
import slide4 from '../../../assets/img/_Pics_Eagles_and_MZGC/slides/Members.jpeg';
import slide5 from '../../../assets/img/programmes/firenight.jpg';
import logoslide from '../../../assets/img/_Pics_Eagles_and_MZGC/MZGC Logo - Perfect sharpness.jpeg';

const Banner = () => {
  return (
    <>
    <section className="home section" id="Banner">
    <div className="swiper-container">
        <Swiper
        // spaceBetween={22}
        breakpoints={{
            1206: {
            slidesPerView: 1,
            },
            1024: {
            slidesPerView: 1,
            },
            767: {
            slidesPerView: 1,
            },
            576: {
            slidesPerView: 1,
            },
            350: {
            slidesPerView: 1,
            },
            0: {
            slidesPerView: 1,
            },
        }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        >
        <SwiperSlide>
            <img src={logoslide} alt="Mount Zion Logo" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="Slide 5" />
        </SwiperSlide>
    </Swiper>
    </div>
    <div className="content">
        <h1>Eagles of Zion</h1>
        <h2 className="home__slogan">Soaring for Glory!</h2>
        <div className="church">
            <img src={mzgc_logo_87x78} alt="Mount Zion Gospel Church Logo" />
            <h3>Mount Zion Gospel Church Youths' Fellowship</h3>
        </div>
    </div>
    </section>

    <style jsx>{`
    .home.section {
        position: relative;
        height: 100vh;
    }
    .swiper-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%; /* Match the height of the home section */
        z-index: -1;
    }
    .swiper-container img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Ensure the image covers the entire container */
    }
    .content {
        position: relative;
        z-index: 1;
    }
    `}</style>
    </>
  )
}
export default Banner;