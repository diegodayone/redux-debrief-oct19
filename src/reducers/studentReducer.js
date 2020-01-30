export default function (state= {}, action) {
    switch(action.type){
        case "SET_NAME": {
            return {
                ...state,
                name: action.payload
            }
        }
        case "SET_LOADING":{
            return {
                ...state,
                isLoading: true
            }
        }
        case "UNSET_LOADING":{
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state;
    }
}