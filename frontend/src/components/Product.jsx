import React, { useState } from 'react'
import Layout from './common/Layout'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Navigation, Mousewheel } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import ProductImg8 from "../assets/image/Mens/eight.jpg";
import ProductImg5 from "../assets/image/Mens/five.jpg";
import ProductImg9 from "../assets/image/Mens/nine.jpg";
import ProductImg1 from "../assets/image/Mens/fivee.jpg";
import ProductImg6 from "../assets/image/Mens/six.jpg";
import ProductImg3 from "../assets/image/Mens/three.jpg";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { Rating } from 'react-simple-star-rating'

function Product() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const productImages = [
    ProductImg1,
    ProductImg8,
    ProductImg5,
    ProductImg9,
    ProductImg6,
    ProductImg3
  ];
   const [rating, setRating] = useState(4.5)

  return (
    <Layout>

      <div className="container">

        <div className="row">
          <div className="col-md-12">

            <nav aria-label="breadcrumb">
              <ol className="breadcrumb p-4">

                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>

                <li className="breadcrumb-item">
                  <Link to="/shop">Shop</Link>
                </li>

                <li className="breadcrumb-item active" aria-current="page">
                  Product
                </li>

              </ol>
            </nav>

          </div>
        </div>


        <div className="row">

          <div className="col-md-5">

            <div className="row">

              <div className="col-2">

                <Swiper
                  style={{
                    '--swiper-navigation-color': '#000',
                    '--swiper-pagination-color': '#000',
                    height: "500px"
                  }}
                  onSwiper={setThumbsSwiper}
                  loop={false}
                  direction="vertical"
                  spaceBetween={10}
                  slidesPerView={5}
                  freeMode={true}
                  watchSlidesProgress={true}
                  mousewheel={true}
                  modules={[FreeMode, Navigation, Thumbs, Mousewheel]}
                  className="mySwiper mt-2 mb-5"
                >
                  {productImages.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img src={img} alt={`Thumb ${index + 1}`} className="w-100" style={{height:"90px", objectFit:"cover", cursor: "pointer"}} />
                    </SwiperSlide>
                  ))}
                </Swiper>

              </div>


              <div className="col-10">

                <Swiper
                  style={{
                    '--swiper-navigation-color': '#000',
                    '--swiper-pagination-color': '#000',
                    height: "500px"
                  }}
                  loop={false}
                  spaceBetween={0}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  {productImages.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img src={img} alt={`Product ${index + 1}`} className="w-100" style={{height:"500px", objectFit:"contain"}} />
                    </SwiperSlide>
                  ))}
                </Swiper>

              </div>

            </div>

          </div>


          <div className="col-md-7">
                  <h2>Formal Dress for Lady</h2>
                 <div className='d-flex align-items-center gap-2'>
                    <Rating
                    size={20}
      initialValue={rating}
      readonly
      />
      <p className='mb-0'>10 reviews</p>
                 </div>
                 <div className="cost mt-1 fs-4 fw-bold">
                  $70
                  <span className="text-decoration-line-through text-secondary ms-2">
                    $80
                  </span>
                </div>
                <div className='mt-3'>
                    100% Original Products <br /> Pay on delivery might be available <br />
                    Easy 15 days returns and exchanges
                    Products
                </div>

                <div>
                    <strong className='mt-4'>Select Size</strong>
                <div className='sizes pt-2'>
                    <button className='btn btn-size'>S</button>
                    <button className='btn btn-size'>M</button>
                    <button className='btn btn-size'>L</button>
                    <button className='btn btn-size'>XL</button>
                </div>
                </div>
               
                   <div className='add-to-cart my-4'>
                    <button className='btn btn-primary'>Add to Cart</button>
                    </div> 

                    <hr />

                    <div>
                        <strong>SKU</strong>
                        DDXX677
                    </div>

           
          </div>

        </div>

 <div classname='row pb-8'>
    <div className='col-md-12'>
<Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Description" title="Description">
        Tab content for Description </Tab>
      <Tab eventKey="Reviews" title="Reviews">
        Reviews 10
      </Tab>
      
    </Tabs>
    </div>

 </div>
      </div>

    </Layout>
  )
}

export default Product