import {TextField, Grid} from '@material-ui/core'
const RenderInputText = ({name,label,state,onChange}) => {
    const {data} = state;
    return (
        <Grid xs={12} sm={6}>
            <TextField
                variant='outlined'
                label={label}
                fullWidth={true}
                name={name}
                value={data[name]}
                onChange={onChange}
            />
        </Grid>
    )
}
export default RenderInputText