import { store } from "../../../app/store"
import { setEvents } from "../../../shared/libs/slices/Events"
import { setPages } from "../../../shared/libs/slices/Pages";
import { setSpinnerVisible } from "../../../shared/libs/slices/SpinnerVisible";
import getAllEvents from "../api/getAllEvents"

export default function updateEvents(number: number) {
    store.dispatch(setSpinnerVisible(true));
    return getAllEvents(number)
    .then((response) => {
        store.dispatch(setEvents(response.data.events));
        store.dispatch(setPages(response.data.length))
        store.dispatch(setSpinnerVisible(false));
    })
}