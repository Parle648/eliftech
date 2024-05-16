import PaginationFeature from "../features/PaginationFeature/PaginationFeature";
import EventsList from "../widgets/EventsList/EventsList";

const EventsPage = () => {
    return (
        <div>
            <EventsList />
            <PaginationFeature />
        </div>
    );
};

export default EventsPage;