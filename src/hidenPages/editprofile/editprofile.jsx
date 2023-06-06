import React, { useState } from 'react'
import './editprofile.css'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';
function EditProfile() {
  const location = useLocation()
  console.log(location.state)
  const history=useNavigate()
  const [phone, setPhone]=useState()
  const [work_space, setWork_psace]=useState()
  const [date_of_birth, setDate_of_birth]=useState()
  const [study, setStudy]=useState()
  const [address, setAddress]=useState()

  const [resulte, setResults]=useState()

  const upadates={
    Mobile_No:phone,
    Work_space:work_space,
    Date_of_Birth:date_of_birth,
    study:study,
    Address:address
  }

  const placeholder={
    mob:location.state.id.id.Mob,
    wk:location.state.id.id.work_space,
    date:location.state.id.id.dateofBirth,
    std:location.state.id.id.study,
    add:location.state.id.id.Address
  }

  console.log(placeholder)

  const id=location.state.id.id.id
  console.log(id)

  console.log(upadates)

  const UpdateUser=async ()=>{
    await axios.post(`https://colorful-neckerchief-toad.cyclic.app/update/${id}`,upadates)
    .then((res)=>{
      setResults(res.data.message)
      setTimeout(() => {
        setResults("")
        history("/login")
      }, 3000)

    })
  }

  return (
    <div className='background_color_edit'>
      <div className='form_background'>
      
        <from>
          <div className="dispalytype">
      <div className='update_result'>
        {
          resulte
        }
      </div>
            <div>
              <img src={location.state.id.id.imageUrl} alt='profile' width={"100px"} className='lgogogogo' />
            </div>
            <div className='input_type_edit'>
              <label>Name</label>
              <input type='text' value={location.state.id.id.name} title='You cannot Update Name' className='input_readable' readOnly />
            </div>
            <div className='input_type_edit'>
              <label>Email</label>
              <input type='text' value={location.state.id.id.email} title='You cannot Update Email' className='input_readable' readOnly />
            </div>
            <div className='input_type_edit'>
              <label>Phone No </label>
              <input type='text' maxLength={10} value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder={placeholder.mob} className='input_readable' />
            </div>
            <div className='input_type_edit'>
              <label>Work Space </label>
              <input type='text' value={work_space} onChange={(e)=>{setWork_psace(e.target.value)}} placeholder={placeholder.wk} className='input_readable' />
            </div>
            <div className='input_type_edit'>
              <label>Date of Birth </label>
              <input type='date' value={date_of_birth} onChange={(e)=>{setDate_of_birth(e.target.value)}} placeholder={placeholder.date} className='input_readable' />
            </div>
            <div className='input_type_edit'>
              <label>Study </label>
              <input type='text' value={study} onChange={(e)=>{setStudy(e.target.value)}} placeholder={placeholder.std} className='input_readable' />
            </div>
            <div className='input_type_edit'>
              <label>Address </label>
              <input type='text' value={address} onChange={(e)=>{setAddress(e.target.value)}} placeholder={placeholder.add} className='input_readable' />
            </div>
            <div className="input_type_edit">
              <input type='submit' value={"Update"} className='Update_btN' onClick={UpdateUser} />
            </div>
          </div>
        </from>
        <p style={{textAlign:"center"}} className='update_result' >After Update Please Login once agian</p>
      </div>
    </div>
  )
}

export default EditProfile