
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
    deadTab: {
        backgroundColor: colors.gray[0],
        '& > *': { color: `${colors.gray[15]}!important`},
    },
    navbtn: {
        border: '0px solid white!important', borderRadius: '15px!important',
        '& svg': { fontSize: '20px!important', },
    },
    blackOutlinedButton: {
        border: '1px solid black!important', 
        '& > *': { color: 'black', },
        '&:hover': { backgroundColor: colors.gray[9], },
    },
    hovBlue: { 
        '&:hover': { color: 'royalblue', },
        '& *:hover': { color: colors.blue[9]},
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
    withBorder: { border: '1px solid gainsboro!'},
    borderPrimary: { border: '1px solid royalblue!important' },
    borderDefault: { border: '1px solid gainsboro!important' },
    borderStandard: { border: '1px solid black!important' },
    backgroundPrimary: { backgroundColor: colors.white[5] },
    backgroundDefault: { backgroundColor: `${colors.gray[4]}!important` },
    backgroundSecondary: { backgroundColor: `${colors.gray[2]}!important` },
    colorPrimary: { color: 'royalblue!important' },
    colorDefault: { color: `${colors.gray[24]}!important` },
    radius: {borderRadius: '5px!important'},
    leftRad: {borderTopLeftRadius: '6px!important', borderBottomLeftRadius: '6px!important'},
    rad0: {  borderRadius: '0px!important'},
    rad1: {  borderRadius: '6px!important'},
    rad2: {  borderRadius: '7px!important'},
    rad3: {  borderRadius: '8px!important'},
    rad4: {  borderRadius: '9px!important'},
    rad5: {  borderRadius: '10px!important'},
    p2: { padding: 20, },
    pr1: { paddingRight: 10, },
    pr2: { paddingRight: 20, },
    p3: { padding: 30, },
    font_12: {fontSize: '12px!important'},
    font_13: {fontSize: '13px!important'},
    font_14: {fontSize: '14px!important'},
    font_15: {fontSize: '15px!important'},
    font_16: {fontSize: '16px!important'},
    font_17: {fontSize: '17px!important'},
    font_18: {fontSize: '18px!important'},
    font_19: {fontSize: '19px!important'},
    font_20: {fontSize: '20px!important'},
    font_21: {fontSize: '21px!important'},
    font_22: {fontSize: '22px!important'},
    font_23: {fontSize: '23px!important'},
    font_24: {fontSize: '24px!important'},
    font_25: {fontSize: '25px!important'},
    font_26: {fontSize: '26px!important'},
    font_27: {fontSize: '27px!important'},
    font_28: {fontSize: '28px!important'},
    font_29: {fontSize: '29px!important'},
    font_30: {fontSize: '30px!important'},
    font_31: {fontSize: '31px!important'},
    font_32: {fontSize: '32px!important'},
    font_33: {fontSize: '33px!important'},
    font_34: {fontSize: '34px!important'},
    font_35: {fontSize: '35px!important'},
    font_36: {fontSize: '36px!important'},
    font_37: {fontSize: '37px!important'},
    font_38: {fontSize: '38px!important'},
    font_39: {fontSize: '39px!important'},
    font_40: {fontSize: '40px!important'},
    top_3: { position: 'relative', top: '3px', },
    top3: { position: 'relative', top: '3px', },
    bott3: { position: 'relative', bottom: '3px', },
    bott4: { position: 'relative', bottom: '4px', },
    bott5: { position: 'relative', bottom: '5px', },
    flexBox: { display: 'flex', flexDirection: 'row', flexGrow: 1, flexWrap: 'wrap' },
    grow: { flexGrow: 1, },
    centered_90: { width: '90%!important', marginLeft: 'auto!important', marginRight: 'auto!important' },
    textNormal: { textTransform: 'none!important', },
});

export { useStyles, colors, };
