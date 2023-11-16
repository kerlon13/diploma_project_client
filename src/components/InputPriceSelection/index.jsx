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
      <div className={styles.filter_wrapper}>
        <div className={styles.filter_inputs_container}>
          <InputLabel sx={{fontWeight:"bold", color:"black", fontSize: "1.2rem", }}>Price</InputLabel>
          <TextField
            sx={{width:"30%"}}
            label="From"
            type="number"
            value={minPrice}
            onChange={handleMinPrice}
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
          />
          <TextField
            sx={{width:"30%"}}
            label="To"
            type="number"
            value={maxPrice}
            onChange={handleMaxPrice}
          />
        </div>
        {isDiscount &&
        <div className={styles.discount_checkbox}>
          <FormControlLabel
            style={{margin: 0}}
            labelPlacement='start'
            control={<Checkbox checked={discount} onChange={handleDiscountChange} />}
            label={<span style={{ fontWeight: 'bold', fontSize:"1.2rem", marginLeft: "0" }}>Discounted items</span>}
          />
        </div>
        }
      </div>
      <div className={styles.sort_wrapper}>
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
    </div>
  );
}

export default InputPriceSelection;

