import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

/******* getting video item  ********/
import UserVideoItem from '../UserVideoItem/UserVideoItem';

/******* styling  ********/
import { Container, Grid } from '@mui/material';


// import classNames from 'classnames';

function ManageLibrary() {

    const dispatch = useDispatch();
    const videos = useSelector((store) => store.videoReducer);
    const history = useHistory();

    //triggers saga getting all user videos and permissions from DB on page load
    useEffect(() => {
        dispatch({ type: 'GET_USER_VIDEOS' });
    }, []);

    return (
        <>
            <Container>
                <Grid container
                    style={{ padding: '1em', textAlign: 'center' }}
                    spacing={1}>

                    <Grid item
                        xs={12}>
                        <h1>Manage Library</h1>
                    </Grid>

                    {/* Map thru array of user's videos*/}

                    {videos?.map((video) => {
                        return ( //loops thru array of videos to create each video item
                            < Grid
                                item xs={12} md={4}
                                key={video.id}>
                                <UserVideoItem
                                    video={video} />
                            </Grid>)
                    })}

                </Grid>
            </Container>
        </>
    )
}

export default ManageLibrary