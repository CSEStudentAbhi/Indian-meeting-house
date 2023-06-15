import React, { useState } from 'react'
import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import google from '../images/google-logo-9825.png'
import axios from 'axios';
import Loding from '../Loding/loding';
import GoogleLogin from 'react-google-login';

function Login() {
  const ClientId = "11058079117-6tei7409585qvhq86vug5jfnqa0obelr.apps.googleusercontent.com"
  const [result, setResult] = useState()
  const [message, setMessage] = useState()
  const [wrongemail, setWorngemail] = useState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const loding = (<Loding />)
  const [mainloding, setMainloding] = useState()

  const responseGoogle_success = async (response) => {
    setMainloding(loding)
    const google_info = {
      Email: response.profileObj.email,
    }
    console.log(google_info)
    await axios.post('https://colorful-neckerchief-toad.cyclic.app/loginwithG', google_info)
      .then((res) => {
        console.log(res.data.User)
        setResult(res.data.message)
        setMainloding(loding)
        setTimeout(() => {
          setResult("")
          setMainloding("")
        }, 3000)
        setResult(res.data.message)
        if (res.data.User.Email === google_info.Email) {
          console.log("navigating")
          const main_user = res.data.User
          console.log(main_user)
          setResult(res.data.message)
          setMainloding(loding)
          setTimeout(() => {
            setResult("")
            setMainloding("")
            const maindatas = {
              id: res.data.User._id,
              givenName: res.data.User.First_Name,
              familyName: res.data.User.Last_Name,
              name: res.data.User.First_Name + " " + res.data.User.Last_Name,
              imageUrl: res.data.User.Image,
              email: res.data.User.Email,
              dateofBirth: res.data.User.Date_of_Birth,
              work_space: res.data.User.Work_space,
              study: res.data.User.study,
              Address: res.data.User.Address,
              Mob: res.data.User.Mobile_No
            }
            console.log(maindatas)
            const id = maindatas;
            navigate("/mainpages", { state: { id: id } })
          }, 3000)

        }
      })


  }
  const responseGoogle_failure = (response) => {
    console.log("Login in failed", response);
  }


  const LoginWithGoogle = async () => {

  }



  const mainData = {
    Email: email,
    Password: password
  }
  const forgotpassword = () => {
    navigate("/forget")
  }


  console.log(mainData)
  let navigate = useNavigate();
  const askMeeting = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      setResult("Enter Email and Password")
      setMainloding(loding)
      setTimeout(() => {
        setResult("")
        setMainloding("")
      }, 1500)
    }
    else {
      setMessage("")
      setMainloding(loding)
      const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
      const regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
      if (regEx.test(email)) {
        setWorngemail("")
        if (regexPassword.test(password)) {
          setMessage("")
          await axios.post('https://colorful-neckerchief-toad.cyclic.app/login', mainData)
            .then(res => {
              setResult(res.data.message)
              setMainloding(loding)
              setTimeout(() => {
                setResult("")
                setMainloding("")
              }, 3000)
              setResult(res.data.message)
              if (res.data.User.Email === email) {
                console.log("navigating")
                const main_user = res.data.User
                console.log(main_user)
                setResult(res.data.message)
                setMainloding(loding)
                setTimeout(() => {
                  setResult("")
                  setMainloding("")
                  const maindatas = {
                    id: res.data.User._id,
                    givenName: res.data.User.First_Name,
                    familyName: res.data.User.Last_Name,
                    name: res.data.User.First_Name + " " + res.data.User.Last_Name,
                    imageUrl: res.data.User.Image,
                    email: res.data.User.Email,
                    dateofBirth: res.data.User.Date_of_Birth,
                    work_space: res.data.User.Work_space,
                    study: res.data.User.study,
                    Address: res.data.User.Address,
                    Mob: res.data.User.Mobile_No
                  }
                  console.log(maindatas)
                  const id = maindatas;
                  navigate("/mainpages", { state: { id: id } })
                }, 3000)

              }
              else {
                setResult(res.data.message)
                setMainloding(loding)
                setTimeout(() => {
                  setResult("")
                  setMainloding("")
                  navigate("/singup")
                }, 3000)

              }
            })
        }
        else {
          setMessage("Invalid Password")
          setMainloding("")
        }
      }

      else if (!regEx.test(email) && email !== "") {
        setWorngemail("Please Enter Valid Email")
        setTimeout(() => {
          setWorngemail("")
        }, 3000)
      }

    }
  }

  function Create_new_account() {
    navigate('/signup')
  }


  return (
    <div>

      <div
        className='userInfo bottonLoding'
      >
        {
          result
        }
      </div>

      <div className='background-images'>
        <div className='secondary-background'>
          <form className='form'>
            <div className='flex-column'>
              <div className='user-name-input'>
                <input type={"email"} className='input-emial'
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
                  maxLength={"30"}
                  pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" title='please Enter Valid Email Id' placeholder=" " />
                <label className='floting-lable'>Email</label>
              </div>
              <div style={{
                color: "red",
                fontSize: "14px"
              }}>
                {wrongemail}
              </div>
              <div className='user-pasword-input'>
                <input type={"password"} className='input-password'
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  placeholder=" "
                  value={password}
                  maxLength={"30"}
                  onChange={(e) => { setPassword(e.target.value) }} />
                <label className='floting-lable-password'>Password</label>
              </div>
              <div style={{
                color: "red",
                fontSize: "14px"
              }}>
                {message}
              </div>
              <input type={"submit"} value="Sign in" className='button-for-signin'

                onClick={askMeeting} />
              <span className='forgeten-password' onClick={forgotpassword}>Forget Password?</span>
              <hr className='horizontal-line' />
              <div className='login-via'>
                <div className='Google_id'>
                  <GoogleLogin
                    clientId={ClientId}
                    render={renderProps => (
                      <div className='loginwitgoogle' onClick={LoginWithGoogle}> <img src={google} alt='logo' width={"20px"} height={"20px"} /> <span onClick={renderProps.onClick} disabled={renderProps.disabled}>Login with Google</span></div>
                    )}
                    onSuccess={responseGoogle_success}
                    onFailure={responseGoogle_failure}
                    cookiePolicy={'single_host_origin'}
                  />
                </div>
                <div>
                </div>
              </div>
              <button className='create-new-account' onClick={Create_new_account}>Create New Account</button>
            </div>
          </form>
          <div className='thried-backgroung'>
          </div>
        </div>
        <div className='loding'>
          {
            mainloding
          }
        </div>
      </div>
    </div>
  )
}

export default Login