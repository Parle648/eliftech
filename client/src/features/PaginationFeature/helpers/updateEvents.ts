import { store } from "../../../app/store"
import { setEvents } from "../../../shared/libs/slices/Events"
import { setPages } from "../../../shared/libs/slices/Pages";
import { setSpinnerVisible } from "../../../shared/libs/slices/SpinnerVisible";
import getAllEvents from "../api/getAllEvents"

export default function updateEvents(number: number, sorts: any) {
    console.log(`https://eliftech-ecpp.onrender.com/event/pages/${number}${sorts.name === '' ? '' : `?name=${sorts.name}&value=${sorts.value}`}`);
    
    store.dispatch(setSpinnerVisible(true));
    return getAllEvents(`https://eliftech-ecpp.onrender.com/event/pages/${number}${sorts.name === '' ? '' : `?name=${sorts.name}&value=${sorts.value}`}`)
    .then((response) => {
        store.dispatch(setEvents(response.data.events));
        store.dispatch(setPages(response.data.length))
        store.dispatch(setSpinnerVisible(false));
    })
}