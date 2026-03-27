import React from 'react';
import {
  Accordion,
  Box,
  Container,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconSparkles } from '@tabler/icons-react';
import { serviceData, servicesContent } from '../../siteData';

const Services = () => (
  <Box
    className="page-shell"
    style={{
      backgroundImage: `url(${servicesContent.image})`,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}
  >
    <Container size="lg" py={{ base: 56, md: 84 }} pos="relative">
      <Stack gap="md" mb="xl">
        <Text tt="uppercase" fw={700} c="gold.3" style={{ letterSpacing: '0.18em' }}>
          {servicesContent.eyebrow}
        </Text>
        <Title order={1}>Services and pricing</Title>
        <Text size="lg" c="rgba(247, 241, 227, 0.78)" maw={660}>
          The service list is now organized into expandable categories so it feels cleaner on mobile and easier to skim on desktop.
        </Text>
      </Stack>

      <Paper className="gold-panel" radius="xl" p={{ base: 'md', md: 'xl' }}>
        <Accordion
          variant="separated"
          radius="lg"
          styles={{
            item: {
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(239, 207, 127, 0.14)',
            },
            label: {
              color: '#f7f1e3',
              fontSize: '1.1rem',
              letterSpacing: '0.06em',
            },
            chevron: {
              color: '#efcf7f',
            },
            content: {
              color: '#f7f1e3',
            },
          }}
        >
          {Object.entries(serviceData).map(([category, services]) => (
            <Accordion.Item key={category} value={category}>
              <Accordion.Control icon={<IconSparkles size={18} color="#efcf7f" />}>
                {category}
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap="sm">
                  {services.map(([name, price]) => (
                    <Grid key={`${category}-${name}`} align="center">
                      <Grid.Col span={8}>
                        <Text size="lg">{name}</Text>
                      </Grid.Col>
                      <Grid.Col span={4}>
                        <Group justify="flex-end">
                          <Text size="lg" fw={700} c="gold.3">
                            {price}
                          </Text>
                        </Group>
                      </Grid.Col>
                    </Grid>
                  ))}
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Paper>
    </Container>
  </Box>
);

export default Services;
