import { store } from "../../../app/store";
import { setUsers } from "../../../shared/libs/slices/Users";
import getUsers from "../api/getUsers";

export default function updateUsers(url: string) {
    getUsers(url)
    .then(response => store.dispatch(setUsers(response.data)));
};