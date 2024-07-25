import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authActions';

const Navbar = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => !!state.auth.token);

    const handleLogout = () => {
        dispatch(logout());
        
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component={Link} to="/" style={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
                    Product Marketplace
                </Typography>
                <Button component={Link} to="/" color="inherit">
                    Home
                </Button>
                <Button component={Link} to="/cart" color="inherit">
                    Cart
                </Button>
                <Button component={Link} to="/wishlist" color="inherit">
                    Wishlist
                </Button>
                {isAuthenticated ? (
                    <Button onClick={handleLogout} color="inherit">
                        Logout
                    </Button>
                ) : (
                    <>
                        <Button component={Link} to="/login" color="inherit">
                            Login
                        </Button>
                        <Button component={Link} to="/register" color="inherit">
                            Register
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
