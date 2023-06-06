/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigtion from './Navi/navigation'
import Home from './Home/home'
import Login from './Login/login'
import Camera from './webcam/webcam'
import Conatact from './Conatact/Coantact'
import Signup from './signup/signup'
import Hiden_page from './hidenPages/hidenNavigation/hidenNavigation'
import ForgetPassword from './forgetPassword/forgetpassword'
import Meeting from './hidenPages/requestformeeting/meeting'
import EditProfile from './hidenPages/editprofile/editprofile'
import { gapi } from 'gapi-script'
import NoPage from './nopage/noPage'
import Contact from './contacktus/contact'
const ClientId = "11058079117-6tei7409585qvhq86vug5jfnqa0obelr.apps.googleusercontent.com"

function App() {



  useEffect(() => {
    function start() {
      gapi.client.init({
        ClientId: ClientId,
        scope: ""

      })
    };
    gapi.load("client:auth2", start)
  })
  return (
    <div>

        <Routes>
          <Route path='/' element={<Navigtion />}>
            <Route index element={<Home />} />
            <Route path='/Contact' element={<Conatact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/webcam' element={<Camera />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forget' element={<ForgetPassword />} />
            <Route path='/Contact/replys' element={<Contact />} />
            <Route path='*' element={<NoPage />} />
          </Route>
            {/* <Route path='/room/:roomID' element={<Room />}/> */}
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path='/mainpages' element={<Hiden_page />}>
            <Route index element={<Meeting />} />
          </Route>

        </Routes>

    </div>
  )
}

export default App