import React, { useState } from 'react'
import { Box, Grid, Hidden, Container, Button } from '@material-ui/core'
import useStyles from './BodyStyles'
import image from '../../Components/images/monitor-1307227_1280.jpg'
import { RenderSectionHeading } from '../common/commonComponent'
import RenderInputText from '../common/FormComponent'

const Contact = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        data: {
            firstname: "",
            email: "",
            massage: "",
        },
    });

    const handleonChange = ({ target }) => {
        const { data } = state;
        data[target.name] = target.value
        setState({ data: data })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submited", state.data);
    }


    return (
        <Box className={classes.section} id='Contact'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sm={5}>
                        <Box component={Hidden} xsDown>
                            <img src={image}
                                alt='monitor-1307227_1280'
                                className={classes.responsiveImg} />
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        {RenderSectionHeading({
                            smallText: "ContactMe",
                            heading: "Do Hard Work Please...",
                            description: " Hello My name is junaid i m from lucknow i have completed bca from ignou university"
                        })}
                        <br />
                        <form onSubmit={handleSubmit}>
                            <Grid container
                                direction='row'
                                justifyContent='center'
                                alignItems='center'>
                                <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                                    {RenderInputText({ label: "First Name", name: "firstName", state: state, onchange: handleonChange })}
                                </Grid>
                                <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                                    {RenderInputText({ label: "Email", name: "email", state: state, onchange: handleonChange })}
                                </Grid>
                                <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                                    {RenderInputText({ label: "Massage", name: "massages", state: state, onchange: handleonChange, multiline: true, rows: 5 })}
                                </Grid>
                                <Grid item xs={12} sm={4} style={{ marginBottom: "16px" }}>
                                    <Button variant="outlined" type="Submit" fullWidth={true} className={classes.submitBtn}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default Contact;