//import * as React from 'react';
import { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Box, Chip, InputBase, ListItem, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useStyles, colors } from '../utils/style';
import { cities } from '../utils/locations';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function City() {
  const classes = useStyles();
  const [suggestedCity, setsuggestedCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCities, setSelectedCities] = useState([]);
  const [inputCity, setInputCity] = useState('');
  const [cityDisplay, setCityDisplay] = useState(false);

  const addToSelectedCities = (city) => {
    if(!city){
      return;
    }
    const f = selectedCities.filter((item) => item !== city);
    setSelectedCities([...f, city]);
    console.log(JSON.stringify(selectedCities));
  }

  useEffect(() => {
    searchCity(inputCity);
    addToSelectedCities(selectedCity);
  }, [inputCity, selectedCity]);

  const handleDisplay = (display) => {
    setCityDisplay(display);
  };
  
  const searchCity = (text) => {
    if (!text) {
      setsuggestedCity([]);
      return;
    }
    const suggestions = [];
    for (let i = 0; i < cities.length; i++) {
      const cty = cities[i].toLowerCase().search(text.toLowerCase().charAt(0));
      if (cty >= 0) {
        suggestions.push(cities[i]);
      }
      if (suggestions.length > 20) {
        break;
      }
    }
    setsuggestedCity(suggestions);
  }
  
  const deleteSelectedCity = (city) => {
    setSelectedCities(() => selectedCities.filter((item) => item !== city));
  }
  
  return (
    <Box className={`${classes.lightBackground}`}>
      <Box pl={2} pr={2} pt={1}>
        <StyledInputBase className={`${classes.rad5} ${classes.w100p}`} style={{ backgroundColor: colors.gray[3] }}
          placeholder="Enter City Name"
          inputProps={{ 'aria-label': 'search' }}
          value={inputCity}
          onChange={e => {setInputCity(e.target.value);handleDisplay(true)}}
        />
      </Box>
      {/* the suggestions is expected to hide whenever a city is selected */}
      <Box className={`${classes.centered} ${classes.maxHeight300} ${cityDisplay ? classes.show : classes.hide }`} style={{ width: '200px' }}>
        {
          suggestedCity.map((item) => (
            <Box 
              onClick={e => {setSelectedCity(item); handleDisplay(false)}}
              p={1} 
              className={`${classes.borderDefault} ${classes.lightBackground} ${classes.pointer}`}>
              {item}
            </Box>
          ))
        }
      </Box>
      <Box className={`${classes.centered}`} style={{ width: '200px' }}>
      <Paper
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            listStyle: 'none',
            p: 0.5,
            m: 0,
          }}
          component="ul"
          style={{boxShadow:"unset"}}
        >
        {
          selectedCities.length < 1 ? null : selectedCities.map((item, index) => (
            <ListItem key={index}>
            <Chip
              icon={''}
              label={item}
              onDelete={e => deleteSelectedCity(item)}
            />
          </ListItem>
          ))
        }
        </Paper>
      </Box>
    </Box>
  )
}