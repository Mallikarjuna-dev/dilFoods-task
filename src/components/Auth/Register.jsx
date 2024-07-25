import React, { useState } from 'react'
// import AuthForm from './AuthForm'
import { useDispatch } from 'react-redux'
import { register } from "../../redux/actions/authActions"
import { Container, TextField, Button, Typography } from '@mui/material'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(register(email, password));
    };

    return (
        <Container>
            <Typography variant="h4">Register</Typography>
            <form onSubmit={handleRegister}>
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
                    Register
                </Button>
            </form>
        </Container>
    )
}

export default Register