import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import Featuresectionlist from './Featuresectionlist';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
    background: 'black',
    minHeight: '100vh',
    height: 'auto',
    border: '1px solid #262626',
    padding: ' 60px calc((100vw - 1210px) / 2)',

    '@media (max-width: 1075px)': {
      padding: '20px 24px !important',
    },
  },
  root_upper: {
    display: 'flex',
    '@media (max-width: 1100px)': {
      '& > :nth-child(1)': {
        width: '60%',
      },
      '& > :nth-child(2)': {
        width: '40%',
        marginLeft: '0px',
      },
    },
    '@media (max-width: 660px)': {
      flexDirection: 'column',
      alignItems: 'center',
      '& > :nth-child(1)': {
        width: '80%',
      },
      '& > :nth-child(2)': {
        width: '80%',
      },
    },
    '@media (max-width: 450px)': {
      '& > :nth-child(1)': {
        width: '100%',
      },
      '& > :nth-child(2)': {
        marginTop: '30px',
        width: '100%',
      },
    },
  },
  upper_left: {
    width: '75%',
  },
  upper_right: {
    width: '25%',
    marginLeft: '-150px',
  },

  title: {
    ...theme.typography.title2,
    marginBottom: '30px',
  },
  content: {
    ...theme.typography.subtitle1,
    lineHeight: '21px',
  },
  icon: {
    fontSize: 30,
    color: '#F5A528',
    marginTop: '15px',
    width: '35px',
    transition: 'all 1s ease',
    '&:hover': {
      marginLeft: '10px',
    },
  },
  lower_section: {
    ...theme.typography.column,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#F9F9F9',
    margin: '80px 0px',
  },
  lower_section_subtitle: {
    fontSize: '0.9rem',
    textAlign: 'center',
    width: '30%',
    '@media (max-width: 450px)': {
      width: '60%',
    },
  },
  lower_section_button: {
    background: '#262626',
    color: '#F9F9F9',
    textTransform: 'capitalize',
    fontSize: '.8rem',
    borderRadius: '5px',
    padding: '5px 40px',
    '&:hover': {
      background: 'blue',
    },
  },
}));

export default function FeaturesSection() {
  const {
    root,
    title,
    root_upper,
    upper_right,
    upper_left,
    lower_section,
    lower_section_subtitle,
    lower_section_button,
  } = useStyles();
  return (
    <Box className={root}>
      {/* upper section */}
      <Box className={root_upper}>
        {/* upper left */}
        <Box className={upper_left}>
          <Typography className={title}>Features.</Typography>
          <Image src="/features_img.png" width={650} height={400} />
        </Box>
        {/* upper right */}
        <Box className={upper_right}>
          <Featuresectionlist color="#F9F9F9" />
          <Featuresectionlist />
          <Featuresectionlist />
          <Featuresectionlist />
        </Box>
      </Box>
      {/* lower section */}
      <Box className={lower_section}>
        <Typography className={title}>Download App</Typography>
        <Typography className={lower_section_subtitle}>
          Download the Cobold Mobile App and start managing your contracts like
          a PRO!
        </Typography>
        <Box margin="50px" gap="20px" display="flex">
          <Image src="/google.png" width={90} height={30}></Image>
          <Image src="/apple.png" width={90} height={30}></Image>
        </Box>
        <Button className={lower_section_button}>Get App</Button>
      </Box>
    </Box>
  );
}
