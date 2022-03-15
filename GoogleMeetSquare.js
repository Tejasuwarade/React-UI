import React from 'react';
import './GoogleMeetSquare.css'

export default function GoogleMeetSquare({id, name,email,phone}) {

    // const [mute, setMute] = React.useState(false);

    // function changeMute() {
    //     setMute(!mute);
    //     console.log(isMuted);
    // }
    
    return(
        <div id= "meetSquare">
            {/* <div>{id}</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{phone}</div> */}

            {/* <div>{mute===true?"Unmute":"Mute"}</div> */}
            {/* <div>{isMuted===true?"Yes":"No"}</div> */}
            {/* <button onClick={changeMute}>{mute===true?"Unmute":"Mute"}</button> */}

            <table>
       <tr>
         <th id="id1">{id}</th>
         <th id="name">{name}</th>
         <th id="email">{email}</th>
         <th id="phone">{phone}</th>
       </tr>
  </table>
        </div>    
    )
}
