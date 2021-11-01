import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    navBarLight: {
        backgroundColor: '#ffff!important',
        '& a': {
            color: '#royalbue!important',
            marginLeft: 10,
        },
    },
    navBarDark: {
        backgroundColor: 'black!important',
        '& a': {
            color: 'orange!important',
            marginLeft: 10,
        },
    },
    p2: {
        padding: 20,
    }
});

export default useStyles;
