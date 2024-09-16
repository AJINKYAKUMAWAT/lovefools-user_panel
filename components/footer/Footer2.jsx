import { Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import logo from '../../assets/images/logo2.png';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const navItems = [
  "Home",
  "About us",
  "Receipt",
  "History",
  "Event",
  "Gallery",
  "Testimonial",
  "Contact us"
];

const Footer2 = () => {
  return (
    <footer className='w-full text-black shadow' style={{background:'#D4BA97'}}>
      <div className='border-gray-700 px-4 sm:px-6 lg:px-8'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} padding={2} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Image src={logo} width={150} height={50} alt="Company Logo" />
            <Typography sx={{ color:'#494646c7', marginTop: '10px',fontFamily: "__Inter_36bd41,__Inter_Fallback_36bd41, sans-serif"  }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, asperiores!
            </Typography>
          </Grid>
          
          <Grid
            item
            xs={12} 
            md={6} 
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' }, // Stack items vertically on mobile, row on desktop
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px',
              marginTop: { xs: '20px', md: '0px' } // Add margin on top for mobile
            }}
          >
            {navItems.map((i, index) => {
              return (
                <Typography 
                  key={index}
                  sx={{ 
                    color: index === 0 ? '#ED1C24' : '#000', 
                    fontSize: { xs: '1rem', md: '1.1rem' }, // Responsive font size
                    cursor: 'pointer', // Optional: Makes the nav items clickable
                    fontFamily: "__Inter_36bd41,__Inter_Fallback_36bd41, sans-serif" 
                  }}
                >
                  {i}
                </Typography>
              );
            })}
          </Grid>
        </Grid>
        <Divider sx={{ marginY: '16px' }} />
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={7} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography className='py-4 text-sm' sx={{ fontSize: { xs: '0.8rem', md: '1rem' },fontFamily: "__Inter_36bd41,__Inter_Fallback_36bd41, sans-serif"  }}>
              © 2024 Lovefools. All Rights Reserved.
            </Typography>
          </Grid>

          <Grid 
            item xs={12} md={5} 
            sx={{ 
              display: 'flex', 
              justifyContent: { xs: 'center', md: 'flex-end' }, 
              gap: '20px', 
              paddingBottom: { xs: '30px', md: '0' }  // Set to 0 instead of 'none'
            }}
          >
            <Facebook />
            <Twitter />
            <Instagram />
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer2;
