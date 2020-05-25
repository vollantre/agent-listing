import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MuiPaper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Hours from './Hours'
import Spots from './Spots'

//STYLING
const Paper = withStyles(theme => ({
    root: {
        width: theme.spacing(65)
    }
}))(MuiPaper)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////                                            REACT COMPONENTS                                                   /////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            
//DailyAgenda Component
const DailyAgenda = ({ title, appointments, highlightenedAgent }) => {
    return(
        <Paper elevation={3}>
            <Typography align="center" variant="h4">
                {title}
            </Typography>
            <Grid 
                style={{ marginTop: '20px', width: '101%' }} 
                container 
                spacing={2}
            >
                <Hours />
                <Grid 
                    direction="column" 
                    container 
                    item 
                    xs={9}
                >
                    <Spots 
                        highlightenedAgent={highlightenedAgent} 
                        appointments={appointments} 
                    />
                </Grid>
            </Grid>
        </Paper>
    )
    
}

DailyAgenda.propTypes = {
    title: PropTypes.string.isRequired,
    appointments: PropTypes.array,
    highlightenedAgent: PropTypes.number
}

export default DailyAgenda