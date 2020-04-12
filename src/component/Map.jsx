import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import styled from 'styled-components';

const InnerMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={props.position}
    center={props.position}
  >
    <Marker {...props.marker} />
  </GoogleMap>
));

const Map = ({ lat, lng }) => {
  const position = { lat,lng }
  return(
    <InnerMap 
      containerElement={(<div />)}
      mapElement={(<Wrapper />)}
      position={position}
      marker={{ position }}
    />
  )
};

const Wrapper = styled.div`
  height: 400px;
`

export default Map;
