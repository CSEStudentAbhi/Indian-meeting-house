/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './home.css'
import SimpleImageSlider from "react-simple-image-slider";
import friends from './images/frends.png'
import officeonline from './images/officeonline.png'
import Onlinemeeting from './images/Onlinemeeting.png'
import schoolmeeting from './images/schoolonlinemeeting.jpg'
import schoolonlinemeeting from './images/schoolonlinemeeting.png'
import anmiwatch from './images/watch.gif'
import whitebord from '../images/whiteboard.gif'
import screen from '../images/screenSharing.gif'
import question from '../images/QUESTION.gif'
import file from '../images/fileshring.gif'
import end from '../images/end.gif'
import logo from './Logo Main 2.png'
import facebook from './images/fb-icon.png'
import instagram from './images/inst-logo.png'
import linkedin from './images/in-logo.png'
import twiter from './images/tw-logo.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useState } from 'react';

function Home() {
  const [swiperRef, setSwiperRef] = useState(null);

  

  const photos = [
    { url: friends },
    { url: officeonline },
    { url: Onlinemeeting },
    { url: schoolmeeting },
    { url: schoolonlinemeeting },

  ];


  return (
    <div>

      <div className='body'>
        {/* <h1 className='typeing'>
          Indian Meeting House
        </h1> */}


        <marquee class='marquee' width="100%" behavior="scroller">
        </marquee>
        <div className='image_slide'>
          <div className='text_of_display'>
                <h1 className='Introducing'>Introducing the New Meeting</h1>
                <h1 className='Indian_Meeting_House'>Indian Meeting House</h1>
                <h5>Broadcast cast your screen to the world</h5>
                <span className='tag_line_for_app'>We re-engineered the service we built for secure meeting , Indian Meeitng House, to make it free and available for all </span>
                    
          </div>
          <div>
          <SimpleImageSlider
            width={500}
            height={350}
            images={photos}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            loop={true}
            style={{
              boxShadow: "2px 2px 10px black"

            }}
          />
          </div>
        </div>
        <div className='Discover_More_From'>
          <h1 className='discover'>Discover More From</h1>
          <h1 className="Indian_Meeting">Indian Meeting House</h1>
        </div>
        <div className='container'>
        <>
          <Swiper
           slidesPerView={1}
           loop={true}
           spaceBetween={10}
           pagination={{
             clickable: true,
           }}
           breakpoints={{
             640: {
               slidesPerView: 1,
               spaceBetween: 20,
             },
             768: {
               slidesPerView: 2,
               spaceBetween: 20,
             },
             1024: {
               slidesPerView: 3,
               spaceBetween: 20,
             },
           }}
          //  modules={[Pagination]}
           className="mySwiper"
            onSwiper={setSwiperRef}
            // slidesPerView={3}
            // centeredSlides={false}
            // spaceBetween={0}
            // pagination={{
            //   type: "fraction",
            // }}
            navigation={true}
            modules={[Pagination, Navigation]}
            // className="mySwiper"
          >

              <div className='slider'>
                <SwiperSlide><div className='slide1'>
                  <div className='time_container'>
                    <span className='time_Text'>Time</span>
                    <div className='antimated_gifs'>
                      <img src={anmiwatch} className='Abnimated_Watch' />
                    </div>
                    <hr className='horizontal_for_slide' />
                    <div className='slider_text'>
                      <p>The Time is most valuable thing, A man can spend.</p>
                      <p className='sub_para'>Time is the most valuable thing in life. It has no beginning and no end. It can neither be created nor be destroyed. Time is the only dimension in which we all live our lives, and it affects everything that we do, from a flower's growing cycle to the destruction of empires.</p>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide><div className='slide1'>
                  <div className='time_container'>
                    <span className='time_Text'>Whitebord</span>
                    <div className='antimated_gifs'>
                      <img src={whitebord} className='Abnimated_Watch' />
                    </div>
                    <hr className='horizontal_for_slide' />
                    <div className='slider_text'>
                      <p>Whiteboards are not just for writing!</p>
                      <p className='sub_para'>Using interactive whiteboards for business allows employees to visually ideate and explain complex concepts, all of which leads to better information retention and innovation. In addition, employees can look over, edit, and create documents and presentations in real-time.</p>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='slide1'>
                    <div className='time_container'>
                      <span className='time_Text'> Screen Sharing</span>
                      <div className='antimated_gifs'>
                        <img src={screen} className='Abnimated_Watch' />
                      </div>
                      <hr className='horizontal_for_slide' />
                      <div className='slider_text'>
                        <p> Screen sharing involves sharing access to your computer screen.</p>
                        <p className='sub_para'>Other users are then able to see your screen and watch your activity in real-time – ideal for scenarios such as online presentations or meetings. Screen sharing spares you the time and effort of having to send files, documents, or videos.</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='slide1'>
                    <div className='time_container'>
                      <span className='time_Text'> Question/Answere</span>
                      <div className='antimated_gifs'>
                        <img src={question} className='Abnimated_Watch' />
                      </div>
                      <hr className='horizontal_for_slide' />
                      <div className='slider_text'>
                        <p> What is the best way is to start a conversation? </p>
                        <p className='sub_para'>Ask the other person a question. We learn by asking questions.Questions allow you to asses your understanding as well as others. Identifying gaps in your knowledge is the first step to filling them. We can learn a lot, often more, from the work involved in answering a question than from the answer itself.</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='slide1'>
                    <div className='time_container'>
                      <span className='time_Text'> File Sharing</span>
                      <div className='antimated_gifs'>
                        <img src={file} className='Abnimated_Watch' />
                      </div>
                      <hr className='horizontal_for_slide' />
                      <div className='slider_text'>
                        <p>File sharing allows several people to use the same file data. </p>
                        <p className='sub_para'>File sharing is making files available for other individuals to download. It can be as innocent as accessing work files from your home computer or sharing documents you created on your web page. The controversial aspects of file sharing involve peer-to-peer .</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='slide1'>
                    <div className='time_container'>
                      <span className='time_Text'> End </span>
                      <div className='antimated_gifs'>
                        <img src={end} className='Abnimated_Watch' />
                      </div>
                      <hr className='horizontal_for_slide' />
                      <div className='slider_text'>
                        <p>The work is stared finishing plays important role. </p>
                        <p className='sub_para'>“At the end of the day, stay morally clear to yourself.” “Every end of every day is the most important time of that day because you confront with your past and you obtain a chance for tomorrow not to repeat your past mistakes!” “At the end of the day, without you oh, God! Life becomes a sad voyage on Earth.</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
          </Swiper>
        </>
            </div>
        <div>
          <footer>
            <div className='footer'>
              <div className='ft-info'>
                <div className='ft-imgname'>
                  <img src={logo} width="30px"
                    style={{
                      float: "left"
                    }}
                  />
                  <p className='ft-name'> Indian Meeting House </p>
                </div>
                <div className='ft_new_para'>
                  <p>An Indian Meeting House: Broadcast your screen to the world,<br></br> this application facilitates online meeting and have more feature<br></br> compared to other online meeting apps and sites.</p>
                </div>
              </div>
              <div>
                <h3>About us</h3>
                    <img src="https://images.theconversation.com/files/378097/original/file-20210111-23-bqsfwl.jpg?ixlib=rb-1.1.0&rect=36%2C84%2C7980%2C5072&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" width=33%/>
                <h1>Abhishek Ambi</h1>
              </div>
              
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Home
