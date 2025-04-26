import React from 'react';
import './services.css';
import backgroundImg from '../../assets/services-bg.jpg';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const serviceData = {
  Manicures: [
    ['Classic Manicure', '$20'],
    ['Deluxe Manicure', '$28'],
    ['Gel Manicure', '$30'],
    ['Regular Fill', '$25'],
    ['Gel Fill', '$35'],
    ['Ombre\' Fill', '$40'],
    ['Pink & White Fill', '$40'],
    ['Standard Full Set', '$35'],
    ['Gel Full Set', '$45'],
    ['White/Clear Tips Full Set', '$40'],
    ['Pink/White Full Set', '$50'],
    ['Ombre\' Full Set', '$55'],
    ['Standard Dipping Powder', '$40'],
    ['Dipping Powder With Tip', '$50'],
    ['Dipping Powder With French', '$50'],
  ],
  Pedicures: [
    ['Standard Pedicure', '$30'],
    ['Codi Pedicure', '$45'],
    ['Gel Pedicure', '$50'],
    ['Detox Signature Pedicure', '$55'],
    ['Collagen Pedicure', '$65'],
    ['24K Golden Pedicure', '$75'],
    ['Add Gel Polish', '$20'],
  ],
  Waxing: [
    ['Eyebrow Wax', '$12'],
    ['Chin Wax', '$12'],
    ['Lip Wax', '$10'],
    ['Other Wax', 'Ask For Price'],
  ],
  'Additional Services': [
    ['Standard Nail Polish Change', '$10'],
    ['Standard Toe Nail Polish Change', '$15'],
    ['Gel Nail Polish Change', '$25'],
    ['Gel Toe Nail Polish Change', '$25'],
    ['Nails Shape', '$5'],
    ['Chrome Color', '$10'],
    ['Cat-Eyes', '$10'],
    ['Gel Removal', '$5'],
    ['Acrylic Removal', '$15'],
    ['Dip Powder', '$5'],
  ],
  'Kids 10 & Under': [
    ['Manicure', '$15'],
    ['Pedicure', '$20'],
    ['Nail Art/Design', '$5'],
  ],
};

const Services = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      id="services"
      sx={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundAttachment: isSmallScreen ? 'initial' : 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        py: 6,
        px: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.62)',
          color: 'white',
          width: {
            xs: '90vw',
            sm: '80vw',
            md: '60vw',
          },
          borderRadius: '40px',
          p: {
            xs: 2,
            sm: 4,
          },
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontFamily: 'var(--font-family)',
            textDecoration: 'underline',
            textUnderlineOffset: '20%',
            fontSize: {
              xs: '24px',
              sm: '32px',
              md: '36px',
            },
            letterSpacing: '2px',
            pb: 3,
          }}
        >
          Services
        </Typography>

        {Object.entries(serviceData).map(([category, services]) => (
          <Accordion
            key={category}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: 'white',
              mb: 2,
              '&:before': { display: 'none' },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: {
                    xs: '20px',
                    sm: '24px',
                    md: '28px',
                  },
                }}
              >
                {category}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={1}>
                {services.map(([name, price], index) => (
                  <React.Fragment key={index}>
                    <Grid item xs={8}>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: '14px',
                            sm: '16px',
                            md: '18px',
                          },
                        }}
                      >
                        {name}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        align="right"
                        sx={{
                          fontSize: {
                            xs: '14px',
                            sm: '16px',
                            md: '18px',
                          },
                        }}
                      >
                        {price}
                      </Typography>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </Box>
  );
};

export default Services;