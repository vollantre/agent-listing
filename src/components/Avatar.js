import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiBadge from '@material-ui/core/Badge'
import MuiAvatar from '@material-ui/core/Avatar'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'

//Add styles to badge
const Badge = withStyles(theme => ({
    badge: {
        right: 3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        backgroundColor: '#29bee3'
    }
    
}))(MuiBadge)

const Avatar = ({ children, backgroundColor, badgeContent }) =>  {

    return (
        <ListItemAvatar>
            <Badge 
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                color="primary"
                badgeContent={badgeContent}
            >
                <MuiAvatar style={{ backgroundColor }}>
                    {children}
                </MuiAvatar>
            </Badge>
        </ListItemAvatar>
    )
}

export default Avatar