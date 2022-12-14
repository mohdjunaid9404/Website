import { Box, Grid, Container, Typography, Button } from '@material-ui/core'
import {RenderSectionHeading} from '../common/commonComponent'
import useStyle from './BodyStyles'
import image1 from '../images/istockphoto-1335295270-612x612.jpg'
import image2 from '../images/istockphoto-1350722246-612x612.jpg'
import image3 from '../images/istockphoto-1371339413-612x612.jpg'
import image4 from '../images/istockphoto-1344252964-612x612.jpg'
import image5 from '../images/istockphoto-1224339524-612x612.jpg'
import image6 from '../images/istockphoto-1353356088-612x612.jpg'
const Portfolio = ()=> {
    const classes = useStyle();

    const portfolioData=[
        {url:image1, title:"portfolio", link:""},
        {url:image2, title:"portfolio", link:""},
        {url:image3, title:"portfolio", link:""},
        {url:image4, title:"portfolio", link:""},
        {url:image5, title:"portfolio", link:""},
        {url:image6, title:"portfolio", link:""},
    ]
    return(
        <Box className={classes.sectionDark}>
            <Grid container style={{display: "flex", justifyContent: "left", alignContent: "left"}}>
                <Grid item xs={12} sm={6}>
                   {RenderSectionHeading({
                     smallText: "Hello",
                     heading: "Let's see my work",
                     alignCenter: true,                     
                   })}
                </Grid>
            </Grid>
            <Container maxWidth='xl'>
            <Grid container spacing={2}>
                {portfolioData.map((item,i)=>(
                    <Grid item xs={6} sm={6} key={i}>
                    <Box className={classes.imageContainer}>
                           <img src={item.url} alt={item.title} className={classes.responsiveImg} />
                           <Box className={classes.imageoverlay}>
                            <Typography className={classes.overlayTitle}>{item.title}</Typography>
                            <Button variant="contained">visit</Button>
                           </Box>
                    </Box>
                        </Grid>
                ))}
                
            </Grid>
            </Container>
        </Box>
    )
}
export default Portfolio