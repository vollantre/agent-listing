import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import MuiTypography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const Typography = withStyles(theme => ({
    h4: {
        color: '#3d3d3d',
        fontWeight: 'bold'
    }
}))(MuiTypography)

const DailyAgenda = ({ title }) => {

    return(
        <Paper elevation={3}>
            <Typography align="center" variant="h4">
            {title}
            </Typography>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <List>
                        <li>hi</li>
                        <li>xd</li>
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <List>
                        <li>yo nigga</li>
                    </List>
                </Grid>
            </Grid>
        </Paper>
    )
    
}

export default DailyAgenda