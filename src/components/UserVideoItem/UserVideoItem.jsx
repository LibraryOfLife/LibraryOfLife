import React from "react";
import './UserVideoItem.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';

/******* video player  ********/
import ReactPlayer from 'react-player';

/******* icons  ********/
import { VscTrash } from "react-icons/vsc";
import { SiSlideshare } from "react-icons/si";

/******* buttons / dropdown menus  ********/
import ShareButton from "../_Widgets/ShareButton";
import PermissionDropdown from "../_Widgets/PermissionDropdown";
import DeleteButton from "../_Widgets/DeleteButton";

/******* MUI structure and media card ********/
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import ShareDialogBox from "../_Widgets/ShareDialogBox";


function UserVideoItem({ video }) {

    // check if user owns videos; don't render edit/delete buttons if not
    const user = useSelector((store) => store.user);

    const handleClickEdit = () => {
        console.log('clicked into dialog');
    };

    return (
        <>
            <Container>

                <Card sx={{ minHeight: '18.5em' }}>
                    <Typography
                        style={{ margin: '.5em' }}
                        gutterBottom variant="h7"
                        component="div">
                        {video.prompt}
                    </Typography>

                    <ReactPlayer
                        className='react-player'
                        width='100%'
                        height='100%'
                        url={video.url}
                        controls={true} />

                    {/* if logged-in user, show permissions toggle, delete, and share options*/}
                    {user.id == video.user_id ?
                        <>
                            <CardActions style={{ display: 'contents' }}>
                                <PermissionDropdown />

                                <div style={{
                                    marginBottom: '0.5em',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'nowrap',
                                    justifyContent: 'center'
                                }}>
                                    <DeleteButton
                                        video={video} />

                                    <ShareDialogBox
                                        open={open}
                                        onClose={() => setOpen(false)}
                                        aria-labelledby="confirm-dialog"
                                        title="Share"
                                        callback={handleClickEdit}
                                    />
                                </div>

                            </CardActions>
                        </>
                        :
                        null}

                </Card>
            </Container>
        </>
    )
}

export default UserVideoItem;