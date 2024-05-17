import React from 'react';
import styles from './styles/eventSort.module.scss';
import updateSort from './helpers/updateSorts';

const EventSort = () => {

    function changeSorts(event: React.MouseEvent<HTMLOptionElement>) {
        const name = event.currentTarget.dataset.name,
              value = event.currentTarget.value;
              
        updateSort({name: name, value: +value});
    }

    return (
        <form className={styles.block}>
            <select>
                <option onClick={changeSorts} data-name="" value={-1}>sort by </option>
                <option onClick={changeSorts} data-name="title" value={0}>title 0</option>
                <option onClick={changeSorts} data-name="title" value={1}>title 1</option>
                <option onClick={changeSorts} data-name="event_date" value={0}>date 0</option>
                <option onClick={changeSorts} data-name="event_date" value={1}>date 1</option>
                <option onClick={changeSorts} data-name="organizer" value={0}>organizer 0</option>
                <option onClick={changeSorts} data-name="organizer" value={1}>organizer 1</option>
            </select>
        </form>
    );
};

export default EventSort;