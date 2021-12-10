import React, {useState, useEffect } from "react";
//import { useParams } from "react-router";
import GMap from './GMap'

const GOOGLE_MAP_API = "AIzaSyCGizGTqHTUhcvZczMdoSh6yJjrQtxCqyU";

const loadGoogleMap = (data) => {
    if(typeof window.google === 'object' && typeof window.google.maps === 'object') {
        data();
    } else {
        const googleMapScript = document.createElement("script");
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API}`;
        window.document.body.appendChild(googleMapScript);
        googleMapScript.addEventListener("load", data);
    }
}

const Dummy = () => {
    const [loadMap, setLoadMap] = useState(false);

    useEffect(() => {
        loadGoogleMap(() => {
            setLoadMap(true);
        })
    }, [])

    return(
        <div>
            {!loadMap ? <div>Loading....</div> : <GMap/>}
        </div>
    )
}
// const Dummy = (props) => {
//     const {id} = useParams();


//     return(  
//         <div>
//             <h1>User id: {id}</h1>
//         </div>
//     )
// }

export default Dummy;