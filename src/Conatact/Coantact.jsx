/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import './about.css'
import gmail from '../images/email.png'
import gps from '../images/gps.png'
import phoness from '../images/phone-call.png'
import facebook from '../images/fb-icon.png'
import instagram from '../images/inst-logo.png'
import twiter from '../images/tw-logo.png'
import linkedin from '../images/in-logo.png'
import axios from 'axios'
function Conatact() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [conatct, setContact] = useState()
  const [message, setMessage] = useState()

  const mainDataForConatct = {
    name: name,
    email: email,
    phone: conatct,
    message: message
  }

  const sendMessage = async () => {
    if (name || email || conatct || message) {
      await axios.post('https://colorful-neckerchief-toad.cyclic.app/contact', mainDataForConatct)
        .then((res) => {
          console.log(res)
        })
    }
    else {
      alert("please Fill the all the data")
    }
  }

 


  return (
    <div className="main_class_body">
      <div className='main_body'>
        <div className='main-class'>
          <h2
            style={{
              textAlign: "center",
              fontSize: "25px",
              paddingTop: "30px"
            }}
          >Contact us.</h2>
          <div className='first-class'>
            <from>
              <div className='test-main'>
                <div className='name-test' >
                  <span>Name:</span>
                  <input type={"text"} className="input form-control" placeholder="Full Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className='email-test' >
                  <span>Email:</span>
                  <input type={"text"} className="input form-control" placeholder="example@gmail.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className='mob-test' >
                  <span>Phone:</span>
                  <input type={"text"} className="input form-control" placeholder="+91 9876543120" value={conatct} onChange={(e) => { setContact(e.target.value) }} />
                </div>
                {/* <div className='sub-test' >
                  <span>Subject:</span>
                  <input type={"text"} className="input" placeholder="Subject"/>
                </div> */}
                <div className='msg-test' >
                  <span>Message:</span>
                  <textarea type={"text"} placeholder="Message" className='textarea form-control' value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>
                </div>
                <button className='con-send' onClick={sendMessage}>Send</button>
                <div className='main-logo'></div>
              </div>
            </from>
            <div className='meeting_house'>
              <h4>May One of these FAQ's can helps </h4>
              <details className='summry' >
                <summary className='summry'><b>How Do I login to my Account</b></summary>
                <p> Go to the sign in page of the Website it is top right of Navigation Bar. Enter your Gmail  (everything that appears before '@gmail.com'). Enter your password. And click on Sign in Button</p>
              </details>
              <details className='summry' >
                <summary className='summry'><b>How Do I Create a  New Account</b></summary>
                <p> Go to the sign in page of the Website it is top right of Navigation Bar. And click on Create New Account button it will Navigate to Register page Fill the All Inputs and click on Register Button</p>
              </details>
              <details className='summry' >
                <summary className='summry'><b>How Do I Recover My Password</b></summary>
                <p> Go to the sign in page of the Website it is top right of Navigation Bar. And click on Create New Account button it will Navigate to Register page Fill the All Inputs and click on Register Button</p>
              </details>
              <details className='summry' >
                <summary className='summry'><b>How Do I Join to Existing Meeting</b></summary>
                <p> If you New user create new account or If you have an account login with the existing account after login it will direct to Meeting page past the code of Meeting and click on join button to Join to Existng    </p>
              </details>
              <details className='summry' >
                <summary className='summry'><b>How Do I Host New Meeing</b></summary>
                <p> First Login with your account, it will take you to meeting page after that click on "New meeting" Button fill the Filds proferly and click on host button  </p>
              </details>
            </div>
          </div>
          </div>
          </div>
                
          <footer>

            <div className='main_footer_class'>
              <div className='primay_inforamtion'>
                <h1 className='footer_contact'>Contact Us</h1>
                <div className='footer_information'>
                  <img src={gmail} className='logo_of_Information' width={"33px"} alt="Gmail" />
                  <span>indian.meeting.house@gmail.com</span>
                </div>
                <div className='footer_information'>
                  <img src={gps} className='logo_of_Information' width={"33px"} height={"33px"} alt="Location" />
                  <span><b>Address:</b>KLE Polytechnic, near <br></br> Basaveshwar Circle, Mahalingpur,<br></br> Karnataka 587312</span>
                </div>
                <div className='footer_information'>
                  <img src={phoness} className='logo_of_Information' width={"33px"} height={"33px"} alt="Location" />
                  <span>+91 7975410440 </span>
                </div>
              </div>
              <div className='secondary_footer'>
                <h1 className='footer_contact'>Social Media</h1>
                <a href='https://www.facebook.com/profile.php?id=100090851060915' target='_blank' rel="noreferrer" className='main_links'  ><img src={facebook} alt='Facebook' className='main_logos' /> Meeting House </a>
                <a href='https://www.instagram.com/indain.meeting.house/' target='_blank' rel="noreferrer" className='main_links'  ><img src={instagram} alt='Instagram' className='main_logos' /> @indian.meeting.house </a>
                <a href='https://twitter.com/indian_meeting' target='_blank' rel="noreferrer" className='main_links'  ><img src={twiter} alt='Twitter' className='main_logos' /> @indain.meeting </a>
                <a href='https://www.linkedin.com/in/meeting-house-abba62269/' target='_blank' rel="noreferrer" className='main_links'  ><img src={linkedin} alt='Linkedin' className='main_logos' /> Meeting House </a>
              </div>
            </div>
          </footer>
        </div>
      
      
  )
}

export default Conatact