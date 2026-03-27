import React from 'react';
import { Box, Card, Container, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { galleryImages } from '../../siteData';

const Gallery = () => (
  <Box className="page-shell page-backdrop">
    <Container size="xl" py={{ base: 56, md: 80 }}>
      <Stack gap="md" mb="xl">
        <Text tt="uppercase" fw={700} c="gold.3" style={{ letterSpacing: '0.18em' }}>
          Photo gallery
        </Text>
        <Title order={1}>Recent salon looks</Title>
      </Stack>

      <Carousel
        withIndicators
        loop
        slideSize={{ base: '100%', sm: '50%' }}
        slideGap="md"
        align="start"
        mb="xl"
        styles={{
          indicator: {
            backgroundColor: '#efcf7f',
          },
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
                <Image src={image.src} alt={image.alt} h={{ base: 300, md: 420 }} fit="cover" />
              </Card.Section>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
        {galleryImages.map((image) => (
          <Card key={image.src} className="gold-panel" radius="xl" p="sm">
            <Card.Section>
              <Image src={image.src} alt={image.alt} h={260} fit="cover" />
            </Card.Section>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  </Box>
);

export default Gallery;
