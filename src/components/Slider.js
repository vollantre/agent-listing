import React from 'react'
import PropTypes from 'prop-types'
import Slide from '@material-ui/core/Slide'
import IconButton from '@material-ui/core/IconButton'
import { Typography } from '@material-ui/core'

//Slider component
const Slider = ({ handleReveal, show, dataInfo, icon }) => {
    if(dataInfo === undefined || data.length < 1) return null

    return(
        <IconButton
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
                    {dataInfo}
                </Typography>
            </Slide>
        </IconButton> 
    )
}

Slider.propTypes = {
    handleReveal: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    icon: PropTypes.node.isRequired,
    dataInfo: PropTypes.string
}

export default Slider