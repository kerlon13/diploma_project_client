import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styles from './index.module.css';
import { InputLabel } from '@mui/material';

function InputPriceSelection({
  isDiscount, 
  discount, 
  handleDiscountChange, 
  sortOption, 
  handleSortChange, 
  handleMinPrice, 
  handleMaxPrice, 
  minPrice, 
  maxPrice
}) {

  return (
    <div className={styles.input_wrapper}>
      <InputLabel sx={{fontWeight:"bold", color:"black", fontSize: "20px", marginRight:"15px"}}>Price</InputLabel>
      <TextField
        sx={{width:"100px", marginRight:"15px"}}
        label="From"
        type="number"
        value={minPrice}
        onChange={handleMinPrice}
      />
      <TextField
        sx={{width:"100px", marginRight:"40px"}}
        label="To"
        type="number"
        value={maxPrice}
        onChange={handleMaxPrice}
      />
      {isDiscount &&
      <FormControlLabel
        sx={{marginRight: "90px"}}
        labelPlacement='start'
        control={<Checkbox checked={discount} onChange={handleDiscountChange} />}
        label={<span style={{ fontWeight: 'bold', fontSize:"20px" }}>Discounted items</span>}
      />
      }

      <InputLabel sx={{fontWeight:"bold", color:"black", fontSize: "20px", marginRight:"40px"}}>Sorted</InputLabel>
      <Select
        sx={{width: "220px"}}
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

