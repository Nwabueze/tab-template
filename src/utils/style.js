
import { makeStyles } from '@mui/styles';

const colors = {
    gray: [
        '#ffff', '#f8f8f8', '#f0f0f0', '#e8e8e8', '#e0e0e0', '#d8d8d8', '#d0d0d0', '#c8c8c8', '#c0c0c0',
        '#b8b8b8', '#b0b0b0', '#a8a8a8','#a0a0a0', '#989898', '#909090', '#888888', '#808080', '#787878',
        '#707070', '#686868', '606060', '#585858', '#505050', '#484848','#404040', '#383838', '#303030', 
        '#282828', '#202020', '#181818','#101010', '#080808', '#000000',
    ],
    red: [
        'lightsalmon', 'salmon', 'darksalmon','lightcoral','indianred','crimson','firebrick', 'red', 'darkred', 
    ],
    orange: ['coral', 'tomato','orangered', 'gold', 'orange', 'darkorange'],
    yellow: [
        'lightyellow', 'lemenchiffon', 'lightgoldenrodyellow', 'papayawhip', 'moccasin', 'peachpuff', 
        'palegoldenrod', 'khaki', 'darkkhaki', 'yellow',
    ],
    green: [
        'lawngreen', 'chartreuse', 'limegreen', 'lime', 'forestgreen', 'green', 'darkgreen', 'greenyellow',
        'yellowgreen', 'springgreen', 'mediumspringgreen', 'lightgreen', 'palegreen', 'darkseagreen', 
        'mediumseagreen', 'seagreen', 'olive', 'darkolivegreen', 'olivedrab',
    ],
    cyan: [
        'lightcyan', 'cyan', 'aqua', 'aquamarine', 'mediumaquamarine', 'paleturquoise', 'turquoise',
        'mediumturquoise', 'darkturquoise', 'lightgreen', 'cadetblue', 'darkcyan', 'teal',
    ],
    blue: [
        'powderblue', 'lightblue', 'lightskyblue', 'skyblue', 'deepskyblue', 'lightsteelblue', 'dodgerblue',
        'cornflowerblue', 'steelblue', 'royalblue', 'blue', 'mediumblue', 'darkblue', 'navy', 'midnightblue',
        'mediumslateblue', 'slateblue', 'darkslateblue', 
    ],
    purple: [
        'lavender', 'thistle', 'plum', 'violet', 'orchid', 'fuchsia', 'magenta', 'mediumorchid',
        'mediumpurple', 'blueviolet', 'darkviolet', 'darkorchid', 'darkmagenta', 'purple', 'indigo',
    ],
    pink: ['pink', 'lightpink', 'hotpink', 'deeppink', 'palevioletred', 'mediumvioletred',],
    white: [
        'white', 'snow', 'honeydew', 'mintcream', 'azure', 'aliceblue', 'ghostwhite', 'whitesmoke','seashell', 
        'beige', 'oldlace', 'floralwhite', 'ivory', 'antiquewhite', 'linen', 'lavenderblush', 'mistyrose',
    ],
}

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
    liveTab: {
        backgroundColor: colors.white[5],
        '& > *': { color: `${colors.blue[9]}!important`},
    },
    deadTab: {},
    hovBlue: { 
        '&:hover': { color: 'royalblue', },
    },
    darkBackground: { backgroundColor: colors.gray[8]},
    lightBackground: { backgroundColor: `${colors.gray[0]}!important`},
    centered: { marginLeft: 'auto', marginRight: 'auto', },
    scroller: {
        '&::-webkit-scrollbar': {
          width: '12px',
        },
        '&::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
          webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
          backgroundColor: colors.gray[7],
          border: '1px solid gainsboro',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'slategrey',
          outline: '1px solid slategrey',
          height: '100px',
          borderRadius: '10px',
        }
    },
    pointer: { cursor: 'pointer' },
    withBorder: { border: '1px solid gainsboro'},
    borderPrimary: { border: '1px solid royalblue' },
    borderDefault: { border: '1px solid gainsboro' },
    backgroundPrimary: { backgroundColor: colors.white[5] },
    backgroundDefault: { backgroundColor: colors.gray[4] },
    colorPrimary: { color: 'royalblue!important' },
    colorDefault: { color: `${colors.gray[24]}!important` },
    radius: {  borderRadius: '5px!important'},
    rad1: {  borderRadius: '6px!important'},
    rad2: {  borderRadius: '7px!important'},
    rad3: {  borderRadius: '8px!important'},
    rad4: {  borderRadius: '9px!important'},
    rad5: {  borderRadius: '10px!important'},
    p2: {
        padding: 20,
    },
    p3: {
        padding: 30,
    },
    font_12: {fontSize: '12px!important'},
    font_13: {fontSize: '13px!important'},
    font_14: {fontSize: '14px!important'},
    font_15: {fontSize: '15px!important'},

    top_3: { position: 'relative', top: '3px', },

    flexBox: { display: 'flex', flexDirection: 'row', flexGrow: 1, flexWrap: 'wrap' },
    grow: { flexGrow: 1, },
    centered_90: { width: '90%!important', marginLeft: 'auto!important', marginRight: 'auto!important' },
});

export { useStyles, };
