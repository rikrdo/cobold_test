import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '85vh',
    ...theme.typography.flex,
    padding: ' 0px calc((100vw - 1210px) / 2) !important',
    '@media (max-width: 1075px)': {
      padding: '0px 24px !important',
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      height: 'auto',
      '& > :nth-child(1)': {
        width: '100%',
        paddingRight: '0px',
        marginBottom: '70px',
      },
      '& > :nth-child(2)': {
        width: '100%',
      },
    },
  },
  left_div: {
    paddingTop: '70px',
    background: "url('leaderboard_bg.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: '280px',
    backgroundPosition: 'top left',
    height: '100%',
    width: '40%',
    boxSizing: 'border-box !important',
    '@media (max-width: 1075px)': {
      width: '50%',
      paddingRight: '100px',
    },
    '@media (max-width: 400px)': {
      ...theme.typography.column,
      alignItems: 'center',
    },
  },
  left_div_h1: {
    ...theme.typography.title1,
    '@media (max-width: 1075px)': {
      lineHeight: '50px',
    },
    '@media (max-width: 400px)': {
      textAlign: 'center',
    },
  },
  left_div_subtitle: {
    ...theme.typography.subtitle1,
    margin: '25px 0',
  },
  left_div_button: {
    fontWeight: 'bold',
    marginLeft: '20px 0',
    borderRadius: '5px',
    padding: '6px 50px',
    textTransform: 'capitalize',
    width: 'max-content',
  },

  right_div: {
    ...theme.typography.flex,
    width: '60%',
    height: '100%',
    '@media (max-width: 1075px)': {
      width: '50%',
    },
    '@media (max-width: 600px)': {
      padding: '50px',
    },
    '@media (max-width: 335px)': {
      padding: '0px',
    },
  },
}));

export default function Hero() {
  const {
    root,
    left_div,
    right_div,
    left_div_h1,
    left_div_subtitle,
    left_div_button,
  } = useStyles();

  return (
    <Box className={root}>
      <Box className={left_div}>
        <Typography className={left_div_h1}>
          Plan.
          <br />
          Collaborate.
          <br />
          Sign.
          <br />
        </Typography>
        <Typography className={left_div_subtitle}>
          Cobold makes your contract signing and review much more easier,
          collaborate with colleagues and partners and get that contract signed
          <span style={{ color: '#F5A528', fontWeight: 'bold' }}>
            3x faster
          </span>
        </Typography>
        <Link href="#">
          <Button
            variant="contained"
            className={left_div_button}
            LinkComponent="a"
            disableElevation
          >
            Learn More
          </Button>
        </Link>
      </Box>
      <Box className={right_div}>
        <Image alt="hero image" src="/hero_img.png" height={380} width={470} />
      </Box>
    </Box>
  );
}
