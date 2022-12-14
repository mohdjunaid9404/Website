import React,{useState} from 'react'
import { Box, Grid, Hidden, Container, TextField } from '@material-ui/core'
import useStyles from './BodyStyles'
import image from '../../Components/images/istockphoto-1414744533-612x612.jpg'
import { RenderSectionHeading } from '../common/commonComponent'
import RenderInputText from '../common/FormComponent'

const Contact = () => {
    const classes = useStyles(); 
    const [state, setState] = useState({
        data: {
            firstname: "",
            email: "",
            massage:"",
        },
    });
    
    const handleonChange= ({target}) => {
        const {data} = state;
        data[target.name]= target.value
        setState({data:data})

    }
   

    return(
        <Box className={classes.section} id='Contact'>
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
                        smallText:"ContactMe", 
                        heading:"Do Hard Work Please...", 
                        description:" Hello My name is junaid i m from lucknow i have completed bca from ignou university"})}
                        <br/>
                        
                        <Grid container 
                        direction='row'
                        justifyContent='center'
                        alignItems='center'>
                            <Grid item xs={12} sm={10} style={{marginBottom: "16px"}}>
                            {RenderInputText({label: "First Name", name: "firstName", state: state, onchange: handleonChange})}                            
                        </Grid>
                        <Grid item xs={12} sm={10} style={{marginBottom: "16px"}}>
                            {RenderInputText({label: "Email", name: "email", state: state, onchange: handleonChange})}                            
                        </Grid>
                        <Grid item xs={12} sm={10} style={{marginBottom: "16px"}}>
                            {RenderInputText({label: "Massage", name: "massages", state: state, onchange: handleonChange})}                            
                        </Grid>
                        </Grid>
               </Grid>
            </Grid>
            </Container>
        </Box>
    )
}
export default Contact;