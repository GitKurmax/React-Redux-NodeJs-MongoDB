const initialState = {
    data: [],
    showLoader: false
}

export default function getDataReducer(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_LOADER' : 
            return {
                ...state,
                showLoader: action.payload
            };

        case 'DISPLAY' : 
        return {
            ...state,
            data: action.data
        };
        default: return state;
    }
}