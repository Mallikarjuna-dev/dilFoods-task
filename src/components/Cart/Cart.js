import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCart } from '../../redux/actions/cartActions';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);

    const handleRemoveFromCart = (productId) => {
        dispatch(removeCart(productId));
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Shopping Cart
            </Typography>
            <Grid container spacing={4}>
                {cartItems.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt={item.name}
                                height="140"
                                image={item.image}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                                <Typography variant="h6">
                                    ${item.price}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleRemoveFromCart(item.id)}
                                >
                                    Remove from Cart
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Cart;
