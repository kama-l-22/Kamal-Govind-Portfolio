import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MapLoction(){
  const defaultProps = {
    center: {
      lat: 8.514191,
      lng: 76.971507
    },
    zoom: 15
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%', borderRadius :'20px'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}