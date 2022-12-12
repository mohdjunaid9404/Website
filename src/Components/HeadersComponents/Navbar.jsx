import React from 'react'
import {AppBar, Toolbar, Typography, Box, Button, Hidden, IconButton} from '@material-ui/core'
import useStyles from './HeaderStyle'
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
const Navbar = () => {
    const classes = useStyles();
    
    const navlinks=[
        {label:"Home1", id:"Home1"},
        {label:"About", id:"About"},
        {label:"Contact", id:"Contact"},
    ];
    return(
        <AppBar position="fixed" className={classes.navbar}>
  <Toolbar className={classes.ToolBar}>
    <Typography variant="h3" component="h6">
      Junaid's website
    </Typography>

    <Box component={Hidden} xsDown>
        <Box>
            {navlinks.map((item, i) => (      
                <Button key={i} className={classes.navlinks}>{item.label}</Button>           
            ))}
            </Box>
    </Box>
    <Box component={Hidden} smUp>
        <IconButton color="inherit" onClick={()=> console.log("Menu Click")}>
            <MenuOpenRoundedIcon />
        </IconButton>
    </Box>
  </Toolbar>
</AppBar>
    );  
}
export default Navbar;