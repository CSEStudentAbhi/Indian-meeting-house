import React, { useState } from 'react'
import './hidenNavigation.css';
import Logo from '../hidenImgaes/Logo Main 2.png'
import users from '../hidenImgaes/profile.png'
import edit from '../hidenImgaes/profile_edit.png';
import logout from '../hidenImgaes/logout.png';
import gmail from '../hidenImgaes/email.png'
import phone from '../hidenImgaes/phone-call.png'
import address from '../hidenImgaes/gps.png'
import education from '../hidenImgaes/pngwing.com (2).png'
import birth from '../hidenImgaes/pngwing.com (3).png'
import work from '../hidenImgaes/pngwing.com (4).png'
import { Outlet, useLocation, useNavigate, } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';




function Hiden_page() {
    const location = useLocation()
   
   Boolean(location.state.id)
    
    var navigate = useNavigate()
    const profile = () => {
        setShowprofile(!showprofile)
        setShow(!show)
    }
    
    const [show, setShow] = useState(false)
    const [showprofile, setShowprofile] = useState(true)

    const showProfile = () => {
        setShowprofile(!showprofile)
        setShowpassword(!showpassword)
    }
    const [showpassword, setShowpassword] = useState(false)
    const logout_form_page = () => {
        navigate("/")
    }
    console.log(location.state.id.imageUrl)

    const Edit_profile=()=>{
        const id = (location.state)
        navigate("/editprofile", { state: { id: id } })
    }

    const profile_none=()=>{
        setShowprofile(!showProfile)
    }

    return (
        <div className='body_for_meetingrequest'>
            <div className="top_hident_navigation">
                <div className="Hiden_Navigation ">
                    <div className="hiden_display_type">
                        <nav>
                            <div className="hiden_flex_row">
                                <div className='logo_name'>
                                    <img src={Logo} width="33px" alt='logo' className='hiden_logo' />
                                    <h3 className="hiden_Name">Indian Meeting House</h3>
                                </div>
                                <div>
                                    <img src={location.state.id.imageUrl} alt='logo' width={"33px"} onClick={profile} className='api_logo' referrerPolicy="no-referrer" />
                                    <div className='dropwdown_show'> {show ? 
                                    
                                    <div className="profileimage">
                                        <div className="hiden_background_" onClick={profile_none}>
                                        </div>

                                        <li style={{
                                            listStyleType: "none"
                                        }} ><img src={location.state.id.imageUrl} width={"60px"} className='api_logo api_main_Logo' alt='logo' /></li>
                                        <li style={{
                                            listStyleType: "none"
                                        }} className='main_name' > {location.state.id.name} </li>
                                        <hr></hr>
                                        <li style={{
                                            listStyleType: "none"
                                        }} className='List_oflist' onClick={showProfile} ><img src={users} alt='logo' width={"20px"} height={"20px"} />Profile</li>
                                        <li style={{
                                            listStyleType: "none"

                                        }} onClick={logout_form_page} className='List_oflist' >
                                            <GoogleLogout
                                                clientId="11058079117-6tei7409585qvhq86vug5jfnqa0obelr.apps.googleusercontent.com"
                                                render={renderProps => (
                                                    <div> <img src={logout} alt='logo' width={"20px"} height={"20px"} /> <span onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</span></div>
                                                )}
                                                onLogoutSuccess={logout}
                                            >

                                                Logout
                                            </GoogleLogout></li>

                                        <div>
                                            {showprofile ?
                                                <div className='popupdisplay_s'>
                                                    <div className="profile_details">
                                                        <div className="profile_photo">
                                                            <img src={location.state.id.imageUrl} width={"70px"} alt="logo" className='api_logo' />
                                                            <h2>{location.state.id.name}</h2>
                                                        </div>
                                                        <hr></hr>
                                                        <dic className="more_information">
                                                            <table border={"2px"} className='tabe_col' cellPadding={"10px"} cellSpacing={"2px"}>
                                                                <tr className='table_row'>
                                                                    <td className="full_name"><img src={users} alt='logo' style={{marginRight:"10px"}} width={"20px"}/><b>Full Name:</b> {location.state.id.name}</td>
                                                                </tr>
                                                                <tr className='table_row'>
                                                                    <td className="email_address"><img src={gmail} alt='logo' style={{marginRight:"10px"}} width={"20px"}/><b>Email:</b> {location.state.id.email}</td>
                                                                </tr>
                                                                <tr className='table_row'>
                                                                    <td className="email_address"><img src={phone} alt='logo' style={{marginRight:"10px"}} width={"20px"}/><b>Phone No:</b>{location.state.id.Mob}</td>
                                                                </tr>
                                                                <tr className='table_row'>
                                                                    <td className="email_address"><img src={work} alt='logo' style={{marginRight:"10px"}} width={"20px"}/><b>Work Space:</b>{location.state.id.work_space}</td>
                                                                </tr>
                                                                <tr className='table_row'>
                                                                    <td className="email_address"><img src={birth} alt='logo' style={{marginRight:"10px"}} width={"20px"}/><b>Date of Birth:</b>{location.state.id.dateofBirth}</td>
                                                                </tr>
                                                                <tr className='table_row'>
                                                                    <td className="email_address"><img src={education} alt='logo' style={{marginRight:"10px"}} width={"20px"}/><b>Study:</b>{location.state.id.study}</td>
                                                                </tr>
                                                                <tr className='table_row'>
                                                                    <td className="email_address"><img src={address} alt='logo' style={{marginRight:"10px"}} width={"20px"}/><b>Address:</b>{location.state.id.Address}</td>
                                                                </tr>

                                                            </table>
                                                            <div className='edit_profile'>
                                                                <button className='btn_edit_profile' type='button' class="btn btn-success" onClick={Edit_profile}><img src={edit} width={"20px"} alt='edit' className='edit_profile_Logo' /><span>Edit Profile</span></button>
                                                                <button onClick={profile_none}  type="button" class="btn btn-secondary">Cancle</button>
                                                            </div>
                                                            <div>
                                                            </div>
                                                        </dic>
                                                    </div>
                                                </div> :
                                                <div></div>
                                            }
                                        </div>
                                    </div>
                                        :
                                        <div></div>
                                    }</div>

                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Hiden_page