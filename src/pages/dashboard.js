import * as React from 'react';
import { useContext, useState, } from 'react';
//import { makeStyles, } from '@mui/styles';
import { styled, alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
//import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { AccountCircle } from '@mui/icons-material';
import { Badge, Stack, ToggleButton, Divider } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import useMediaQuery from '@mui/material/useMediaQuery';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ExploreIcon from '@mui/icons-material/Explore';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GridViewIcon from '@mui/icons-material/GridView';
import MessageIcon from '@mui/icons-material/Message';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useStyles, colors } from '../utils/style';
//import Cookies from 'js-cookie';
import { Store } from '../utils/Store';
import f11 from '../img/f11.jpg';
import avatar1 from "../img/1.PNG";


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

  const matches = useMediaQuery('(min-width:700px)');
  const [selectedNavButton, setSelectedNavButton] = React.useState("mail");
  const [sideListSelectedIndex, setSideListSelectedIndex] = React.useState(1);
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const classes = useStyles();
  const [darkmodeValue, setDarkmode] = React.useState(false);
  const [rightTab, setRightTab] = useState('direction');
  React.useEffect(() => {
    setDarkmode(darkMode);
  }, [darkMode])
  const theme = createTheme({
    palette: {
      mode: darkmodeValue ? 'light' : 'light',
    },
  });

  const handleNavButtonClick = (item) => {
    setSelectedNavButton(item);
  }

  const handleSideListItemClick = (event, index) => {
    setSideListSelectedIndex(index);
  };

  const handleDarkmode = () => {
    // Dark mode functionality has been removed here
    //const mode = !darkMode;
    const mode = false;
    dispatch({ type: mode ? 'DARK_MODE_ON' : 'DARK_MODE_OFF' });
  }

  const iconColors = ['orange', 'blue', 'purple', 'red'];

  const navButtons = [
    {
      icon: darkmodeValue ? <Brightness7Icon color="primary" /> : <Brightness4Icon color="primary" />,
      label: 'Darkmode',
      id: 'darkmode',
      badgeContent: 0,
      handler: () => { handleNavButtonClick('darkmode'); handleDarkmode(); },
    },
    {
      icon: <ExploreIcon color="primary" />,
      label: 'Explore',
      id: 'explore',
      badgeContent: 0,
      handler: () => handleNavButtonClick('explore'),
    },
    {
      icon: <NotificationsIcon color="primary" />,
      label: 'Notifications',
      id: 'notifications',
      badgeContent: 20,
      handler: () => handleNavButtonClick('notifications'),
    },
    {
      icon: <AccountCircle color="primary" />,
      label: 'Account',
      id: 'account',
      badgeContent: 1,
      handler: () => handleNavButtonClick('account'),
    },

  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }} className={`${classes.backgroundDefault}`}>
        <AppBar className={classes.navBarLight} position="fixed" sx={{ width: `100%`, }}>
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
              {
                navButtons.map((item, index) => (
                  <ToggleButton className={classes.navbtn} value={item.id} selected={selectedNavButton === item.id}
                    onClick={() => item.handler() }>
                    <Badge badgeContent={item.badgeContent} color="error">
                      { item.icon }
                    </Badge>
                  </ToggleButton>
                ))
              }
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
        <Box style={matches ? { display: 'flex' } : { display: 'block' }} mt={5} pt={5}>
          <Box className={`${classes.scroller}`}
            position="fixed" top={60} sx={{ width: drawerWidth }} style={matches ?
              { overflowY: 'auto', height: `${100}%` } : { display: 'none' }}>
            <Box pt={3} className={`${classes.backgroundDefault}`} 
              style={{ width: '100%', minHeight: 'calc(100vh - 40px)' }}>
              <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                  <React.Fragment>
                    <ListItem pt={3} pb={3} button key={index}
                      selected={sideListSelectedIndex === index}
                      onClick={(event) => handleSideListItemClick(event, index)}
                      className={ `${classes.rad5} ${classes.centered_90}` }
                    >
                      <ListItemIcon>
                        {index % 2 === 0 ? 
                          <InboxIcon 
                          style={{
                            color: colors[iconColors[index]][3]
                             }}   /> : 
                          <MailIcon 
                            style={
                              {
                                color: colors[iconColors[index]][2]
                                }
                              } 
                            />
                          }
                      </ListItemIcon>
                      <span className={`${classes.font_14}`}>{ text }</span>
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
            </Box>
          </Box>
          <Box component="main" sx={matches ? {
            width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,
            position: 'relative', bottom: '20px',
          } :
            { width: '100%' }}>
            <Box style={matches ?
              { width: '100%', display: 'flex', flexDirection: 'row', flexGrow: 1, flexWrap: 'wrap' }
              : { dispay: 'block', width: '100%' }}>
              <Box
                style={
                  {
                    minHeight: '900px', width: matches ?
                      `calc(50% - 3px)` : '100%',
                      backgroundColor: 'inherit',
                  }
                }>
                {
                  '00000000000000000000'.split('').map((item, i) => (
                    <Paper mt={2} mb={2} className={`${classes.lightBackground}`}>
                      <Box pt={2} mt={2} style={{ width: '90%', }} className={classes.centered}>
                        <Box className={classes.flexBox}>
                         <Avatar alt="Remy Sharp" src={avatar1} sx={{width: 45, height: 45}}/>
                          <Box>
                            <Typography p={1} className={`${classes.font_15}`}>
                              {' '}
                              <span className={`${classes.colorPrimary} ${classes.pointer} ${classes.font_15}`}>
                                Samuel Nwabueze
                              </span>
                              <br />

                              <AccessTimeIcon className={`${classes.font_15} ${classes.top_3}`} />
                              <span className={`${classes.font_12}`}>{' '} &middot; {'11:00'} AM</span>
                            </Typography>
                          </Box>
                          <Box className={`${classes.grow}`}></Box>
                          <Box pr={2}>
                            <MoreHorizIcon className={`${classes.top_3} ${classes.pointer} ${classes.hovBlue}`} />
                          </Box>
                        </Box>
                      </Box>
                      <Box className={classes.centered_90}>
                        <Typography>
                          Solomon Grundy,
                          Born on a Monday,
                          Christened on Tuesday,
                          Married on Wednesday,
                          Took ill on Thursday,
                          Grew worse on Friday,
                          Died on Saturday,
                          Buried on Sunday,
                          That was the end,
                          Of Solomon Grundy.
                        </Typography>
                      </Box>
                      <Box style={{ width: '100%', height: '300px' }} className={classes.centered}>
                        <img src={f11} style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
                          alt={'here is it'} />
                      </Box>
                      <Box>

                      </Box>
                    </Paper>
                  ))
                }
              </Box>
              <Box
                style={
                  {
                    height: '900px',
                    position: 'fixed',
                    right: '0px',
                    width: matches ?
                      `calc(50% - 120px)` : '100%',
                  }
                }>
                <Box pl={2} style={{ width: '60%', height: 'calc(100vh - 60px)', }}>
                  <Box p={1}
                    className={`${classes.lightBackground}`}
                    style={{ display: 'flex', flexDirection: 'row', gap: 3, position: 'sticky', }}>
                      {/** Start the right tab nav menu  boxes*/}
                    <Box p={1} 
                      key={0} className={ `${classes.pointer} ${rightTab === 'direction' ? 
                      classes.liveTab : classes.deadTab} ${classes.rad5}` } 
                      onClick={e=>setRightTab('direction')}>
                      <AssistantDirectionIcon />
                    </Box>
                    <Box p={1} key={1} className={ `${classes.pointer} ${rightTab === 'bizcenter' ? 
                      classes.liveTab : classes.deadTab} ${classes.rad5}` } 
                      onClick={ e => setRightTab('bizcenter')}>
                      <BusinessCenterIcon />
                    </Box>
                    <Box p={1} className={`${classes.pointer} ${rightTab === 'message' ? 
                      classes.liveTab : classes.deadTab } ${classes.rad5}`} 
                      onClick={ e => setRightTab('message')}>
                      <MessageIcon />
                    </Box>
                    <Box style={{ flexGrow: 1 }} key={3} />
                    <Box p={1} key={4} className={`${classes.pointer} ${rightTab === 'gridview' ? 
                      classes.liveTab : classes.deadTab } ${classes.rad5}`} 
                      onClick={ e => setRightTab('gridview')}>
                      <GridViewIcon />
                    </Box>
                  </Box>
                  <Divider />
                  <Box
                    className={`${classes.scroller} ${classes.lightBackground}`}
                    style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
                    <Box className={classes.centered} style={{ height: 'auto', width: '90%', }}>
                      <Typography p={2}>
                        welcome to the real life, we are eager...
                      </Typography>
                      <Typography p={2}>
                        welcome to the real life, we are eager...
                      </Typography>
                      <Typography p={2}>
                        welcome to the real life, we are eager...
                      </Typography>
                      <Typography p={2}>
                        welcome to the real life, we are eager...
                      </Typography>
                      <Typography p={2}>
                        welcome to the real life, we are eager...
                      </Typography>
                      <Typography p={2}>
                        welcome to the real life, we are eager...
                      </Typography>
                      <Typography p={2}>
                        welcome to the real life, we are eager...
                      </Typography>
                      <Typography p={2}>
                        welcome to the real life, we are eager...
                      </Typography>
                      <Typography p={2}>
                        welcome to the real life, we are eager...
                      </Typography>
                      <Typography p={2}>
                        welcome to the real life, we are eager...
                      </Typography>
                      <Typography p={2}>
                        welcome to the real life, we are eager...
                      </Typography>
                      <Typography p={2}>
                        welcome to the real life, we are eager...
                      </Typography>
                      <Typography p={2}>
                        welcome to the real life, we are eager...
                      </Typography>
                      <Typography p={2}>
                        welcome to the real life, we are eager...
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
