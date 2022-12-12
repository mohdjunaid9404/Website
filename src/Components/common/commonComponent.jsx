import { Box, Typography, Grid, Avatar } from '@material-ui/core'
import useStyles from '../HeadersComponents/HeaderStyle'
import BodyStyles from '../BodyComponent/BodyStyles'

const Decorator = ({ label, withIcon, Icon, styles }) => {
    const classes = useStyles();
    return (
        <Box className={classes.decorator} style={styles}>
            <Typography component='span' className={classes.decoratorText}>
                {label}</Typography>
            {withIcon ? <Typography component='span' className={classes.arrow}>
                {Icon}
            </Typography> : null}
        </Box>
    )
}

const Divider = () => {
    const classes = BodyStyles();
    return (
        <Typography component='span' className={classes.divider}></Typography>
    )
}


const RenderSectionHeading = ({ smallText, heading, alignCenter, description }) => {
    const classes = BodyStyles();
    return(
    <Box className={classes.sectionHeadingCount}>
    {Decorator({ label: smallText, withIcon: false, styles: alignCenter ? {widht:"100px", margin:"10px auto"} : {},
 })}
        <Typography variant='h4'align={alignCenter ? "center" : "left"}
         className={classes.sectionHeading}>
            {heading}</Typography>
       {Divider()}
        <Typography variant='body1' component='h6' align={alignCenter ? "center" : "left"}
         className={classes.sectionDesc}>
            {description}</Typography>
    </Box>
    )
}

const CardMedia = ({Icon, label, Desc, key }) => {
    const classes = BodyStyles();
    return(
        <Grid container style={{marginTop:"10"}} key={key}>
            <Grid item xs={3} className={classes.AvatarCont}>
            <Avatar className={classes.avatar}>{Icon}</Avatar>
            </Grid>
            <Grid item xs={9} className={classes.MediaText}>
                <Typography variant='body1' component='h6' gutterBottom>{label}</Typography>
                <Typography variant='caption' gutterBottom>{Desc}</Typography>
            </Grid>
        </Grid>
    )
}



export default Decorator;
export { RenderSectionHeading, Divider, CardMedia };