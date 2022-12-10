import React from 'react'
import { Box, Grid, Hidden } from '@material-ui/core'
import useStyles from './BodyStyles'
import image from '../../Components/images/istockphoto-1224339524-612x612.jpg'
import {Decorator, Divider, RenderSectionHeading} from '../common/commonComponent'
const AboutUs = () => {
    const classes = useStyles(); 
    return(
        <Box className={classes.section}>
            <container>
            <Grid container spacing={2}>
                <Grid item sm={5}>
                    <Box component={Hidden} xsDown>
                    <img src={image}
                     alt='istockphoto-1224339524-612x612' 
                     className={classes.responsiveImg} />
                    </Box>
                </Grid>
                <Grid item xs={7} sm={5}>
                    {RenderSectionHeading({
                        smallText:"AboutMe", 
                        heading:"Do Hard Work Please...", 
                        description:" Hello My name is junaid i m from lucknow i have completed bca from ignou university"})}
               </Grid>
            </Grid>
            </container>
        </Box>
    )
}
export default AboutUs;