import React from 'react';
import './SideBar.css';
import {Button, IconButton} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Logo from "../assets/images/logo.png";
import requests from '../requests';

function SideBar({setSelectedCategory}) {
    return (
        <div className = 'sideBar'>

            <div className = 'sideBar__logo'>
                
                <h3> <img src = {Logo}/> ideabox</h3>
            </div>

            <IconButton>
                <AddCircleOutlineIcon
                className = 'sideBar__postButton'/>
            </IconButton>

            <div className = 'sideBar__categoryButtons'>
                <Button
                    variant = 'contained'
                    onClick = {() => setSelectedCategory(requests.fetchNew)}>
                        Recent
                </Button>
                <Button
                    variant = 'contained'
                    onClick = {() => setSelectedCategory(requests.fetchHot)}>
                        Featured
                </Button>
                <Button
                    variant = 'contained'
                    onClick = {() => setSelectedCategory(requests.fetchTop)}>
                        Top
                </Button>
            </div>
            
        </div>
    )
}

export default SideBar
