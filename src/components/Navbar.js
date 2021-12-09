import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Link as MUILink,
  Box,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import MenuIcon from '@mui/icons-material/Menu';

const headersData = () => [
  {
    label: 'Home',
    href: '/homepage',
  },
  {
    label: 'About Us',
    href: '#',
  },
  {
    label: 'Download',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
  {
    label: 'Sign In',
    href: '#',
    class: 'loginButton',
    variant: 'outlined',
  },
];

const useStyles = makeStyles((theme) => ({
  header: (props) => ({
    ...theme.typography.column,
    position: 'static',
    background: 'white',
    height: '15vh',
    justifyContent: 'center',
    padding: ' 15px calc((100vw - 1250px) / 2) !important',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  }),
  logo: {
    cursor: 'pointer',
    ...theme.typography.title2,
    color: theme.palette.secondary.main,
  },
  menuButton: {
    fontWeight: '600',
    size: '18px',
    marginLeft: '30px',
    textTransform: 'capitalize',
    '&:hover': {
      background: 'transparent',
    },
  },
  menuButtonActive: {
    fontWeight: '600',
    size: '18px',
    marginLeft: '30px',
    textTransform: 'capitalize',
    color: theme.palette.secondary.main,
    '&:hover': {
      background: 'transparent',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'black',
  },
  drawerContainer: {
    padding: '5px 0px',
    width: '280px',
  },

  loginButton: {
    fontWeight: 'bold',
    marginLeft: '20px',
    borderRadius: '5px',
    padding: '6px 60px',
    backgroundColor: 'white',
    textTransform: 'capitalize',
  },
}));

export default function Navbar() {
  const router = useRouter();

  const {
    header,
    logo,
    menuButton,
    menuButtonActive,
    toolbar,
    drawerContainer,

    loginButton,
  } = useStyles();

  const [state, setState] = useState({
    mobileView: true,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <Box>{getMenuButtons()}</Box>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100vw',
          marginRight: 0,
          marginTop: '-15px',
        }}
      >
        <Box
          justifyContent="space-between"
          display="flex"
          alignItems="center"
          width="100%"
          height="10vh"
        >
          <div>{femmecubatorLogo}</div>
          <Drawer
            {...{
              anchor: 'left',
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={drawerContainer}>
              {/* <Sidedrawer onClose={handleDrawerClose} /> */}
            </div>
          </Drawer>

          <IconButton
            style={{ color: 'black' }}
            {...{
              edge: 'start',
              color: 'inherit',
              'aria-label': 'menu',
              'aria-haspopup': 'true',
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    );
  };

  const femmecubatorLogo = (
    <Link passHref href="/">
      <Typography className={logo}>Cobold</Typography>
    </Link>
  );

  const getMenuButtons = () => {
    return headersData().map(({ label, href, variant }, index) => {
      // Im using an array incase we want to add more buttons in the future
      if (['Sign In'].includes(label)) {
        return (
          <Link passHref href={href}>
            <Button
              key={index}
              {...{
                key: label,
                color: 'primary',
                disableElevation: true,
                variant: variant,
                className: `${menuButton} ${loginButton}`,
              }}
            >
              {label}
            </Button>
          </Link>
        );
      } else {
        return (
          <Link passHref href={href}>
            <Button
              key={index}
              {...{
                key: label,
                color: 'inherit',
                className:
                  router.pathname === href ? menuButtonActive : menuButton,
              }}
            >
              {label}
            </Button>
          </Link>
        );
      }
    });
  };

  return (
    <header>
      <AppBar elevation={0} className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
