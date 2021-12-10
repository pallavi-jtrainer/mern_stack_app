import React, { useEffect, useRef } from "react";

const GMap = () => {
    const mapRef = useRef(null);

    let gmap = null;

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        gmap = initGoogleMap();
        createMarker();
    }, []);

    const initGoogleMap = () => {
        return new window.google.maps.Map(mapRef.current, {
            center: {lat: -34.372, lng: 150.644},
            zoom: 8
        });
    }

    const createMarker = () => new window.google.maps.Marker({
        position: {lat: -34.372, lng: 150.644},
        map: gmap
    });

    return(
        <div 
            ref={mapRef} style={{width: 700, height: 500}}
        >
        </div>
    )
}

export default GMap;