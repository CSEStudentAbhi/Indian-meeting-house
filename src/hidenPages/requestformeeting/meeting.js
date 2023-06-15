import React, { useState } from 'react'
import './meeting.css'
import meeting from '../hidenImgaes/online-meeting-scaled.jpg'
import { useLocation } from 'react-router-dom'
function Meeting() {

    var location = useLocation()
    const id = (location.state.id)
    console.log(id)
    const [card, setCard] = useState(false)
    const [popup, setPopup]=useState()
    const scehedulemeetings = () => {
        setCard(!card)
        // window.location.replace('https://indianmeetinghosemeeting.netlify.app/create',{state:{id:id}});
    }
    const [time, setTime]=useState('00:00')
    const startmeeting = () => {
        // console.log(time)
        if (time<="00:29"){
            console.log(time)
            setPopup("Time must be more than 30")
        }
        else{
            console.log("hi", time)
            window.location.replace('https://indianmeetinghosemeeting.netlify.app/create', { state: { id: id } })
        }
        // window.location.replace('https://indianmeetinghosemeeting.netlify.app/create', { state: { id: id } })
    }

    const [roomNo, setRoomNo] = useState()

    const jointomeeting = () => {
        window.location.replace(roomNo);
    }


    return (
        <div>

            <div className='meetingDIsplays'>
                <div className='meetingDisplay1'>
                    <h2>Premium Meeting Application </h2>
                    <h1 className='Name_application'>Indian Meeting House</h1>
                    <h4>Broadcast your screen to the world</h4>
                    <span className='tag_line_for_app'>We re-engineered the service we built for secure meeting , Indian Meeitng House, to make it free and available for all </span>
                    <div className='room_Entry'>
                        {
                            card ? <div>
                                <div className='backgroungddd' onClick={scehedulemeetings}>
            
                                </div>
                                <div class="card" id='newId' style={{ width: "18rem" }}>
                                    <div class="card-body">
                                        <p class='card-text' style={{color:'red', fontWeight:400}}> {popup} </p>
                                        <h5 class="card-title">Schedule Time</h5>
                                        <h6 class="card-subtitle mb-2 text-body-secondary">Schedule time more than 30 Min</h6>
                                        <p class='card-text'> Format is,  hh:mm </p>
                                        <input type='time' style={{ marginLeft:'32%', marginTop:'%'}} value={time} onChange={(e)=>setTime(e.target.value)} /><br></br><br></br>
                                        <button type="button" class="btn btn-outline-primary" style={{ marginLeft:'35px'}} onClick={startmeeting}>Start New Meeting</button>
                                    </div>
                                </div>

                            </div> : <div></div>
                        }
                    </div>
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