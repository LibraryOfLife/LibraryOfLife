import React, {useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './UserPage.css';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import UserVideos from '../UserVideos/UserVideos';
import Connections from '../Connections/Connections';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const view = useParams().view;

  

  // useEffect(() => {
  //   history.push('/user/videos')
  // },[])

  return (
    <div className="container">
      <div id='images'>
        <img id='banner-img' src='https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg' alt='banner image' />
        <img id='profile-img' src='https://annemariesegal.files.wordpress.com/2017/04/adobestock_116914002-cropped-young-woman-suit.jpg?w=300&h=295' alt='a very good looking individual' />
        <div id='name-and-location'>
          <h1>Name</h1>
          <h2>Location</h2>
        </div>
      </div>
      <div id='profile-info'>
        <Button id='manage-library' variant='outlined'>Manage Library</Button>
        <Button variant='outlined' onClick={() => {history.push('/user/connections')}}>My Connections</Button>
      </div>
{/* ////////////////////////////////////////// */}

      
      {view == "videos" &&  
        <UserVideos/>}
      
      {view == "connections" && 
        <Connections/>}
       

    </div>



  );
}

// this allows us to use <App /> in index.js
export default UserPage;
