import React, { useState } from 'react';
import "./Put.scss";
import { Button, Form } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { changeAddInput } from '../../redux/actions';

const Put = (props) => {
    let name = useSelector(state => state.inputChangesReducer.addUser.name);
    let age = useSelector(state => state.inputChangesReducer.addUser.age);
    const dispatch = useDispatch();
    
    const handleChange = (field, event) => {
        if (field === 'name') {
            dispatch(changeAddInput(event.target.value, age));
        } else {
            dispatch(changeAddInput(name, event.target.value))
        }
    }

    const addUser = () => {
        props.showLoader(true);
        dispatch(changeAddInput('', ''));

        fetch("http://localhost:5000/api/add", {  
            method: 'POST',  
            headers: {  
                "Content-type": 'application/json'  
            },  
            body: JSON.stringify({name: name, age: age})
            })
            .catch(err => {
                alert('Sorry, you don`t have a connection to database. Check your internet connection pease.');
            })
            .then(() => {
                props.updateData();                
        })
    }
 
    return (
        <div className="put-container">
            <h3>Add user form</h3>
            <Form>
                <Form.Field>
                    <label>Name*</label>
                    <input placeholder='Name' value={name} onChange={(e) => handleChange('name', e)}/>
                </Form.Field>
                <Form.Field>
                    <label>Age*</label>
                    <input placeholder='Age' value={age} onChange={(e) => handleChange('age', e)}/>
                </Form.Field>
                <Button type='submit'
                        onClick={() => addUser()}
                        disabled={name && age ? false:true}
                >Submit</Button>
            </Form>
        </div>
    )
}

export default Put;
