import { useState } from 'react'
import './ff.css'
import axios from 'axios'
import logo from '../images/Logo Main 2.png'
import { useNavigate } from 'react-router-dom'
function ForgetPassword() {
  const navigate = useNavigate()
  const [showpassword, setShowpassword] = useState(false)
  const [mainresult, setMainresult] = useState()
  const [show, setShow] = useState(true)
  const [email, setEmail] = useState()
  const [mob, setMob] = useState()
  const [id, setId] = useState()
  const main_Datas = {
    Email: email,
    Mobile_No: mob
  }

  const [password, setPassword] = useState()
  const showpasswords = () => {
    setShowpassword(!showpassword)
  }
  const main_Password = {
    Password: password
  }
  const submit = async (e) => {
    e.preventDefault()
    if (email && mob) {
      setMainresult("")
      const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
      if (regEx.test(email)) {
        setMainresult("")
        if (mob.length === 10) {
          setMainresult("")
          await axios.post('https://colorful-neckerchief-toad.cyclic.app/finduserreset', main_Datas)
            .then((res) => {
              setMainresult(res.data.message)
              setTimeout(() => {
                setMainresult("")
              }, 3000)
              if (email === res.data.user.Email) {
                setShow(!show)
                console.log(res)
                const idof = res.data.user._id
                setId(idof)
              }
            })
        }
        else {
          setMainresult("Please Enter The 10 Digit Mobile No")
          setTimeout(() => {
            setMainresult("")
          }, 3000)
        }
      }
      else if (!regEx.test(email) && email !== "") {
        setMainresult("Please Enter Valid Email")
        setTimeout(() => {
          setMainresult("")
        }, 3000)
      }
    }
    else {
      setMainresult("please enter all fields")
      setTimeout(() => {
        setMainresult("")
      }, 3000)
    }

  }
  const update = async (e) => {
    e.preventDefault()
    await axios.post(`http://localhost:8080/updatepassword/${id}`, main_Password)
      .then((res) => {
        setMainresult("Password Updated Successfully")
        setTimeout(() => {
          setMainresult("")
          navigate("/login")
        }, 3000)
      })
  }
  return (
    <div className='forget_body'>
      <div className='popup_password'>
        {
          mainresult
        }
      </div>
      <div className='sub_body'>
        <form >
          {
            show ?

              <div className='card1'>
                <img src={logo} width={"100px"} alt='logo' className='logo_password' />
                <h3 className='meeting_house_Password'>Indian Meeting House</h3>
                <div className="email_for_password">
                  <label>Email</label>
                  <input type={"email"}
                    className='input_password'
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    placeholder='example@gmail.com' />
                </div>
                <div className="email_for_password">
                  <label>Moblie NO</label>
                  <input type={"text"}
                    value={mob}
                    className='input_password'
                    onChange={(e) => { setMob(e.target.value) }}
                    maxLength={10}
                    placeholder='1234567890' />
                </div>
                <input type={"submit"} onClick={submit} value={"Reset"} className='reset' />
              </div> :
              <form>
                <div className='card1'>
                  <img src={logo} width={"100px"} alt='logo' className='logo_password' />
                  <h3 className='meeting_house_Password'>Indian Meeting House</h3>
                  <div className="email_for_password">
                    <label>Password</label>
                    <input type={showpassword ? "text" : "password"}
                      className='input_password'
                      value={password}
                      onChange={(e) => { setPassword(e.target.value) }}
                      placeholder='Password' />
                  </div>
                  <div className="email_for_password">
                    <label>Confirm Password</label>
                    <input type={showpassword ? "text" : "password"}
                      className='input_password'
                      placeholder='Confirm Password' />
                  </div>
                  <div>
                    <input type={"checkbox"} onClick={showpasswords} /> <span>Show Password</span>
                  </div>
                  <input type={"submit"} onClick={update} value={"Update Password"} className='reset' />
                </div>
              </form>
          }
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword