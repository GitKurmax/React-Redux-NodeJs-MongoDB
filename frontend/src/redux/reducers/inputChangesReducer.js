const initialState = {
    addUser: {
        name: '',
        age: ''
    },
    editUser: {
        name: '',
        age: ''
    }
}

export default function inputChangesReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_ADD_INPUT' : 
            return {
                ...state,
                addUser: {
                    name: action.name,
                    age: action.age
                }
            };
        default: return state;
    }
}