import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import AgentListing from './components/AgentListing'
import sample from './sample'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    }
}))

const App = () => {
    const [mockObj] = useState(sample)
    const classes = useStyles()

    return(
        <List className={classes.root}>
            <AgentListing agent={mockObj} />
        </List>
    )
}

export default App