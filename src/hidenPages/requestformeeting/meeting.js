import React, {  useState } from 'react'
import './meeting.css'
import meeting from '../hidenImgaes/online-meeting-scaled.jpg'
import { useLocation, useNavigate } from 'react-router-dom'
function Meeting() {

    var location = useLocation()
    const id = (location.state.id)
    console.log(id)

    var navigate = useNavigate()

    const scehedulemeetings = () => {
        window.location.replace('http://localhost:9000/create',{state:{id:id}});
    }
  
    const [roomNo, setRoomNo] = useState()

    const jointomeeting=()=>{
        window.location.replace(roomNo);
    }


    return (
        <div>

            <div className='meetingDIsplays'>
                <div className='meetingDisplay1'>
                    <h2>Primium Meeting Application </h2>
                    <h1 className='Name_application'>Indian Meeting House</h1>
                    <h4>Broadcast your screen to the world</h4>
                    <span className='tag_line_for_app'>We re-engineered the service we built for secure meeting , Indian Meeitng House, to make it free and available for all </span>

                    <div>
                        <button className='start_new_meeting_button' onClick={scehedulemeetings} >Start New Meeting</button>
                        <input type='text' value={roomNo} onChange={(e) => { setRoomNo(e.target.value) }} className='entercodetojoin' placeholder='Enter link or Code' />
                        <span className='Join_button' onClick={jointomeeting} >Join</span>
                    </div>
                </div>
                <div className='meetingDisplay2'>
                    <img src={meeting} width={"70%"} className='secondary_image_for_host' alt='Meeting' />
                </div>
           </div>

        </div>
    )
}

export default Meeting