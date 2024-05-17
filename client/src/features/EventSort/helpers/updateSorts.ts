import { store } from "../../../app/store";
import { setCurrentCount } from "../../../shared/libs/slices/CurrentPage";
import { setSorts } from "../../../shared/libs/slices/SortBy";

export default function updateSort(data: {name: string | undefined, value: number}) {
    store.dispatch(setSorts(data))
    store.dispatch(setCurrentCount(1))
}