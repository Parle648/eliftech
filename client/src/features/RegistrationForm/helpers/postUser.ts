import { store } from "../../../app/store";
import { setSpinnerVisible } from "../../../shared/libs/slices/SpinnerVisible";
import createUser from "../api/createUser";

export default function postUser(data: any) {
    store.dispatch(setSpinnerVisible(true));
    return createUser(data)
    .then((response) => {
        store.dispatch(setSpinnerVisible(false));
    })
}