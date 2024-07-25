import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../../redux/actions/wishlistActions';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlistItems = useSelector(state => state.wishlist.wishlistItems);

    const handleRemoveFromWishlist = (productId) => {
        dispatch(removeFromWishlist(productId));
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Wishlist
            </Typography>
            <Grid container spacing={4}>
                {wishlistItems.map((item) => (
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
                                    onClick={() => handleRemoveFromWishlist(item.id)}
                                >
                                    Remove from Wishlist
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Wishlist;
