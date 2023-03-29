import React, { FunctionComponent, useEffect, useState } from 'react';
import { getAddresses } from '../../api/addresses';
import { Address } from '../../types/address';
import ErrorMessage from '../ErrorMessage';
import Loader from '../Loader';
import ListItem from './ListItem';
import styles from './AddressList.module.scss';

type Props = {
  onClick: (_address: Address) => void;
};

const AddressList: FunctionComponent<Props> = ({ onClick }) => {
  const [addressesData, setAddressesData] = useState<Address[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [activeAddress, setActiveAddress] = useState('');

  const handleGetAddresses = async () => {
    setIsLoading(true);
    try {
      const { pickPoints } = await getAddresses();

      setAddressesData(pickPoints);
    } catch (error) {
      setErrorMessage('Unknown error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetAddresses();
  }, []);

  const handleListItemClick = (address: string) => {
    setActiveAddress(address);
    const currentAddress = addressesData.find(
      (item) => item.address === address,
    );

    if (currentAddress) {
      onClick(currentAddress);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

  return (
    <div className={styles.root}>
      {addressesData.map((address) => (
        <ListItem
          key={address.address}
          {...address}
          onClick={handleListItemClick}
          isActive={address.address === activeAddress}
        />
      ))}
    </div>
  );
};

export default AddressList;
