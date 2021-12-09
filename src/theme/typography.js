/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */
export function themeTypography(theme) {
  return {
    fontFamily: ['"Mulish"', 'Source Sans Pro'].join(','),
    title1: {
      lineHeight: '70px',
      fontSize: 'clamp(35px, 4vw, 60px)',
      fontWeight: 'bold',
    },
    title2: {
      lineHeight: '40px',
      fontSize: 'clamp(1.6rem, 2.5vw, 60px)',
      fontWeight: 'bold',
    },
    title3: {
      lineHeight: '30px',
      fontSize: 'clamp(1.1rem, 1.4vw, 50px)',
      fontWeight: '700',
    },
    subtitle1: {
      fontWeight: 'bold',
      fontSize: '0.9rem',
    },
    flex: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
    },
  };
}
