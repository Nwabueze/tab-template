import * as React from 'react';
import { useContext } from 'react';
import { makeStyles, } from '@mui/styles';
import { styled, alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { AccountCircle } from '@mui/icons-material';
import { Badge, Button, Stack, ToggleButton, TextField } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import useMediaQuery from '@mui/material/useMediaQuery';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import useStyles from '../utils/style';
import Cookies from 'js-cookie';
import {Store} from '../utils/Store';


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

const drawerWidth = 240;

export default function PermanentDrawerLeft() {

  const [selectedNavButton, setSelectedNavButton] = React.useState("mail");
  //const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  //const darkMode = Cookies.get('darkmode') !== 'undefined' ? true : false;
  const {state, dispatch} = useContext(Store);
  const { darkMode } = state;
  const classes = useStyles();
  //const [darkmodeValue, setDarkmode] = React.useState(Cookies.get('darkmode') !== 'undefined');
  
  const [darkmodeValue, setDarkmode] = React.useState(darkMode);
  React.useEffect(() => {
    setDarkmode(darkMode);
  },[darkMode])
  const theme = createTheme({
        palette: {
          mode: darkmodeValue ? 'dark' : 'light',
        },
  });
  
  const handleNavButtonClick = (item) => {
    setSelectedNavButton(item);
  }

  const handleDarkmode = () => {
    const mode = !darkMode;
    dispatch({ type: mode ? 'DARK_MODE_ON' : 'DARK_MODE_OFF' });
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ width: "100vw" }}>
      <AppBar className={ darkmodeValue ? classes.navBarDark : classes.navBarLight } position="fixed" sx={{ width: `100%`,}}>
        <Toolbar>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <ToggleButton value="darkmode" selected={selectedNavButton === "darkmode"} 
              onClick={() => { handleNavButtonClick('darkmode'); handleDarkmode(); }}>
              <Badge badgeContent={0} color="error">
                { darkmodeValue ? <Brightness7Icon color="primary" /> : <Brightness4Icon color="primary" /> }
              </Badge>
            </ToggleButton>
            <ToggleButton value="mail" selected={selectedNavButton === "mail"} 
              onClick={() => handleNavButtonClick('mail')}>
              <Badge badgeContent={4} color="error">
                <MailIcon color="primary" />
              </Badge>
            </ToggleButton>
            <ToggleButton value="notification" selected={selectedNavButton === "notification"} 
              onClick={() => handleNavButtonClick('notification')}>
              <Badge badgeContent={17} color="error">
                <NotificationsIcon color="primary" />
              </Badge>
            </ToggleButton>
            <ToggleButton value="account" selected={selectedNavButton === "account"} 
              onClick={() => handleNavButtonClick('account')}>
              <AccountCircle color="primary" />
            </ToggleButton>
            </Stack>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <ToggleButton value="more" selected={selectedNavButton === "more"} 
            onClick={() => handleNavButtonClick('more')}>
              <MoreIcon color="primary" />
            </ToggleButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex' }} mt={5} pt={5}>
        <Box position="fixed" sx={{ width: drawerWidth }} style={{overflowY: 'scroll', height: `${100}%`}}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        </Box>
        <Box component="main" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
          <Box>
             <Button>{ darkMode ? 'Darmode ON' : 'Darkmode OFF' }</Button>
          </Box>
          <Box p={5}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </Box>
        <Typography paragraph className={classes.p2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        </Box>
      </Box>
    </Box>
    </ThemeProvider>
    
  );
}
