import { createStore} from "redux"
import reducer from "../reducers"

const initialState = {
    student: {
        name: "",
        surname: "",
        age: null
    },
    isLoading: false
}

export default function configureStore() {
    return createStore(
        //reducer will be here,
        reducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}