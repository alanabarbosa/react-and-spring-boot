import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/styles.css';

import api from '../../services/api'

import logoImage from '../../assets/logo.svg';
import padlock from '../../assets/padlock.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');    

    const history = useNavigate();

    const login = async (event) => {
        event.preventDefault();

        const data = {
            username,
            password,
        };

        try {
            const response = await api.post('auth/signin', data);

            localStorage.setItem('username', username);
            localStorage.setItem('accessToken', response.data.accessToken);

            history('/books');
        } catch(err) {
            console.error(err); 
            alert('Login failed! Try agains!')
        }
    }

    return (
        <>
         <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="logo" />
                <form onSubmit={login}>
                    <h1>Access your Account</h1>
                    <input 
                        type="UserName" 
                        placeholder={username} 
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input 
                        type="Password" 
                        placeholder={password} 
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button 
                    className="button" 
                    type="submit">Login</button>
                </form>
            </section>
            <img src={padlock} alt="login" />
         </div>
        </>
    )
}

export default Login;