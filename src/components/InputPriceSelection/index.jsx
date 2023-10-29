import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styles from './index.module.css';
import { InputLabel } from '@mui/material';

function InputPriceSelection({isDiscount, discount, handleDiscountChange, sortOption, handleSortChange}) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  
  // const [pageSortOption, setPageSortOption] = useState(sortOption);

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  // const handleSortChange = (event) => {
  //   setPageSortOption(event.target.value);
  // };

  return (
    <div className={styles.input_wrapper}>
      <InputLabel>Price</InputLabel>
      <TextField
        label="From"
        type="number"
        value={from}
        onChange={handleFromChange}
      />
      <TextField
        label="To"
        type="number"
        value={to}
        onChange={handleToChange}
      />
      {isDiscount &&
      <FormControlLabel
        labelPlacement='start'
        control={<Checkbox checked={discount} onChange={handleDiscountChange} />}
        label="Discounted items"
      />
      }

      <InputLabel>Sorted</InputLabel>
      <Select
          value={sortOption}
          onChange={handleSortChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="default">
            <em>by default</em>
          </MenuItem>
          <MenuItem value="priceAsc">Price (Low to High)</MenuItem>
          <MenuItem value="priceDesc">Price (High to Low)</MenuItem>
          <MenuItem value="titleAsc">Title (A to Z)</MenuItem>
          <MenuItem value="titleDesc">Title (Z to A)</MenuItem>
        </Select>
    </div>
  );
}

export default InputPriceSelection;

