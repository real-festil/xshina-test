import React, { forwardRef, useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import styles from './Map.module.scss';
import Marker from '../../assets/svg/Marker';

type Props = {
  lat?: number;
  lng?: number;
};

const Map = forwardRef<HTMLDivElement, Props>(({ lat, lng }, ref) => {
  const [center, setCenter] = useState({
    lat: 10.99835602,
    lng: 77.01502627,
  });

  useEffect(() => {
    if (lat && lng) {
      setCenter({ lat, lng });
    }
  }, [lat, lng]);

  return (
    <div className={styles.root} ref={ref}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        center={center}
        defaultZoom={11}
      >
        {lat && lng && <Marker lat={lat} lng={lng} />}
      </GoogleMapReact>
    </div>
  );
});

export default Map;
