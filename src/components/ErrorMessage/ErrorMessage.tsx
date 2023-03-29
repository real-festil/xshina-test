import React, { FunctionComponent } from 'react';
import styles from './ErrorMessage.module.scss';

type Props = {
  message: string;
};

const ErrorMessage: FunctionComponent<Props> = ({ message }) => {
  return (
    <div className={styles.error}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
