import EventCard from '../../entities/EventCard/EventCard';
import styles from './styles/eventsList.module.scss';

const EventsList = () => {
    return (
        <div className={styles.block}>
            <EventCard title="asdas" description="asdas" event_date="12.02.2034" organizer="asd" />
            <EventCard title="asdas" description="asdas" event_date="12.02.2034" organizer="asd" />
            <EventCard title="asdas" description="asdas" event_date="12.02.2034" organizer="asd" />
            <EventCard title="asdas" description="asdas" event_date="12.02.2034" organizer="asd" />
            <EventCard title="asdas" description="asdas" event_date="12.02.2034" organizer="asd" />
            <EventCard title="asdas" description="asdas" event_date="12.02.2034" organizer="asd" />
            <EventCard title="asdas" description="asdas" event_date="12.02.2034" organizer="asd" />
            <EventCard title="asdas" description="asdas" event_date="12.02.2034" organizer="asd" />
            <EventCard title="asdas" description="asdas" event_date="12.02.2034" organizer="asd" />
        </div>
    );
};

export default EventsList;