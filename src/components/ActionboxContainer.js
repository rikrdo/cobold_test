import { Button, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';
import Actionbox from './Actionbox';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.flex,
    minHeight: '70vh',
    height: 'auto',
    flexWrap: 'wrap',

    gap: '60px',
    padding: ' 15px calc((100vw - 1210px) / 2) !important',

    justifyContent: 'center',
    '@media (max-width: 600px)': {
      padding: '0px 24px !important',
      marginTop: '100px',
    },
  },
}));

export default function ActionboxContainer() {
  const { root } = useStyles();
  return (
    <Box className={root} display="flex">
      {['Create', 'Collaborate', 'Negotiate', 'Sign'].map((item, index) => (
        <Actionbox heading={item} key={index} />
      ))}
    </Box>
  );
}
