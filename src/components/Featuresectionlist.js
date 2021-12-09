import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5px',
    color: (props) => props.color || '#424242',
    marginBottom: '15px',

    '@media (max-width: 1075px)': {
      padding: '0px 24px ',
    },
  },
  title: {
    ...theme.typography.title3,
    marginBottom: '10px',
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

export default function Featuresectionlist({ color }) {
  const { root, title, content, icon } = useStyles({ color: color });
  return (
    <Box className={root}>
      <Typography className={title}>Realtime Collaboration</Typography>
      <Typography className={content}>
        Cobold makes your contract signing and review much more easier
      </Typography>
    </Box>
  );
}
