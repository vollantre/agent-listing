import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

export const HourGrid = withStyles(theme => ({
    root: {
        height: theme.spacing(4)
    }
}))(Grid)