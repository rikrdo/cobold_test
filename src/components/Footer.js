import { Button, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import {
  FiFacebook,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi';

const socials = [
  <FiFacebook style={{ marginRight: '10px' }} />,
  <FiLinkedin style={{ marginRight: '10px' }} />,
  <FiInstagram style={{ marginRight: '10px' }} />,
  <FiTwitter style={{ marginRight: '10px' }} />,
  <FiYoutube style={{ marginRight: '10px' }} />,
];

const footerData = [
  { label: 'Home', path: '#' },
  { label: 'About Us', path: '#' },
  { label: 'Download', path: '#' },
  { label: 'Contact', path: '#' },
  { label: 'My Account', path: '#' },
];

const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: '1px solid #353535',
    background: 'black',
    padding: ' 40px calc((100vw - 1250px) / 2)',
    display: 'flex',
    color: '#F9F9F9',
    justifyContent: 'space-between',
    '@media (max-width: 1075px)': {
      padding: '40px 24px',
    },
    '@media (max-width: 900px)': {
      flexDirection: 'column',
    },
  },
  logo: {
    cursor: 'pointer',
    ...theme.typography.title2,
    color: theme.palette.secondary.main,
    textDecoration: 'none',
  },
  footer_links: {
    '@media (max-width: 900px)': {
      margin: '25px 0',
    },
  },
  footer_link: {
    cursor: 'pointer',
    color: 'inherit',
    textDecoration: 'none',
    marginRight: '35px',
    fontSize: '.9rem',
    '@media (max-width: 900px)': {
      display: 'block',
      margin: '35px 0px',
    },
  },
  social_section: {
    '@media (max-width: 900px)': {
      ...theme.typography.column,
      alignItems: 'center',
      gap: '10px',
    },
  },
  social_text: {
    fontSize: '.9rem',
    textAlign: 'center',
    marginTop: '3px',
  },
  logo_text: {
    fontSize: '.9rem',
    marginTop: '5px',
  },
  title: {
    ...theme.typography.title3,
    marginBottom: '20px',
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
}));

export default function Footer() {
  const {
    root,
    logo,
    footer_links,
    footer_link,
    social_section,
    social_text,
    logo_text,
  } = useStyles();
  return (
    <Box className={root}>
      {/* first Section */}
      <Box>
        <Link passHref href="/">
          <Typography component="a" className={logo}>
            Cobold
          </Typography>
        </Link>
        <Typography className={logo_text}>Copyright 2021 (c) Cobold</Typography>
      </Box>
      {/* second Section */}
      <Box className={footer_links}>
        {footerData.map((item) => (
          <Link passHref href={item.path}>
            <Typography component="a" className={footer_link}>
              {item.label}
            </Typography>
          </Link>
        ))}
      </Box>
      {/* third Section */}
      <Box className={social_section}>
        <Box>{socials.map((item) => item)}</Box>
        <Typography className={social_text}>Privacy Policy</Typography>
      </Box>
    </Box>
  );
}
