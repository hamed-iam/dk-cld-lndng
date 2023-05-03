import React from "react";
import GoogleMapReact from "google-map-react";
import { GoogleMapsStyledWrapper } from "./addressSection.style";

// ! cannot proceed further until api-key is provided

const AnyReactComponent: any = ({ text }: any) => <div>{text}</div>;

export default function GoogleMaps() {
  const defaultProps = {
    center: {
      lat: 35.762330500852926,
      lng: 51.40548300771316,
    },
    zoom: 17,
  };

  return (
    // Important! Always set the container height explicitly
    // ! not a valid api key
    <GoogleMapsStyledWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyArAlGMMvreircH6LgluU4xHTBDJR7KBzs" }}
        defaultCenter={defaultProps.center}
        yesIWantToUseGoogleMapApiInternals
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </GoogleMapsStyledWrapper>
  );
}
