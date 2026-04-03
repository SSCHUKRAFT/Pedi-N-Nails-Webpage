import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { IconArrowRight, IconMapPin, IconPhone, IconSparkles } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import PromoModal from '../../components/PromoModal';
import { heroContent, salonInfo } from '../../siteData';

const highlights = [
  'Relaxing manicures, pedicures, and more',
  'Beautiful finishing work with careful attention to detail',
  'A warm local salon experience in Webster',
];

const PROMO_STORAGE_KEY = 'pedi-n-nails-easter-promo-2026-seen';

const Home = () => {
  const [promoOpened, setPromoOpened] = useState(false);

  useEffect(() => {
    const hasSeenPromo = window.localStorage.getItem(PROMO_STORAGE_KEY);

    if (!hasSeenPromo) {
      setPromoOpened(true);
      window.localStorage.setItem(PROMO_STORAGE_KEY, 'true');
    }
  }, []);

  return (
    <>
      <PromoModal opened={promoOpened} onClose={() => setPromoOpened(false)} />

      <Box
        className="page-shell page-backdrop"
        style={{
          backgroundImage: `url(${heroContent.image})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Container size="xl" py={{ base: 90, md: 128 }} pos="relative">
          <Grid align="center" gutter="xl">
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack gap="lg">
                <Text tt="uppercase" fw={700} c="gold.3" style={{ letterSpacing: '0.22em' }}>
                  {heroContent.eyebrow}
                </Text>
                <Title order={1} maw={700} fz={{ base: 42, sm: 56, md: 72 }} lh={1.05}>
                  {heroContent.title}
                </Title>
                <Text size="xl" c="rgba(247, 241, 227, 0.78)" maw={620}>
                  {heroContent.description}
                </Text>
                <Group gap="md">
                  <Button
                    component={Link}
                    to="/services"
                    size="lg"
                    radius="xl"
                    color="gold"
                    rightSection={<IconArrowRight size={18} />}
                  >
                    Explore services
                  </Button>
                  <Button
                    component="a"
                    href={salonInfo.phoneHref}
                    size="lg"
                    radius="xl"
                    variant="outline"
                    color="gold"
                    leftSection={<IconPhone size={18} />}
                  >
                    {salonInfo.phoneDisplay}
                  </Button>
                </Group>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Paper className="gold-panel" radius="xl" p={{ base: 'lg', md: 'xl' }}>
                <Stack gap="lg">
                  <Image
                    src={heroContent.logo}
                    alt={salonInfo.name}
                    fit="contain"
                    h={160}
                    w="100%"
                  />
                  <SimpleGrid cols={1} spacing="md">
                    {highlights.map((item) => (
                      <Group key={item} align="flex-start" wrap="nowrap">
                        <ThemeIcon color="gold" variant="light" radius="xl" mt={2}>
                          <IconSparkles size={16} />
                        </ThemeIcon>
                        <Text size="lg">{item}</Text>
                      </Group>
                    ))}
                  </SimpleGrid>
                  <Group justify="space-between" gap="sm">
                    <Group gap="xs" wrap="nowrap">
                      <IconMapPin size={18} color="#efcf7f" />
                      <Text size="sm" c="dimmed">
                        {salonInfo.address}
                      </Text>
                    </Group>
                  </Group>
                </Stack>
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>

        <Container size="xl" py={{ base: 48, md: 72 }}>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            <Paper className="gold-panel" radius="xl" p="xl">
              <Text c="gold.3" tt="uppercase" fw={700} style={{ letterSpacing: '0.16em' }}>
                Salon feel
              </Text>
              <Title order={3} mt="sm">
                Luxurious, polished, and welcoming
              </Title>
              <Text mt="md" c="rgba(247, 241, 227, 0.78)">
                We strive to provide a luxurious, polished, and welcoming experience for every client.
              </Text>
            </Paper>
            <Paper className="gold-panel" radius="xl" p="xl">
              <Text c="gold.3" tt="uppercase" fw={700} style={{ letterSpacing: '0.16em' }}>
                Local Business
              </Text>
              <Title order={3} mt="sm">
                Part of the Webster community
              </Title>
              <Text mt="md" c="rgba(247, 241, 227, 0.78)">
                Support a local business and help keep the Webster community thriving.
              </Text>
            </Paper>
            <Paper className="gold-panel" radius="xl" p="xl">
              <Text c="gold.3" tt="uppercase" fw={700} style={{ letterSpacing: '0.16em' }}>
                Ready to book
              </Text>
              <Title order={3} mt="sm">
                Always accepting new clients
              </Title>
              <Text mt="md" c="rgba(247, 241, 227, 0.78)">
                We're always happy to welcome new clients and provide them with the same exceptional service they expect.
              </Text>
            </Paper>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
