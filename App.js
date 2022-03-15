import React ,{useState,useEffect}from "react";
import GoogleMeetSquare from "./GoogleMeetSquare";
// import DataGrid from './DataGrid';



async function Data_extract() {

    let response=await fetch('http://jsonplaceholder.typicode.com/users');
     let data = await response.json();
     console.log(data);
    return (data);

} 



export default function App() {


    const [users,setUsers]=useState([]);

    useEffect( async function(){
        let temp=await Data_extract();
        setUsers(temp);
    },[])



    function makeSquare (jdata) {
        return(
            <GoogleMeetSquare id={jdata.id} name={jdata.name} email={jdata.email} phone={jdata.phone} />
        )
    }

    return(
            users.map(makeSquare)
            // <DataGrid users={users}/>
    )
}


// export default function App() {


//     fetchApi();
// //     let tempd = fetchApi();
// //     console.log(tempd);
// //    function makeSquare (tempd) {
    
// //     return(
// //         <GoogleMeetSquare Id={tempd.id} name={tempd.name} />
// //     )
// // }
// // return(
// //      tempd.map(makeSquare) 
// // )
// }



// function fetchApi()
//  {
//     fetch('http://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(data => {
//              console.log(data);
//              function makeSquare (data) {
    
//                 return(
//                     <GoogleMeetSquare Id={data} name={data.name} />
//                 )
//             }
//              data.map(makeSquare(data))

//             //  return(data);
//             //  return(data);

//             //  console.log(data[0].id)
//             //  console.log(data[0].name)
             
//     })
//             .catch(err => alert("wrong City Name!"))
//  }
            // return(
            //     data.map(makeSquare)
            // )

