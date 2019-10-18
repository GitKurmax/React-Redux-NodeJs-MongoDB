export const SHOW_LOADER = 'SHOW_LOADER';
export const DISPLAY = 'DISPLAY';
export const SHOW_MODAL_EDIT = 'SHOW_MODAL_EDIT';
export const SHOW_MODAL_DELETE = 'SHOW_MODAL_DELETE';
export const CHANGE_ADD_INPUT = 'CHANGE_ADD_INPUT';
export const CHANGE_EDIT_INPUT = 'CHANGE_EDIT_INPUT';

export function getAll() {
    return (dispatch) => {
        dispatch(showLoader(true));

    fetch("http://localhost:3100/api/getAll")
        .catch(err => console.log('Error in componentDidMount: ' + err))
        .then(response => {
            if (!response) {
                return [];
            }
            return response.json()
        })
        .then(data => {
          const dataToRender = data.map((user, index) => {
            return {
              id: user._id,
              name: user.name,
              age: user.age,
              position: ++index
            } 
          });
          dispatch(display(dataToRender));
          dispatch(showLoader(false));
      });
    }
}

export function display(data) {
    return {
      type: DISPLAY,
      data,
    };
  }

export function showLoader(trigger) {
    return {
      type: SHOW_LOADER,
      payload: trigger
    };
  }

export function showModalEdit(trigger, id, user) {
    return {
        type: SHOW_MODAL_EDIT,
        payload: trigger,
        id: id,
        user: user
    };
}

export function showModalDelete(trigger, id) {
    return {
        type: SHOW_MODAL_DELETE,
        payload: trigger,
        id: id
    };
}

export function changeAddInput(name, age) {
    return {
        type: CHANGE_ADD_INPUT,
        name: name,
        age: age
    };
}
  
export function changeEditInput(name, age) {
    return {
        type: CHANGE_EDIT_INPUT,
        name: name,
        age: age
    };
}

