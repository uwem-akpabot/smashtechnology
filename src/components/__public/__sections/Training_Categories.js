import {useState, useEffect} from 'react';
import { baseUrl } from '../../configs/Config';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Training_Categories = () => {
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
      <h1 className="header_1">Categories of courses</h1>
      <div className="zyzics_ittraining-subbanner subtext">
        <span style={{color: '#000'}}>What would you like to learn? </span><code>Choose a category below</code>
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

        {categData.map((categ, index) => (

          <div key={index}>   
            <SwiperSlide>
              <Link to={`/course-categories/${categ.slug}`} key={index}>

              <img src={`${categ.image}`} alt={`${categ.title} image`} />
              
              <div className="zyzics_ittraining-subbanner">
                <h4>{categ.title}</h4>
                <p>{categ.about}</p>
                <p><code># {categ.tags}</code></p>
              </div>

            </Link>
          </SwiperSlide>
        </div>
        ))}

        </div>
      </Swiper>
    </div>
    </>
  );
};

export default Training_Categories
