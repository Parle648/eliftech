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
                <option onClick={changeSorts} data-name="title" value={0}>title from z to a</option>
                <option onClick={changeSorts} data-name="title" value={1}>title from a to z</option>
                <option onClick={changeSorts} data-name="event_date" value={0}>date from new to old</option>
                <option onClick={changeSorts} data-name="event_date" value={1}>date from old to new</option>
                <option onClick={changeSorts} data-name="organizer" value={0}>organizer z to a</option>
                <option onClick={changeSorts} data-name="organizer" value={1}>organizer a to z</option>
            </select>
        </form>
    );
};

export default EventSort;
