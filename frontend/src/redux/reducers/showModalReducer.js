const initialState = {
    showModalEdit: false,
    showModalDelete: false,
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