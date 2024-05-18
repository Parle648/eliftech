import { useSelector } from "react-redux";
import EventSort from "../features/EventSort/EventSort";
import PaginationFeature from "../features/PaginationFeature/PaginationFeature";
import InfinityPagination from "../features/iInfinityPagination/InfinityPagination";
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