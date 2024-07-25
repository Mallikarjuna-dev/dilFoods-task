import React, { useState } from 'react'
// import AuthForm from './AuthForm'
import { useDispatch } from "react-redux"
import { login } from "../../redux/actions/authActions"
import { Container, TextField, Button, Typography } from '@mui/material'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
        <Container>
            <Typography variant="h4">Login</Typography>
            <form onSubmit={handleLogin}>
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </form>
        </Container>
    )
}

export default Login;