
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import UserVideoItem from "../UserVideoItem/UserVideoItem";

/******* styling  ********/
import { Container, Grid } from '@mui/material';


function UserVideos() {

    const dispatch = useDispatch();

    const videos = useSelector((store) => store.videoReducer);

    useEffect(() => {//triggers saga getting all user videos from DB on page load
        dispatch({ type: 'GET_USER_VIDEOS' });
    }, []);


    return (
        <>
            <Container>
                <Grid container
                    style={{ padding: '1em', textAlign: 'center' }}
                    spacing={1}>
                    {videos?.map((video, i) => {
                        return ( //loops thru array of videos to create each video item
                            < Grid
                                item xs={12} md={4}
                                key={video.id}>
                                <UserVideoItem
                                    key={i}
                                    video={video} />
                            </Grid>)
                    })}
                </Grid>
            </Container>
        </>
    )
}

export default UserVideos;

import React from 'react';

/******* video player  ********/
import ReactPlayer from 'react-player';


function ReactPlayerComponent({videoURL}) {
    
    return (
        <ReactPlayer
            className='react-player'
            width='100%'
            height='100%'
            url={videoURL}
            controls={true} />
    );
}

export default ReactPlayerComponent;