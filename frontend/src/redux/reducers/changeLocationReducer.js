const initialState = {
    registered: false
}

export default function changeLocationReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_REGISTERED_STATUS' : 
        return {
            ...state,
            registered: action.registered
        };
        default: return state;
    }
}