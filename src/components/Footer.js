import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../style/Footer.css";

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <FacebookIcon className='scM'/>
          <InstagramIcon className='scM'/>
          <TwitterIcon className='scM'/>
        </div>
         <p className='footerp'>
            @Tüm Hakları Saklıdır
         </p>
    </div>
  )
}
