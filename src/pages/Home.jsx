import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import { addCart } from '../redux/actions/cartActions';
import { addToWishlist } from '../redux/actions/wishlistActions';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    if (token) {
      dispatch(addCart(product));
    } else {
      alert('Please login to add products to the cart.');
    }
  };

  const handleAddToWishlist = (product) => {
    if (token) {
      dispatch(addToWishlist(product));
    } else {
      alert('Please login to add products to the wishlist.');
    }
  };

  if (!products) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Product Market
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image={product.image}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6">
                  ${product.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddToCart(product)}
                  style={{ marginRight: '10px' }}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleAddToWishlist(product)}
                >
                  Add to Wishlist
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
