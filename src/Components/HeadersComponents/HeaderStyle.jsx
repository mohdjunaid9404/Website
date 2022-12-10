import { makeStyles } from '@material-ui/core'
import Theme from './Theme'
import Image from './../images/wordpress-581849_1280.jpg'
const useStyles =  makeStyles((theme) => ({
    HeaderWrapper:{
        width:"100%",
        minHeight:"90vh",
        height: "auto",
        background: `linear-gradient(to bottom right, #04303140, #00606473),url(${Image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },

    HeaderContainer:{
        width:"85%",
        minHeight:"70vh",
        height: "auto",
        display:"flex",
        flexFlow:"column wrap",
        alignItems:"center",
        padding:"20px",
        justifyContent:"center",
        color:Theme.colors.base2,
        fontFamily:"roboto",
    },

    headerTitle:{
        fontSize: "3rem",
        margin: theme.spacing(2, 0),
        [theme.breakpoints.down('xs')]: {
            fontSize: "2rem",
          },
    },

    headerDesc:{
        fontSize: "2rem",
        margin: theme.spacing(2, 0),
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.5rem",
            margin: theme.spacing(2, 0),
          },
    },

    navbar:{
        backgroundColor: Theme.colors.base1,
        color: Theme.colors.base2,
    },

    ToolBar:{
        display:"flex",
        flexFlow:"row wrap",
        justifyContent:"space-between",
        backgroundColor:Theme.colors.base1,
        color: Theme.colors.base2,
    },

    navlinks:{
        color: Theme.colors.base2,
    },

    decorator: {
        display: "flex",
        fontWeight:"bolder",
        fontFamily:"roboto",
        position:"relative",
        marginTop: "20px",
    "&:before": {
            width: "40px",
            height: "40px",
            backgroundColor: Theme.colors.primary,
            content: '""',
            borderRadius:"50%",
        },
    },
        decoratorText:{
            lineHeight: "32px",
            position: "absolute",
            left: "20px",
        },

        arrow: {
            lineHeight: "10px",
            position: "absolute",
            left: "80px",
            animationName: "upDown",
            animationDuration: "0.7s",
            animationIterationCount: "infinite",
        },
    
        //create animation
        "@global":{
            "@keyframes upDown":{
                "0%": {
                    transform: "scale(0)",
                    paddingTop: "0px",
                },
                "100%": {
                    transform: "scale(1)",
                    paddingTop: "10px",
                },
            },
        },
}));
export default useStyles