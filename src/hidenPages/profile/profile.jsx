import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import edit from '../hidenImgaes/profile_edit.png'

function Profile() {
    var navigate=useNavigate
    var location=useLocation
    console.log(location)
    const Edit_profile = () => {
        const id = (location.state)
        navigate("/editprofile", { state: { id: id } })
    }
  return (
    <div><div className='popupdisplay'>
    <div className="profile_details">
        <div className="profile_photo">
            <img src={location.state.id.imageUrl} width={"70px"} alt="logo" className='api_logo' />
            <h2>{location.state.id.name}</h2>
        </div>
        <hr></hr>
        <div className="more_information">
            <table border={"2px"} className='tabe_col' cellPadding={"10px"} cellSpacing={"2px"}>
                <tr className='table_row'>
                    <td className="full_name"><b>Full Name:</b> {location.state.id.name}</td>
                </tr>
                <tr className='table_row'>
                    <td className="email_address"><b>Email Address:</b> {location.state.id.email}</td>
                </tr>
                <tr className='table_row'>
                    <td className="email_address"><b>Phone No:</b>{location.state.id.Mob}</td>
                </tr>
                <tr className='table_row'>
                    <td className="email_address"><b>Work Space:</b>{location.state.id.work_space}</td>
                </tr>
                <tr className='table_row'>
                    <td className="email_address"><b>Date of Birth:</b>{location.state.id.dateofBirth}</td>
                </tr>
                <tr className='table_row'>
                    <td className="email_address"><b>Study:</b>{location.state.id.study}</td>
                </tr>
                <tr className='table_row'>
                    <td className="email_address"><b>Address:</b>{location.state.id.Address}</td>
                </tr>

            </table>
            <div className='edit_profile'>
                <button className='btn_edit_profile' onClick={Edit_profile}><img src={edit} width={"20px"} alt='edit' className='edit_profile_Logo' /><span>Edit Profile</span></button>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Profile