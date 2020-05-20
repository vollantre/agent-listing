import React, { useState } from 'react'
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import DailyAgenda from './components/DailyAgenda'
import AgentListing from './components/AgentListing'
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
          ].join(', ')
    }
})

const App = () => {
    const [mockArray] = useState(sample)
    const classes = useStyles()

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
        </MuiThemeProvider>
    )
}

export default App