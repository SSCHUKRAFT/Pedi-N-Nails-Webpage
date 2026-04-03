import React from 'react';
import { Box, Card, Container, Image, Stack, Text, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { galleryImages } from '../../siteData';

const Gallery = () => (
  <Box className="page-shell page-backdrop">
    <Container size="xl" py={{ base: 32, md: 80 }}>
      <Stack gap="md" mb={{ base: 'lg', md: 'xl' }}>
        <Text tt="uppercase" fw={700} c="gold.3" style={{ letterSpacing: '0.18em' }}>
          Photo gallery
        </Text>
        <Title order={1}>Recent salon looks</Title>
      </Stack>

      <Carousel
        loop
        slideSize={{ base: '100%', sm: '50%', lg: '33.333333%' }}
        slideGap="md"
        align="start"
        draggable
        controlSize={36}
        mb={{ base: 'md', md: 'xl' }}
        styles={{
          control: {
            backgroundColor: 'rgba(13, 13, 13, 0.85)',
            borderColor: 'rgba(239, 207, 127, 0.3)',
            color: '#efcf7f',
          },
        }}
      >
        {galleryImages.map((image) => (
          <Carousel.Slide key={image.src}>
            <Card className="gold-panel" radius="xl" p="sm">
              <Card.Section>
                <Image
                  src={image.src}
                  alt={image.alt}
                  h={{ base: '62vh', sm: 420, md: 460 }}
                  mah={{ base: 560, sm: 'none' }}
                  fit="cover"
                />
              </Card.Section>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  </Box>
);

export default Gallery;
