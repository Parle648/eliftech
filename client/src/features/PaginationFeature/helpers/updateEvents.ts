import { store } from "../../../app/store"
import { setEvents } from "../../../shared/libs/slices/Events"
import { setPages } from "../../../shared/libs/slices/Pages";
import { setSpinnerVisible } from "../../../shared/libs/slices/SpinnerVisible";
import getAllEvents from "../api/getAllEvents"

export default function updateEvents(number: number, sorts: any) {
    console.log(`http://localhost:3001/event/pages/${number}${sorts.name === '' ? '' : `?name=${sorts.name}&value=${sorts.value}`}`);
    
    store.dispatch(setSpinnerVisible(true));
    return getAllEvents(`http://localhost:3001/event/pages/${number}${sorts.name === '' ? '' : `?name=${sorts.name}&value=${sorts.value}`}`)
    .then((response) => {
        store.dispatch(setEvents(response.data.events));
        store.dispatch(setPages(response.data.length))
        store.dispatch(setSpinnerVisible(false));
    })
}