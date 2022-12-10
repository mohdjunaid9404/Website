import { Box, Typography } from '@material-ui/core'
import useStyles from '../HeadersComponents/HeaderStyle'
import BodyStyles from '../BodyComponent/BodyStyles'

const Decorator = ({ label, withIcon, Icon, styles }) => {
    const classes = useStyles();
    return (
        <Box className={classes.decorator} style={styles}>
            <Typography variant='span' className={classes.decoratorText}>
                {label}</Typography>
            {withIcon ? <Typography variant='span' className={classes.arrow}>
                {Icon}
            </Typography> : null}
        </Box>
    )
}

const Divider = () => {
    const classes = BodyStyles();
    return (
        <Typography variant='span' className={classes.divider}></Typography>
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





export default Decorator;
export { RenderSectionHeading, Divider };