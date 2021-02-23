import React from 'react';
import './SideBar.css';
import {Button, IconButton} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function SideBar({setSelectedCategory}) {
    return (
        <div className = 'sideBar'>

            <div className = 'sideBar__logo'>
                <h3>💡ideabox</h3>
            </div>

            <IconButton 
                className = 'sideBar__postButton'
                onClick = ''                
            >
                <AddCircleOutlineIcon/>
            </IconButton>

            <div className = 'sideBar__categoryButtons'>
                <Button variant = 'contained'>Recent</Button>
                <Button variant = 'contained'>Featured</Button>
                <Button variant = 'contained'>Top</Button>
            </div>
            
        </div>
    )
}

export default SideBar
