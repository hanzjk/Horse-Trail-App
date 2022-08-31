import React, { useEffect, useState, useLayoutEffect, useMemo } from "react";
import {
  GoogleMap,
  InfoWindow,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Card, Button } from "react-bootstrap";

function Map(props) {
  const [markers, setMarkers] = useState([]);
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    setMarkers(props.markers);
    setTrails(props.trails);
  }, [props]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyD4AcqWdeEZSHk-0EfLG_lSWln2Crg1NF8",
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  // const handleOnLoad = (map) => {
  //   console.log(map);
  //   const google = window.google;

  //   const bounds = new google.maps.LatLngBounds();
  //   markers.map((m) => {
  //     var myLatLng = new google.maps.LatLng(m.position.lat, m.position.lng);
  //     console.log(m.position);
  //     bounds.extend(m.position);
  //   });
  //   map.fitBounds(bounds);
  // };

  if (!isLoaded) return <div>Loading...</div>;
  if (markers.length == 0 || trails.length == 0) return <div>Loading...</div>;

  return (
    <>
      <GoogleMap
        onLoad={(map) => {
          const bounds = new window.google.maps.LatLngBounds();
          trails.map(({ longitude, latitude }) => {
            var lng = parseFloat(longitude);
            var lat = parseFloat(latitude);
            bounds.extend({ lat: lat,lng:lng});
          });
          map.fitBounds(bounds);
          map.setZoom(10);
        }}
        onClick={() => setActiveMarker(null)}
        mapContainerStyle={{ width: "100%", height: "100vh" }}
      >
        {trails.map(
          ({
            id,
            longitude,
            latitude,
            trailName,
            parkName,
            miles,
            trailType,
          }) => {
            const LatLng = { lat: Number(latitude), lng: Number(longitude) };

            return (
              <MarkerF
                key={id}
                label={trailName[0]}
                position={LatLng}
                onClick={() => handleActiveMarker(id)}
                
              >
                {activeMarker === id ? (
                  <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Body>
                        <Card.Text>{parkName}</Card.Text>

                        <Card.Title>{trailName}</Card.Title>
                        <p>
                          {miles} Miles | {trailType}
                        </p>
                        <a href={"/trail-info/" + id}>
                          <Button variant="secondary">View Trail Info</Button>
                        </a>
                      </Card.Body>
                    </Card>
                  </InfoWindow>
                ) : null}
              </MarkerF>
            );
          }
        )}
      </GoogleMap>
    </>
  );
}

export default Map;
