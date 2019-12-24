import React, {useState, useEffect} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import styles from './AuthStyles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory} from 'react-router-dom'
import { checkAndSaveToDB } from '../../redux/actions';
import Loader from '../loader/Loader';

const Registration = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const loaderTrigger = useSelector(state => state.getDataReducer.showLoader);
    const registered = useSelector(state => state.changeLocationReducer.registered);
    const history = useHistory();

    useEffect(() => {
        if (registered) {
            history.push('/login');
        }
    }, [registered])

const addUser = async () => {
    const formData = {
        firstName,
        lastName,
        email,
        password
    }

    if (password !== confirmPassword) {
        alert('password and confirmPassword don`t match');
    }

    if (password === confirmPassword) {
        await dispatch(checkAndSaveToDB(formData));
    }
}

const changeValue =  (event, field) => {
    if (field === 'firstName') setFirstName(event.target.value);
    if (field ==='lastName') setLastName(event.target.value);
    if (field === 'email') setEmail(event.target.value);
    if (field ==='password') setPassword(event.target.value);
    if (field ==='confirmPassword') setConfirmPassword(event.target.value);
}

    return <div className={styles.wrapper}>
        {loaderTrigger && <Loader/>}
        <Form className={styles.form}>
            <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' value={firstName} onChange={(e) => changeValue(e, 'firstName')}/>
            </Form.Field>
            <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' value={lastName} onChange={(e) => changeValue(e, 'lastName')}/>
            </Form.Field>
            <Form.Field>
            <label>Email</label>
            <input type='email' placeholder='' value={email} onChange={(e) => changeValue(e, 'email')}/>
            </Form.Field>
            <Form.Field>    
            <label>Password</label>
            <input type = 'password' placeholder='' value={password} onChange={(e) => changeValue(e, 'password')}/>
            </Form.Field>
            <Form.Field>
            <label>Confirm password</label>
            <input type = 'password' placeholder='' value={confirmPassword} onChange={(e) => changeValue(e, 'confirmPassword')}/>
            </Form.Field>
            <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit' onClick={() => addUser()}>Submit</Button>
        </Form>     
    </div>
}

export default Registration;
