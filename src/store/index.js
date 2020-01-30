import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import studentReducer from "../reducers/studentReducer"
import libraryReducer from "../reducers/libraryReducer"
import thunk from "redux-thunk"

const initialState = {
    student: {
        name: "",
        surname: "",
        age: null
    },
    books: [],
    isLoading: false
}

const aggregatedReducer = combineReducers({
    books: libraryReducer,
    student: studentReducer
})

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore() {
    return createStore(
        //reducer will be here,
        aggregatedReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    )
}