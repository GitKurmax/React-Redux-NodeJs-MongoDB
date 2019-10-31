import React, { useState } from 'react';
import "./List.scss";
import { Icon, Label, Table } from 'semantic-ui-react';
import ModalWindow from '../modal/ModalWindow';
import { useSelector, useDispatch } from 'react-redux';
import { showModalDelete, showModalEdit, showModalAuth } from '../../redux/actions';
import { withRouter } from 'react-router-dom';

const List = (props) => {
    const displayModalDelete = useSelector(state => state.showModalReducer.showModalDelete);
    const displayModalEdit = useSelector(state => state.showModalReducer.showModalEdit);
    const displayModalAuth = useSelector(state => state.showModalReducer.showModalAuth);
    const isRegistered = useSelector(state => state.showModalReducer.registered);
    const dispatch = useDispatch();
    const id = useSelector(state => state.showModalReducer.id);

    const showModal = (action, id, editName, editAge) => {
        if (action === 'delete' && isRegistered) {
            dispatch(showModalDelete(true, id));
        }

        if (action === 'edit' && isRegistered) {
            dispatch(showModalEdit(true, id, {name: editName, age: editAge}));
        }
        if (!isRegistered) {
            dispatch(showModalAuth(true));
        }
    }

    const closeModal = () => {
        dispatch(showModalDelete(false, id));
        dispatch(showModalEdit(false, id, {}));
        dispatch(showModalAuth(false));
    }

    const deleteUser = () => {
      props.showLoader(true); 
      fetch("http://localhost:3100/api/removeUser", {  
        method: 'POST',  
        headers: {  
          "Content-type": 'application/json'  
        },  
        body: JSON.stringify({id})
      })
      .catch(err => console.log('Error in deleteUser' + err))
      .then(() => {
            props.toggleUpdateData();
        })
    }

    const editUser = (name, age) => {
        props.showLoader(true); 
        fetch("http://localhost:3100/api/editUser", {  
          method: 'PUT',  
          headers: {  
            "Content-type": 'application/json'  
          },  
          body: JSON.stringify({id: id, name: name, age: age})
        })
        .catch(err => console.log('Error in editUser' + err))
        .then(() => {
            props.toggleUpdateData();
          })
      }

      const register = () => {
        props.history.push('/register');
      }

      const list = props.data.map(user => 
        <Table.Row key={user.id + user.position}>
            <Table.Cell className="cell-position">{user.position}</Table.Cell>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.age}</Table.Cell>
            <Table.Cell className="cell-edit">
                <Icon link name='edit' onClick={() => showModal('edit', user.id, user.name, user.age)}/>
                <Icon link name='trash alternate' onClick={() => showModal('delete', user.id)}/>
            </Table.Cell>
        </Table.Row>
      )

    return (
        <React.Fragment>
            {displayModalDelete && 
                <ModalWindow 
                open={displayModalDelete}
                closeModal={closeModal}
                deleteUser={deleteUser}
                showDelete={showModal}
            />}
            {displayModalEdit && 
                <ModalWindow 
                open={displayModalEdit}
                closeModal={closeModal}
                editUser={editUser}
                showEdit={showModal}
            />}
            {displayModalAuth && 
                <ModalWindow 
                open={displayModalAuth}
                closeModal={closeModal}
                showAuth={showModal}
                register={register}
                // login={login}
            />}


            <div className="list-container">
                <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            <Label ribbon>No</Label>
                        </Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                        <Table.HeaderCell>Edit</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {list}
                </Table.Body>
                </Table>
            </div>
        </React.Fragment>
    )
}

export default withRouter(List);
