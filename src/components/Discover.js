import * as React from 'react';
import { Box, Button, Divider, Typography } from "@mui/material";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import a1 from '../img/a1.jpg';
import a2 from '../img/a2.jpg';
import a3 from '../img/a3.jpg';
import a4 from '../img/a4.jpg';
import a5 from '../img/a5.jpg';
import a6 from '../img/a6.PNG';
import a7 from '../img/a7.jpg';
import { useStyles,  } from '../utils/style';

const biz = [
    {id: '112', name: 'Obeta', country: 'Nigeria', location: 'Lagos', address: '12 oas street eija Lagos', cover: a1, },
    {id: '113', name: 'Offotec', country: 'Nigeria', location: 'Lagos', address: '6 bamgbose tinubu square victoria ireland', cover: a2, },
    {id: '114', name: 'Seltech', country: 'Ghana', location: 'Accra', address: '12 pcf kct Accra', cover: a3, },
    {id: '115', name: 'Kolcyt inc', country: 'Unites States', location: 'New York', address: '10234 columbia heights brooklyn', cover: a4, },
    {id: '116', name: 'Caseley cash', country: 'Nigeria', location: 'Lagos', address: 'No. 6, 22 road festac Lagos', cover: a5, },
    {id: '117', name: 'Macroonz', country: 'Nigeria', location: 'Lagos', address: '5 bamgbose VI, Lagos', cover: a6, },
    {id: '118', name: 'Aconcci', country: 'Nigeria', location: 'Lagos', address: 'Ago palace way Lagos', cover: a7, },
];

export default function Discover(){

    const classes = useStyles();
    const [liked, setLiked] = React.useState({'112': true, '113': false, '114': true, '115': false, '116': true, '117': false, '118': false });
    
    const handleLike = (id) => {
        const newLikes = { ...liked };
        newLikes[id] = !newLikes[id];
        setLiked(newLikes);
    };

    return (
        <Box mb={10}>
        {
          biz.map((item) => (
            <Box mt={2} mb={2} className={`${classes.rad1} ${classes.withBorder} ${classes.lightBackground}`}>
              <Box m={2}
                style={{ width: '100%', height: '100px', display: 'flex', flexDirection: 'row', flexGrow: 1, 
                flexWrap: 'wrap' }}>
              <Box style={{width: '100px', height: '100px'}}>
              {/** For company's cover photo */}    
              <img className={classes.leftRad} src={item.cover} style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt={'biz logo'} />
              </Box>
              <Box style={{width: 'calc(100% - 100px)', height: '100px'}}>
                <Box style={{whiteSpace: 'nowrap', height: '30px', textOverflow: 'ellipsis', textTransform: 'capitalize', fontWeight: 'bold', color: 'black', }}>
                  <Typography p={1} className={`${classes.font_17}`}>{item.name}</Typography>
                </Box>
                <Box pr={2} style={{height: '70px'}}>
                  <Typography p={1} style={{textOverflow: 'wrap'}} className={`${classes.font_12}`}>{item.address} {' '} {item.country}</Typography>
                </Box>
              </Box>
              </Box>
              <Divider />
              <Box>
                <Box 
                  style={{ width: '100%', height: '70px', display: 'flex', flexDirection: 'row', flexGrow: 1, 
                  flexWrap: 'wrap', gap: 1 }}>
                  <Box p={2} className={`${classes.pointer}`}> 
                    <Button 
                      style={{width: '75px'}}
                      onClick={e => handleLike(item.id)}
                      variant="outlined" 
                      className={`${liked[item.id] ? classes.withBorder : classes.blackOutlinedButton}`}>
                    <span className={`${classes.font_13} ${classes.textNormal} ${classes.pr1} ${classes.top3}`}>{ liked[item.id] ? 'Liked ' : 'like ' } </span>
                    { liked[item.id] ? 
                    <ThumbUpRoundedIcon className={`${classes.font_17}`} color="primary"/> : 
                    <ThumbUpOutlinedIcon className={`${classes.font_17}`} /> }
                    </Button>
                  </Box>
                  <Box p={2} className={`${classes.pointer} ${classes.hovBlue}`}>
                    <InfoOutlinedIcon className={`${classes.font_24}`} />
                    <br />
                    <span className={`${classes.font_12} ${classes.bott5}`}>Info</span>
                  </Box>
                  <Box p={2} className={`${classes.pointer} ${classes.hovBlue}`}>
                    <ArrowForwardOutlinedIcon className={`${classes.font_24}`} />
                    <br />
                    <span className={`${classes.font_12} ${classes.bott5}`}>Visit</span>
                  </Box>
                  <Box p={2} className={`${classes.pointer} ${classes.hovBlue}`}>
                    <MoreVertIcon className={`${classes.font_24}`} />
                    <br />
                    <span className={`${classes.font_12} ${classes.bott5}`}>More</span>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))
        }
        </Box>
    )
}