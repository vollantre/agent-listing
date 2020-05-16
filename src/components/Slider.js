import React from 'react'
import Slide from '@material-ui/core/Slide'
import IconButton from '@material-ui/core/IconButton'
import { Typography } from '@material-ui/core';


//Slider component
const Slider = ({ handleReveal, show, data, icon }) => {
    if(data === undefined || data.length < 1) return null

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
                    {data}
                </Typography>
            </Slide>
        </IconButton> 
    )
}

export default Slider