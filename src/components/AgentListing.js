import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Phone from '@material-ui/icons/Phone'
import Email from '@material-ui/icons/Email'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MuiListSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Slider from './Slider'
import Avatar from './Avatar'

const ListSecondaryAction = withStyles(theme => ({
    root: {
        top: '70%',
        right: '5px'
    }
}))(MuiListSecondaryAction)

//AgentListing component
const AgentListing = ({ agent, size }) => {
    const [showPhone, setShowPhone] = React.useState(false)
    const [showEmail, setShowEmail] = React.useState(false)

    const handlePhoneReveal = () => {
        showEmail && setShowEmail(false)
        setShowPhone(prev => !prev)
    }

    const handleEmailReveal = () => {
        showPhone && setShowPhone(false)
        setShowEmail(prev => !prev)
    }

    if(size === 'small') return (
        <Card variant="outlined">
            <ListItem>
                <Avatar>

                </Avatar>
            </ListItem>
        </Card>
    )

    return (
    <Card variant="outlined" >
            <ListItem alignItems="flex-start">
                <Avatar backgroundColor={agent.color} badgeContent='TA'>
                    {agent.name[1]}
                </Avatar>
                <ListItemText
                    primary={<strong>{agent.name}</strong>}
                    secondary={agent.code}
                />
                <ListSecondaryAction>
                    <Slider 
                        icon={<Phone />} 
                        dataInfo={agent.phone} 
                        show={showPhone}
                        handleReveal={handlePhoneReveal}
                    />
                    <Slider  
                        icon={<Email />} 
                        dataInfo={agent.email}
                        show={showEmail}
                        handleReveal={handleEmailReveal}
                    />
                </ListSecondaryAction>
            </ListItem>
        </Card>
    )
}

AgentListing.propTypes = {
    size: PropTypes.string,
    agent: PropTypes.object.isRequired
}

export default AgentListing