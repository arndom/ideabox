import React, { useEffect, useState } from 'react';
import './SideBar.css';
import {Button, IconButton, Typography} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Logo from "../assets/images/logo.png";
import requests from '../requests';
import Popover from '@material-ui/core/Popover';
import HashnodeImage from '../assets/images/hashnode.png'

function SideBar({selectedCategory, setSelectedCategory, setSelectedFeed}) {

    // button colors
    const color = 'primary';
    const focus = 'secondary';

    const[feedNew, setFeedNew] = useState(false);
    const[feedHot, setFeedHot] = useState(false);
    const[feedTop, setFeedTop] = useState(false);

    // popover
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'sideBar__postPopOverID' : undefined;

    const handlePopOpen = (e) =>{
        setAnchorEl(e.currentTarget)
    }

    const handlePopClose = () =>{
        setAnchorEl(null)
    }

    useEffect(() => {
        if(selectedCategory==requests.fetchNew){
            setFeedNew(true)
        }
        if(selectedCategory==requests.fetchHot){
            setFeedHot(true)
        }
        if(selectedCategory==requests.fetchTop){
            setFeedTop(true)
        }

    }, [selectedCategory])

    return (
        <div className = 'sideBar'>

            <div className = 'sideBar__logo'>
                
                <h3> <img src = {Logo}/> ideabox</h3>
            </div>

            <div className = 'sideBar__post'>
                <IconButton
                    onClick = {handlePopOpen}    
                    onMouseEnter = {handlePopOpen}
                >
                    <AddCircleOutlineIcon
                    className = 'sideBar__postButton'/>
                </IconButton>

                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handlePopClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >   
                    <Typography>Post an Idea...</Typography>

                    <div className = 'sideBar__postPopOver'>
                        <a href='https://www.reddit.com/r/AppIdeas/submit' target = '_blank'>
                            <img src="https://img.icons8.com/color/240/000000/reddit.png" alt = 'Reddit'/>
                        </a>
                        <a href='https://dev.to/new' target = '_blank'>
                            <img src="https://img.icons8.com/windows/256/000000/dev.png" alt ='dev.to'/>
                        </a>
                        <a href='https://hashnode.com/create/story' target = '_blank'>
                            <img src = {HashnodeImage}  alt = 'hashnode'/>                        
                        </a>
                    </div>

                </Popover>                
            </div>


            <div className = 'sideBar__categoryButtons'>
                <Button
                    color={feedNew? focus:color}
                    variant = 'contained'
                    onClick = {() => {
                            setSelectedCategory(requests.fetchNew);
                            setSelectedFeed(true);
                            setFeedTop(false);
                            setFeedHot(false)
                            }}>
                        Recent
                </Button>
                <Button
                    color={feedHot? focus:color}
                    variant = 'contained'
                    onClick = {() => {
                                setSelectedCategory(requests.fetchHot);
                                setSelectedFeed(true);
                                setFeedNew(false)
                                setFeedTop(false)
                            }}>
                        Featured
                </Button>
                <Button
                    color={feedTop? focus:color}
                    variant = 'contained'
                    onClick = {() => {
                                setSelectedCategory(requests.fetchTop);
                                setSelectedFeed(true);
                                setFeedNew(false)
                                setFeedHot(false)
                            }}>
                        Top
                </Button>
            </div>
            
        </div>
    )
}

export default SideBar
