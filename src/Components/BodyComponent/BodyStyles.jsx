import { makeStyles } from '@material-ui/core'
import Theme from '../HeadersComponents/Theme'
const useStyles = makeStyles((theme)=>({
    section:{
        backgroundColor: Theme.colors.base1,
        padding: theme.spacing(10, 0, 8, 0),
    },

    divider:{
        width:'65px',
        height:'4px',
        backgroundColor: Theme.colors.primary,
        margin: theme.spacing(2, 0),
    },

    responsiveImg:{
        width:"100%",
        height:"auto",
    },

    sectionHeadingCount:{
        padding:theme.spacing(1),
        color:Theme.colors.base2,
    },

    sectionHeading:{
        color:Theme.colors.base2,
        margin: theme.spacing(1, 0),
    },

    sectionDesc:{
        color: Theme.colors.base2,
    },

    AvatarCont: {
        display: "flex",
        flexFlow: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    avatar: {
        backgroundColor: Theme.colors.base2,
        color: Theme.colors.primary,
    },

    MediaText: {
        color: Theme.colors.base2,
    }


}));
export default useStyles;