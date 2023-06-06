/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './signup.css'
import google from '../images/google-logo-9825.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import GoogleLogin from 'react-google-login';
import Loding from '../Loding/loding'

function Signup() {
  const ClientId = "11058079117-6tei7409585qvhq86vug5jfnqa0obelr.apps.googleusercontent.com"
  let history = useNavigate()
  const AiFillEyeopen = () => {
    <AiFillEye />
  }
  const [message, setMessage] = useState()
  const [mob, setMob] = useState()
  const [validemail, setValidemail] = useState()
  const [validpassword, setValidpassword] = useState()
  const [first_Name, setFirst_Name] = useState()
  const [last_Name, setLast_Name] = useState()
  const [middle_Name, setMiddle_Name] = useState()
  const [email, setEmail] = useState()
  const [mobile_No, setMobile_No] = useState()
  const [date_of_birth, setDate_of_Birth] = useState()
  const [gender, setGender] = useState()
  const [password, setPassword] = useState()
  const [confirm, setConfirm] = useState()
  const [image, setImage] = useState("https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg")
  const [mainLodind, setMainLoding]=useState()

  const responseGoogle_success = async (response) => {
    setMainLoding(Loding)
    console.log(response.profileObj)
    const Main_google_data = {
      First_Name: response.profileObj.givenName,
      Last_Name: response.profileObj.familyName,
      Email: response.profileObj.email,
      Image: response.profileObj.imageUrl
    }
    await axios.post("https://colorful-neckerchief-toad.cyclic.app/register", Main_google_data)
      .then(res => {
        setMessage(res.data.message)
        setTimeout(() => {
          setMessage("")
          setMainLoding("")
          history("/login")
        }, 3000);

      })
  }
  const responseGoogle_failure = (response) => {
    console.log("SignUp in failed", response);
  }


  const [show, setShow] = useState(false)
  const handleeye = () => {
    setShow(!show)
  }
  const MainData = {
    First_Name: first_Name,
    Last_Name: last_Name,
    Email: email,
    Mobile_No: mobile_No,
    Date_of_Birth: date_of_birth,
    Gender: gender,
    Password: password,
    Image: image
  }

  console.log(MainData)


  const submit = async (e) => {
    setMainLoding(Loding)
    e.preventDefault()

    if (!email || !first_Name || !last_Name || !mobile_No || !date_of_birth || !gender || !password) {
      setMessage("Enter All Details")
      setTimeout(() => {
        setMessage("")
        setMainLoding("")
      }, 3000);
    }
    else {
      setMainLoding(Loding)
      const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
      const regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
      if (regEx.test(email)) {
        setValidemail("")
        if (regexPassword.test(password)) {
          setValidpassword("")
          if (mobile_No.length === 10) {
            setMob("")
            if (password === confirm) {

              await axios.post("https://colorful-neckerchief-toad.cyclic.app/register", MainData)
                .then(res => {
                  setMessage(res.data.message)
                  setTimeout(() => {
                    setMessage("")
                    setMainLoding("")
                    history("/login")
                  }, 1500);

                })
            }
            else {
              setValidpassword("Password did not match")
            }
          }
          else {
            setMob("Invalid Mobile Number")
          }
        }

        else {
          setValidpassword("Invalid Password")
        }
      } else if (!regEx.test(email) && email !== "") {
        setValidemail("Invalid Email");
      } else {
        alert("");
      }

    }
  }


  console.log(MainData)
  return (
    <div className='background-images'>
       <div
        className='userInfo bottonLoding'
      >
        {
          message
        }
      </div>
      {/* <div className='popupmesssage'>
        {
          message
        }
      </div> */}
      <div className='body_for_background'>
        <div className='secondar_Display'>
      <div style={{
        position:'absolute',
        top:'50%',
        left:'45%'
      }}>
        {mainLodind}
      </div>

        </div>

        <form>
          <div className='main_flex_for_SignUp'>
            <h1>Register Here</h1>
            <div className='first_and_last'>
              <div className='first_Name'>
                <label className='names_for_all'>First Name</label>
                <input type={"text"} placeholder=" " className='first_name'
                  value={first_Name}
                  onChange={(e) => { setFirst_Name(e.target.value) }}
                />
              </div>

              <div className='last_Name'>
                <label className='names_for_all' >Last Name</label>
                <input type={"text"} placeholder=" " className='first_name'
                  value={last_Name}
                  onChange={(e) => { setLast_Name(e.target.value) }}
                />
              </div>
            </div>
            <div className='first_and_last'>
              <div className='first_Name'>
                <label className='names_for_all'>Email </label>
                <input type={"email"}
                  pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" title='please Enter Valid Email Id'
                  placeholder=" " className='first_name'
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
                />
                <div className='valid'>
                  {
                    validemail
                  }
                </div>
              </div>

              <div className='last_Name'>
                <label className='names_for_all' >Mobile No</label>
                <input type={"text"} placeholder=" " className='first_name' maxLength={"10"}
                  value={mobile_No}
                  onChange={(e) => { setMobile_No(e.target.value) }}
                  title='please enter valid mobile no' />
                <div className='valid'>
                  {
                    mob
                  }
                </div>
              </div>
            </div>
            <div className='dob_Gender'>
              <div className='date_of_birth'>
                <label className='names_for_all'>Date of Birth</label>
                <input type={"Date"} className="input_for_date"
                  value={date_of_birth}
                  onChange={(e) => { setDate_of_Birth(e.target.value) }}
                />
              </div>
              <div className='Gender'>
                <label className='names_for_all'>Gender</label>
                <select className='input_for_gender'
                  value={gender}
                  onChange={(e) => { setGender(e.target.value) }}
                >
                  <option className='options' >Gender</option>
                  <option className='options' >Male</option>
                  <option className='options' >Female</option>
                  <option className='options' >other</option>
                </select>
              </div>
            </div>
            <div className='password_for_registraction'>
              <div className='temp_pwd'>
                <label className='names_for_all' >Password</label>
                <div className='openEyeone'>
                  <input type={show ? "text" : "password"} placeholder=" " className='first_name'
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  />
                  <div className='openEye'>
                    <label onClick={handleeye}>
                      {show ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </label>
                  </div>
                </div>
                <span className='AiFillEye'></span>
                <div className='valid'>
                  {
                    validpassword
                  }
                </div>
              </div>
              <div className='con_pwd'>
                <label className='names_for_all'>Confirm Password</label>
                <input type={show ? "text" : "password"} placeholder=" " className='first_name'
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  value={confirm}
                  onChange={(e) => { setConfirm(e.target.value) }}
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                />
              </div>

            </div>
            <div>
            </div>
            <div className='register'>
              <button onClick={submit} className='button_for_registraction' >Register</button>
            </div>
            <hr className='horizontal_line'></hr>
            <div className='signup_via'>
              <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Login"
                render={renderProps => (
                  <div className='loginwitgoogle' > <img src={google} width="25px" alt='google' className='google-logo' /><span onClick={renderProps.onClick} disabled={renderProps.disabled}>SignUp in with Google</span></div>
                )}
                onSuccess={responseGoogle_success}
                onFailure={responseGoogle_failure}
                cookiePolicy={'single_host_origin'}
              />
              {/* <div className='loginwitgoogle' > <img src={google} width="25px" alt='google' className='google-logo' /><span>SignUp in with Google</span></div>
              <div className='loginwitgoogle' > <img src={google} width="25px" alt='google' className='google-logo' /><span>SignUp in with Google</span></div> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;