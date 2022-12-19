import {TextField, Grid } from '@material-ui/core'
import useStyles from '../BodyComponent/BodyStyles'
// const useStyles = makeStyles((theme)=>({}))

const RenderInputText = ({name,label,state,onChange,multiline,rows,email}) => {
    // const classes = useStyles();
    const {data} = state;
    const classes = useStyles()
    return (
        <Grid xs={12} sm={10}>
            <TextField
                InputLabelProps={{
                    classes:{
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                    },
                }}
                InputProps={{
                    classes:{
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutlined:classes.notchedOulined,
                    },
                }}
                variant='outlined'
                label={label}
                fullWidth={true}
                name={name}
                value={data[name]}
                onChange={onChange}
                multiline={multiline}
                rows={rows}
                // email={email}
                // value={data[email]}
            />
        </Grid>
    )
}
export default RenderInputText