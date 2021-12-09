import { Button, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
    gap: '100px',
    ...theme.typography.flex,
    flexDirection: ({ direction }) => {
      return direction ? 'row-reverse' : 'initial';
    },

    padding: ' 0px calc((100vw - 1000px) / 2)',
    '@media (max-width: 1075px)': {
      padding: '0px 24px !important',
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column !important',
      gap: '0px',
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
    height: '100%',
    width: '50%',
    boxSizing: 'border-box !important',
    '@media (max-width: 1075px)': {
      width: '50%',
      paddingRight: '0px',
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
  left_div_button1: {
    boxSizing: 'border-box',
    fontWeight: 'bold',
    marginLeft: '20px 0',
    borderRadius: '5px',
    padding: '6px 50px',
    textTransform: 'capitalize',
    width: 'max-content',
    marginRight: '20px',
    '@media (max-width: 413px)': {
      padding: '4px 30px',
    },
  },
  left_div_button2: {
    boxSizing: 'border-box',
    fontWeight: 'bold',
    marginLeft: '20px 0',
    borderRadius: '5px',
    padding: '6px 40px',
    textTransform: 'capitalize',
    width: 'max-content',
    '@media (max-width: 413px)': {
      padding: '4px 20px',
    },
  },

  right_div: {
    ...theme.typography.flex,

    width: '50%',
    height: '100%',
    '@media (max-width: 1075px)': {
      width: '50%',
    },
    '@media (max-width: 600px)': {
      padding: '60px',
    },
    '@media (max-width: 380px)': {
      padding: '0px',
    },
  },
}));

export default function ReusableSection({
  firstline,
  secondline,
  content,
  firstbutton,
  secondbutton,
  config,
}) {
  const {
    root,
    left_div,
    right_div,
    left_div_h1,
    left_div_subtitle,
    left_div_button1,
    left_div_button2,
  } = useStyles({ direction: config.direction });

  return (
    <Box className={root}>
      <Box className={left_div}>
        <Typography className={left_div_h1}>
          {firstline} <br />
          {secondline}
        </Typography>
        <Typography className={left_div_subtitle}>{content}</Typography>

        {/*two lower buttons */}
        <Box display="flex">
          <Link href={firstbutton?.link || '#'}>
            <Button
              variant="contained"
              className={left_div_button1}
              LinkComponent="a"
              disableElevation
            >
              {firstbutton?.text}
            </Button>
          </Link>
          {secondbutton && (
            <Link href={secondbutton?.link || '#'}>
              <Button
                variant="outlined"
                className={left_div_button2}
                LinkComponent="a"
                disableElevation
              >
                {secondbutton?.text}
              </Button>
            </Link>
          )}
        </Box>
      </Box>
      <Box className={right_div}>
        <Image
          alt="hero image"
          src={config?.image_url || '/hero_img.png'}
          height={config.height}
          width={config.width}
        />
      </Box>
    </Box>
  );
}
