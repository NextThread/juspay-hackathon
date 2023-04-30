// import { useState, useContext, useEffect } from "react";
// import ReactMapGL from "react-map-gl"
// import "mapbox-gl/dist/mapbox-gl.css";
// import Marker from "react-map-gl";
// import { FaMapMarkerAlt } from "react-icons/fa";

// const TOKEN = process.env.REACT_APP_TOKEN;
// const style = {
//   wrapper: `flex-1 h-full w-full`,
// }
// function Map() {
//   const [newPlace, setNewPlace] = useState(null);
//   const [viewport, setViewport] = useState({
//     latitude: 12.6448,
//     longitude: 77.216721,
//     zoom: 10,
//     container: 'map'
//   });
// // return <div className={style.wrapper} id='map' />

// function handleClick(e){
//   console.log("newPlace")

//   const {longitude,latitude}=e.lngLat;

//   setNewPlace({
//     lat: latitude,
//     long: longitude
//   });
// }
//   return (
//     <div style={{height: "100vh", width: "100%", zIndex: 999 }}>
//       <ReactMapGL
//         {...viewport}
//         mapboxApiAccessToken="pk.eyJ1IjoiYW51a2FscDE3MjMiLCJhIjoiY2xnc2J4YjZzMThiNjN0bW1tMnBwMGcxZyJ9.9d_M2_z_GerQKOkmy4gvGQ"
//         width="100%"
//         height="100%"
//         transitionDuration="200"
//         mapStyle="mapbox://styles/anukalp1723/clgswqgjk001c01pg7emzdoba"
//         onViewportChange={(viewport) => setViewport(viewport)}
//         onDblClick={handleClick}
//       >
//       {newPlace ? (
//         <>
//          <Marker 
//           latitude={newPlace?.lat}
//           longitude={newPlace?.long}
//           offsetLeft={-3.5*viewport.zoom}
//           offsetTop={-7*viewport.zoom}
//          >
//           <FaMapMarkerAlt 
//             style={{
//               fontSize:7*viewport.zoom,
//               color: "tomato",
//               cursor: "pointer",
//             }}
//           />
//          </Marker>
//         </>
//       ):null}
//       </ReactMapGL>
//     </div>
//   );
// }


// export default Map


import { useEffect, useContext } from 'react'
import mapboxgl from 'mapbox-gl'
import { UberContext } from '../context/uberContext'

const style = {
  wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = 'pk.eyJ1IjoiYW51a2FscDE3MjMiLCJhIjoiY2xnc2J4YjZzMThiNjN0bW1tMnBwMGcxZyJ9.9d_M2_z_GerQKOkmy4gvGQ'

const Map = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/anukalp1723/clgswqgjk001c01pg7emzdoba',
      center: [-99.29011,39.39172],
      zoom: 5,
    })

    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates)
    }

    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates)
    }

    // if (pickupCoordinates && dropoffCoordinates) {
    //   map.fitBounds([dropoffCoordinates, pickupCoordinates], {
    //     padding: 400,
    //   })
    // }
  }, [pickupCoordinates, dropoffCoordinates])

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
  }

  return <div className={style.wrapper} id='map' />
}

export default Map
