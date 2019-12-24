import React, {useState, useEffect} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory} from 'react-router-dom';
import { login } from ''
import styles from './AuthStyles.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const changeValue =  (event, field) => {
        if (field === 'email') setEmail(event.target.value);
        if (field ==='password') setPassword(event.target.value);
    }
    
    const login = () => {
        console.log('login')
        const formData = {
            firstName,
            lastName,
            email,
            password
        }

        if (password !== confirmPassword) {
            alert('password and confirmPassword don`t match');
        }
        
        dispatch(login(formData));
    };
    
    return <div className={styles.wrapper}>
        <Form className={styles.form}>
            <div className={styles.loginTitle}>Login</div>
            <Form.Field>
                <label>Email</label>
                <input type='email' placeholder='' value={email} onChange={(e) => changeValue(e, 'email')}/>
            </Form.Field>
            <Form.Field>    
                <label>Password</label>
                <input type = 'password' placeholder='' value={password} onChange={(e) => changeValue(e, 'password')}/>
            </Form.Field>
            <div>
                <Button type='submit' onClick={() => login()}>Submit</Button>
            </div>
        </Form>     
    </div>
}

export default Login;