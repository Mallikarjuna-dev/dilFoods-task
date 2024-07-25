import React from 'react';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { filterProducts } from '../redux/actions/productActions';

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(filterProducts(e.target.value));
    };

    return (
        <TextField
            label="Search Products"
            variant="outlined"
            onChange={handleSearch}
        />
    );
};

export default SearchBar;
