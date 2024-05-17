import EventSort from "../features/EventSort/EventSort";
import PaginationFeature from "../features/PaginationFeature/PaginationFeature";
import EventsList from "../widgets/EventsList/EventsList";

const EventsPage = () => {
    return (
        <div>
            <EventSort />
            <EventsList />
            <PaginationFeature />
        </div>
    );
};

export default EventsPage;