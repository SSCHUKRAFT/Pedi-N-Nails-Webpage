import React from 'react';
import { Box, Button, Container, Paper, Stack, Text, Title } from '@mantine/core';
import { IconPhone } from '@tabler/icons-react';
import { salonInfo, specialsContent } from '../../siteData';

const Specials = () => (
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
      <Paper className="gold-panel" radius="xl" p={{ base: 'xl', md: '3rem' }}>
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
      </Paper>
    </Container>
  </Box>
);

export default Specials;
