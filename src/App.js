import React, { useState } from 'react'
import { MuiThemeProvider, createMuiTheme, } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import DailyAgenda from './components/DailyAgenda'
import AgentListing from './components/AgentListing'
import AppointmentDetail from './components/AppointmentDetail'
import sample from './sample'

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
                Appointment Detail
            </Typography>
            <AppointmentDetail 
                appointment={mockArray[1]}
            />
            <Typography variant="h5">
                Daily Agenda
            </Typography>
            <DailyAgenda
                highlightenedAgent={3} 
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