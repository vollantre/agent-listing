import React, { useState } from 'react'
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import DailyAgenda from './components/DailyAgenda'
import AgentListing from './components/AgentListing'
import Avatar from '@material-ui/core/Avatar'
import AvatarGroup from '@material-ui/lab/AvatarGroup'
import sample from './sample'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    small: {
        //width: '100%',
        maxWidth: 200,
        //backgroundColor: theme.palette.background.paper
    }
}))

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
            '"Helvetica Neue"',
            'Arial',
          ].join(', '),
        body1: {
            fontSize: '1.2rem',
            color: '#3d3d3d'
        },
        h4: {
            color: '#3d3d3d',
            fontWeight: 'bold',
            paddingTop: '12px'
        }
    }
})

const App = () => {
    const [mockArray] = useState(sample)
    
    return(
        <MuiThemeProvider theme={theme}>
            <Typography variant="h5">
                Daily Agenda
            </Typography>
            <DailyAgenda 
                title="Team Agenda"
                appointments={mockArray}
            />
            <Typography style={{ marginTop: '20px' }} variant="h5">
                Medium AgentListing
            </Typography>
            <AgentListing
                agent={mockArray[0].agents[0]}
                size="medium"
            />
            <Typography variant="h5">
                Avatar Group
            </Typography>
            <AvatarGroup max={3}>
                <Avatar>
                    X
                </Avatar>
                <Avatar>
                    D
                </Avatar>
            </AvatarGroup>
        </MuiThemeProvider>
    )
}

export default App