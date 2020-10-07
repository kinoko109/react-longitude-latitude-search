import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import styled from 'styled-components';

const InnerMap = withGoogleMap(({position, marker}) => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={position}
    center={position}
  >
    <Marker {...marker} />
  </GoogleMap>
));

const Map = ({ lat, lng }) => {
  const position = { lat,lng };

  return(
    <InnerMap 
      containerElement={(<div />)}
      mapElement={(<Wrapper />)}
      position={position}
      marker={{position}}
    />
  )
};

const Wrapper = styled.div`
  height: 400px;
`

export default Map;
