import { store } from "../../../app/store";
import { setSpinnerVisible } from "../../../shared/libs/slices/SpinnerVisible";
import { setUsers } from "../../../shared/libs/slices/Users";
import getUsers from "../api/getUsers";

export default function updateUsers(url: string) {
    store.dispatch(setSpinnerVisible(true));
    getUsers(url)
    .then(response => store.dispatch(setUsers(response.data)))
    .finally(() => store.dispatch(setSpinnerVisible(false)));
};