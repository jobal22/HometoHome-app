import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './GospelMenu.styled';

const GospelMenu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        <div className='title'><h1 className='titleInfo'>Gospel Presentation</h1></div>
        <div class="dropdown" >
            <h2 class="dropbtn">1. The Problem</h2>
            <div class="dropdown-content" >
                <p>"For all have sinned and fall short of the glory of God." (Romans 3:23)</p>
            </div>
        </div>
        <div class="dropdown" >
            <h2 class="dropbtn">2. The Solution</h2>
            <div class="dropdown-content" >
                <p>"...Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures..." 
                    <br></br>(1 Corinthians 15:3-4)</p>
            </div>
        </div>
        <div class="dropdown" >
            <h2 class="dropbtn">3. The Invitation</h2>
            <div class="dropdown-content" >
                <p>"Repent" (Matthew 4:17)</p>
                <p>"...if you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved." (Romans 10:9)</p>
            </div>
        </div>
    </StyledMenu>
  )
}

GospelMenu.propTypes = {
  open: bool.isRequired,
}

export default GospelMenu;