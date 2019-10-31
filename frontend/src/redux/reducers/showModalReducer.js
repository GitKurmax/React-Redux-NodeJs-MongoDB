const initialState = {
    showModalEdit: false,
    showModalDelete: false,
    showModalAuth: false,
    registered: false,
    id: null,
    user: {
        name: '',
        age: '',
    }
}

export default function showModalReducer(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_MODAL_EDIT' : 
            return {
                ...state,
                showModalEdit: action.payload,
                id: action.id,
                user: action.user
            };
        case 'SHOW_MODAL_DELETE' : 
        return {
            ...state,
            showModalDelete: action.payload,
            id: action.id
        };
        case 'SHOW_MODAL_AUTH' : 
        return {
            ...state,
            showModalAuth: action.payload,
        };
        case 'CHANGE_EDIT_INPUT' : 
            return {
                ...state,
                user: {
                    name: action.name,
                    age: action.age
                }
            };
        default: return state;
    }
}