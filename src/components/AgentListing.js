import React from 'react'
import { makeStyles,withStyles } from '@material-ui/core/styles'
import { deepOrange } from '@material-ui/core/colors'
import Avatar from '@material-ui/core/Avatar'
import MuiBadge from '@material-ui/core/Badge'
import Card from '@material-ui/core/Card'
import IconButton from '@material-ui/core/IconButton'
import Phone from '@material-ui/icons/Phone'
import Slide from '@material-ui/core/Slide'
import Email from '@material-ui/icons/Email'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import MuiListSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import { Typography } from '@material-ui/core';

//Add style
const Badge = withStyles(theme => ({
    badge: {
        right: 3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        backgroundColor: '#29bee3'
    }
    
}))(MuiBadge)

const ListSecondaryAction = withStyles(theme => ({
    root: {
        top: '70%',
        right: '5px'
    }
}))(MuiListSecondaryAction)

const useStyles = makeStyles(theme => ({
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500]
    }
}))

//Slider component
const Slider = ({ handleReveal, show, data, icon }) => 
    <IconButton 
        disabled={(data === undefined || data.length < 1) ? true : false} 
        size="small"
        onClick={handleReveal}
    >
        {icon}
        <Slide
            mountOnEnter
            unmountOnExit
            in={show}
            direction="left"
        >
            <Typography variant="subtitle1">
                {data}
            </Typography>
        </Slide>
    </IconButton> 

//AgentListing component
const AgentListing = ({ agent }) => {
    const [showPhone, setShowPhone] = React.useState(false)
    const [showEmail, setShowEmail] = React.useState(false)
    const classes = useStyles()

    const handlePhoneReveal = () => {
        showEmail && setShowEmail(false)
        setShowPhone(prev => !prev)
    }

    const handleEmailReveal = () => {
        showPhone && setShowPhone(false)
        setShowEmail(prev => !prev)
    }

    return (
        <Card variant="outlined" >
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Badge 
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }} 
                        color="primary"
                        badgeContent='TA'
                    >
                        <Avatar className={classes.orange}>
                            {agent.name[0]}
                        </Avatar>
                    </Badge>
                </ListItemAvatar>
                <ListItemText
                    primary={<strong>{agent.name}</strong>}
                    secondary={agent.code}
                />
                <ListSecondaryAction>
                    <Slider 
                        icon={<Phone />} 
                        data={agent.phone} 
                        show={showPhone}
                        handleReveal={handlePhoneReveal}
                    />
                    <Slider  
                        icon={<Email />} 
                        data={agent.email}
                        show={showEmail}
                        handleReveal={handleEmailReveal}
                    />
                </ListSecondaryAction>
            </ListItem>
        </Card>
    )
}

export default AgentListing