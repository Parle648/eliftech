import { store } from "../../../app/store";
import { setCurrentCount } from "../../../shared/libs/slices/CurrentPage";

export default function updateCurrentCount(number: number) {
    store.dispatch(setCurrentCount(number));
}