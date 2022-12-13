import React from 'react'
import { Box, Grid, Hidden, Container } from '@material-ui/core'
import useStyles from './BodyStyles'
import image from '../../Components/images/istockphoto-1224339524-612x612.jpg'
import {Decorator, Divider, RenderSectionHeading, CardMedia} from '../common/commonComponent'
import AppleIcon from '@material-ui/icons/Apple';
import ApartmentIcon from '@material-ui/icons/Apartment';
import AirplayIcon from '@material-ui/icons/Airplay';
import AlbumIcon from '@material-ui/icons/Album';;
const AboutUs = () => {
    const classes = useStyles(); 
    const CardMediaData=[
        {title:"Web Developer",description: "I love my india I love my india I love my india I love my india", icon: <AppleIcon />},
        {title:"Marketing",description: "I love my india I love my india I love my india I love my india", icon: <ApartmentIcon />},
        {title:"Tools",description: "I love my india I love my india I love my india I love my india", icon: <AirplayIcon />},
        {title:"Mobile",description: "I love my india I love my india I love my india I love my india", icon: <AlbumIcon />},
    ]

    return(
        <Box className={classes.section}>
            <Container>
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
                        <br/>
                        {/* {CardMedia({
                        label:"label1",
                        Desc: "Desc1",
                        Icon: <AppleIcon />
                        })} */}
                        <Grid container>
                            {CardMediaData.map((item, i)=>(
                            <Grid item xs={12} sm={6} key={i}>
                                {CardMedia({
                                    label: item.title,
                                    Desc: item.description,
                                    Icon: item.icon,
                                })}
                            </Grid>
                            ))}
                        </Grid>
               </Grid>
            </Grid>
            </Container>
        </Box>
    )
}
export default AboutUs;