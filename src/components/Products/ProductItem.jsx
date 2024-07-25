import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProductItem = ({ product }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography>{product.description}</Typography>
                <Typography>${product.price}</Typography>
            </CardContent>
        </Card>
    );
};

export default ProductItem;
