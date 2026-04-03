import React, { useState } from 'react';
import { Box, Button, Container, Group, Image, Paper, Stack, Text, Title } from '@mantine/core';
import PromoModal from '../../components/PromoModal';
import promoPoster from '../../assets/2026 Easter Promo_page-0001.jpg';
import { specialsContent } from '../../siteData';

const Specials = () => {
  const [promoOpened, setPromoOpened] = useState(false);

  return (
    <>
      <PromoModal opened={promoOpened} onClose={() => setPromoOpened(false)} />

      <Box
        className="page-shell"
        style={{
          backgroundImage: `url(${specialsContent.image})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Container size="md" py={{ base: 80, md: 120 }} pos="relative">
          <Stack gap="xl">
            {/* <Paper className="gold-panel" radius="xl" p={{ base: 'xl', md: '3rem' }}>
              <Stack gap="lg" ta="center">
                <Text tt="uppercase" fw={700} c="gold.3" style={{ letterSpacing: '0.2em' }}>
                  Seasonal updates
                </Text>
                <Title order={1}>{specialsContent.title}</Title>
                <Text size="xl" c="rgba(247, 241, 227, 0.8)">
                  {specialsContent.message}
                </Text>
                <Button
                  component="a"
                  href={salonInfo.phoneHref}
                  color="gold"
                  variant="light"
                  radius="xl"
                  size="lg"
                  leftSection={<IconPhone size={18} />}
                >
                  Call for availability
                </Button>
              </Stack>
            </Paper> */}

            <Paper className="gold-panel" radius="xl" p={{ base: 'md', md: 'xl' }}>
              <Stack gap="lg">
                <Stack gap={6} ta="center">
                  <Text tt="uppercase" fw={700} c="gold.3" style={{ letterSpacing: '0.2em' }}>
                    Easter feature
                  </Text>
                  <Title order={2}>2026 Easter Promo</Title>
                  <Text c="rgba(247, 241, 227, 0.8)">
                    Enjoy the current holiday promotion and tap below to view the flyer larger.
                  </Text>
                </Stack>

                <Image
                  src={promoPoster}
                  alt="2026 Easter promotional poster for Pedi N. Nails"
                  radius="lg"
                  fit="contain"
                  mah={720}
                />

                <Group justify="center">
                  <Button color="gold" radius="xl" onClick={() => setPromoOpened(true)}>
                    View Full Promo
                  </Button>
                </Group>
              </Stack>
            </Paper>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Specials;
