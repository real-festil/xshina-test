import React, { useRef, useState } from 'react';
import AddressList from '../../components/AddressList';
import Map from '../../components/Map';
import { Address } from '../../types/address';
import styles from './Home.module.scss';

const Home = () => {
  const [activeAddress, setActiveAddress] = useState<Address>();

  const mapRef = useRef<HTMLDivElement>(null);

  const handleAddressClick = (address: Address) => {
    setActiveAddress(address);

    if (mapRef && mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.root}>
      <AddressList onClick={handleAddressClick} />
      <Map
        ref={mapRef}
        lat={activeAddress?.latitude}
        lng={activeAddress?.longitude}
      />
    </div>
  );
};

export default Home;
