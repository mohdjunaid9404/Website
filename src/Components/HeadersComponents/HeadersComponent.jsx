// import react from 'react'
import { Box, Typography } from '@material-ui/core'
import useStyles from './HeaderStyle'
import Navbar from './Navbar'
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import Decorator from '../common/commonComponent'
const HeadresComponents = () => {
    const classes = useStyles()
    return (
        <Box className={classes.HeaderWrapper}>
            <Navbar />
            <Box className={classes.HeaderContainer}>
                <Typography variant="h2" component="h4" className={classes.headerTitle}>
                    I'm a Webdeveloper!</Typography>
                <Typography variant="h4" component="h4" className={classes.headerDesc}>
                    I Create Website & Application, Based On Your Needs..</Typography>
                    {Decorator({
                        label: "AboutUs",
                        withIcon: true,
                        Icon: <ArrowDownwardRoundedIcon />
                    })}
            </Box>
        </Box>
    )
}
export default HeadresComponents;