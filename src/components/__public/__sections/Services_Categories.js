import {useState, useEffect} from 'react';
import { baseUrl } from '../../configs/Config';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import service_image from '../../../assets/img/course-categories/technology_category_mobile app dev.jpg';

const Services_Categories = () => {
  const [categData, setCategData] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/course-categories/`)
      .then((response) => {
        setCategData(response.data.data);
        console.log(categData);
      })
      .catch(error => {
        setCategData([]);
      });
  }, []);

  return (
    <>
    <div className="categories" style={{marginTop:'2rem'}}>
      <h1 className="header_1">Our Services</h1>
      <div className="zyzics_ittraining-subbanner subtext">
        <span style={{color: '#000'}}>Our list of services </span><code>Choose a service below</code>
      </div>
      <Swiper 
        spaceBetween={11}
        breakpoints={{
          1206: {
              slidesPerView: 3, /* 5. NORMAL LAPTOPS (E.G MY OWN) TO LARGE @media screen and (min-width: 1207px)*/
          },
          1024: {
            slidesPerView: 3, /* 4. SMALL LAPTOP SCREENS @media screen and (min-width: 1025px) and (max-width: 1206px) */
          },
          767: {
              slidesPerView: 2, /* 3. MEDIUM SCREENS @media screen and (min-width: 768px) and (max-width: 1024px) */
          },
          576: {
          slidesPerView: 2, /* 2. TABLETS @media screen and (min-width: 577px) and (max-width: 767px) */
          },
          350: {
              slidesPerView: 1.3, /* 1. SMALL/MOBILE @media screen and (min-width: 351px) and (max-width: 576px) */
          },
          // when window width is >= 0px (default for all sizes)
          0: {
            slidesPerView: 1.3,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        >

        <div className="zyzics_ittraining-black ">
          <div>   
            <SwiperSlide>
              <Link to="">

              <img src={service_image} alt="service image" />
              
              <div className="zyzics_ittraining-subbanner">
                <h4>IT Training</h4>
                <p>250+ courses <code>Programming</code>, <code>Web Design</code>, etc.</p>
              </div>

              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link to="">

              <img src={service_image} alt="service image" />
              
              <div className="zyzics_ittraining-subbanner">
                <h4>Software Development</h4>
                <p>19 projects <code>Software</code>, <code>Web &amp; Mobile Apps</code></p>
              </div>

              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link to="">

              <img src={service_image} alt="service image" />
              
              <div className="zyzics_ittraining-subbanner">
                <h4>Website Design</h4>
                <p>43 projects <code>Website Design</code>, <code>Re-design</code>, etc.</p>
              </div>

              </Link>
            </SwiperSlide>
          </div>
        </div>
      </Swiper>
    </div>
    </>
  );
};

export default Services_Categories
