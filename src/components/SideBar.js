import React from 'react';
import './SideBar.css';
import {Button, IconButton} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Logo from "../assets/images/logo.png";
import requests from '../requests';

function SideBar({setSelectedCategory, setSelectedFeed}) {
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
                    onClick = {() => {
                            setSelectedCategory(requests.fetchNew);
                            setSelectedFeed(true);
                            }}>
                        Recent
                </Button>
                <Button
                    variant = 'contained'
                    onClick = {() => {
                                setSelectedCategory(requests.fetchHot);
                                setSelectedFeed(true);
                            }}>
                        Featured
                </Button>
                <Button
                    variant = 'contained'
                    onClick = {() => {
                                setSelectedCategory(requests.fetchTop);
                                setSelectedFeed(true);
                            }}>
                        Top
                </Button>
            </div>
            
        </div>
    )
}

export default SideBar
