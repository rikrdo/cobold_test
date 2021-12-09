import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <Box>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
}
