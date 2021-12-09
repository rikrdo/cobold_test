import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '240px',
    height: '280px',
    border: '1px solid #262626',
    padding: '20px',
    ...theme.typography.column,
    justifyContent: 'center',
    '@media (max-width: 1075px)': {
      padding: '0px 24px !important',
    },
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

export default function Actionbox({ heading }) {
  const { root, title, content, icon } = useStyles();
  return (
    <Box className={root}>
      <Typography className={title}>{heading} </Typography>
      <Typography className={content}>
        Cobold makes your contract signing and review much more easier,
        collaborate with colleagues and partners and get that contract signed
      </Typography>
      <Link href="#">
        <ArrowRightAltIcon className={icon} />
      </Link>
    </Box>
  );
}
