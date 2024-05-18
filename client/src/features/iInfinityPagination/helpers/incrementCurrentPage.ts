import { store } from "../../../app/store";
import { incrementCurrent } from "../../../shared/libs/slices/CurrentPage";

export default function incrementCurrentPage() {
    store.dispatch(incrementCurrent());
}