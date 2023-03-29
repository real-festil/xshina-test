import React, { FunctionComponent } from 'react';
import { Address } from '../../../types/address';
import styles from './ListItem.module.scss';

type Props = { onClick: (_address: string) => void; isActive: boolean } & Pick<
  Address,
  'address' | 'budgets'
>;

const ListItem: FunctionComponent<Props> = ({
  address,
  budgets,
  onClick,
  isActive,
}) => {
  return (
    <button
      className={`${styles.item} ${isActive ? styles.active : ''}`}
      type="button"
      onClick={() => onClick(address)}
    >
      <h5 className={styles.itemTitle}>{address}</h5>
      <ul className={styles.itemList}>
        {budgets.map((budget) => (
          <li key={budget}>{budget}</li>
        ))}
      </ul>
    </button>
  );
};

export default ListItem;
