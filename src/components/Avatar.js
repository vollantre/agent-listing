import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MuiBadge from '@material-ui/core/Badge'
import MuiAvatar from '@material-ui/core/Avatar'
import MuiListItemAvatar from '@material-ui/core/ListItemAvatar'

//Add styles to badge
const Badge = withStyles(theme => ({
    badge: {
        right: 8,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        backgroundColor: '#29bee3',
    }
    
}))(MuiBadge)

const ListItemAvatar = withStyles(theme => ({
    root: {
        minWidth: 'auto',
        marginRight: theme.spacing(1),
    }
}))(MuiListItemAvatar)

const styles = theme => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3)
    },
    large: {
        width: theme.spacing(6),
        height: theme.spacing(6)
    }
})

const Avatar = (props) =>  {
    const { children, backgroundColor, classes, badgeContent, size } = props

    if(size && size === 'small') return (
        <ListItemAvatar>
            <MuiAvatar className={classes.small}>
                {children}
            </MuiAvatar>
        </ListItemAvatar>
    ) 

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
                <MuiAvatar className={classes.large}  style={{ backgroundColor }}>
                    {children}
                </MuiAvatar>
            </Badge>
        </ListItemAvatar>
    )
}

Avatar.propTypes = {
    children: PropTypes.node,
    backGroundColor: PropTypes.string,
    badgeContent: PropTypes.string,
    size: PropTypes.string
}

export default withStyles(styles)(Avatar)