import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './navigation.css'
import Logo from './Logo Main 2.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigtion() {
   
    var navigate=useNavigate()
    const host =()=>{
        alert("Free trial Meeting")
            window.location.replace('https://indain-meeting-house.netlify.app/create');
    }
    const join =()=>{
        // alert("Free trial Meeting")
       const joinm= prompt("Enter the code" )
            window.location.replace(joinm);
    }
    return (
        <div className='top_Navigation'>
            <nav className='navigation fixed-top'>
                <div className='navi1'>
                    <Link
                        style={{
                            textDecoration: "none"
                        }} to='/'>
                        <img src={Logo} width="50px" className='logo img' alt='Meeting House' /><span className='appName' >Indian Meeting House</span></Link>
                </div>
                <div className='right'>
                    <Link
                        className='login'
                        style={{
                            textDecoration: "none",
                            marginLeft: "5px"
                        }}
                        to='/'>Home</Link>
                    |
                    <Link
                        className='login'
                        style={{
                            textDecoration: "none",
                            marginLeft: "5px"
                        }}
                        onClick={host}
                        >Host</Link>
                    <Link
                        className='login'
                        style={{
                            textDecoration: "none",
                            marginLeft: "5px"
                        }}
                        to='/login'
                        onClick={join}
                        >Join</Link>
                    |
                    <Link
                        className='login'
                        style={{
                            textDecoration: "none",
                            marginLeft: "5px"
                        }}
                        to='/Contact'>Contact-us</Link>
                    <Link
                        className='login-btn'
                        style={{
                            textDecoration: "none",
                            marginLeft: "5px"
                        }}
                        to='/login'>Signin</Link>
                </div>

            </nav>
            <Outlet />
        </div>
    )
}

export default Navigtion