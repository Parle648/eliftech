import React from 'react';
import styles from './styles/eventCard.module.scss';
import { IEvent } from './types/IEvent';

const EventCard = ({title, description, event_date, organizer}: IEvent) => {
    return (
        <div className={styles.block}>
            <h2>{title}</h2>
            <p className={styles.description}>
                {description}
            </p>
            <div className={styles.flexbox}>
                <span>{event_date}</span> <span>{organizer}</span>
            </div>
        </div>
    );
};

export default EventCard;