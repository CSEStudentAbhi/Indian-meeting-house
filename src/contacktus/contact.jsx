import axios from 'axios';
import React, { useEffect, useState } from 'react'



function Contact() {
    const [allmessages, setAllmessages] = useState([])
    useEffect(() => {
        async function fetchData() {
            const responce = await axios.get('https://colorful-neckerchief-toad.cyclic.app/contacts');
            const data = responce.data.message
            setAllmessages(data)
        }
        fetchData()
    }, [])
    const [id, setId]=useState([])
    const reply=(e)=>{
        console.log(e.current.allmessages)
    }
    console.log(allmessages)
    return (
        <div>
            <h1>Contact</h1>
            <div>
                <div className='messagebox'>
                    <h4>Messages</h4>
                    {
                        allmessages.map((item, index) => {
                            return (
                                <div className='submessagebox' >
                                    <h5 className='messageitems'>
                                        {
                                            item.email
                                        }
                                        <div></div>
                                    </h5>
                                    <p className='messagees'>
                                        {
                                            item.message
                                        }
                                        <button onClick={reply} style={{
                                            float: "right",
                                            backgroundColor:"#1B9C85",
                                            border:"none",
                                            borderRadius:"8px",
                                            margin:"5px",
                                            color:"white"
                                            
                                        }}>Reply</button>
                                        <button style={{
                                            float: "right",
                                            backgroundColor:"#D21312",
                                            border:"none",
                                            borderRadius:"8px",
                                            margin:"5px",
                                            color:"white"
                                        }}>Delete</button>
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </div>
    )
}



export default Contact
