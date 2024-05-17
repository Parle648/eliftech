import React from 'react';
import styles from './styles/userCard.module.scss';

const UserCard = ({full_name, email}: {full_name: string, email: string}) => {
    return (
        <div className={styles.block}>
            <h2>{full_name}</h2>
            <h2>{email}</h2>
        </div>
    );
};

export default UserCard;