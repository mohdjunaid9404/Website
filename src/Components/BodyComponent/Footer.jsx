import React from 'react'
import { Box, IconButton, Typography } from '@material-ui/core'
import useStyles from './BodyStyles'
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';


const Footer = ()=> {
    const classes = useStyles();
    const date = new Date();
    return(
       
        <Box className={classes.footerContainer}>
            <IconButton className={classes.IconButton}>
                <ArrowUpwardRoundedIcon />
            </IconButton>
            <Typography variant='body ' component="h4" align='center' color="inherit">
                This is the footer part ❤ @ {date.getFullYear()}
            </Typography>
        </Box>
        
    )
}
export default Footer;