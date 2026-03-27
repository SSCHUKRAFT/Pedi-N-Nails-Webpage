import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import {
  IconBrandFacebook,
  IconMapPin,
  IconPhone,
  IconStarFilled,
} from '@tabler/icons-react';
import { aboutContent, reviewContent, salonInfo } from '../../siteData';

const marqueeReviews = [...reviewContent.reviews, ...reviewContent.reviews];

const About = () => (
  <Box className="page-shell page-backdrop">
    <Container size="xl" py={{ base: 56, md: 80 }}>
      <Grid gutter="xl" align="stretch">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper className="gold-panel" radius="xl" p={{ base: 'lg', md: 'xl' }} h="100%">
            <Stack gap="lg">
              <Text tt="uppercase" fw={700} c="gold.3" style={{ letterSpacing: '0.18em' }}>
                Meet the salon
              </Text>
              <Title order={1}>{aboutContent.heading}</Title>
              {aboutContent.paragraphs.map((paragraph) => (
                <Text key={paragraph} size="lg" c="rgba(247, 241, 227, 0.78)">
                  {paragraph}
                </Text>
              ))}
              <Group gap="md">
                <Button
                  component="a"
                  href={salonInfo.mapHref}
                  target="_blank"
                  rel="noreferrer"
                  radius="xl"
                  color="gold"
                  leftSection={<IconMapPin size={18} />}
                >
                  Visit us
                </Button>
                <Button
                  component="a"
                  href={salonInfo.phoneHref}
                  radius="xl"
                  variant="outline"
                  color="gold"
                  leftSection={<IconPhone size={18} />}
                >
                  Call the salon
                </Button>
              </Group>
            </Stack>
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper className="gold-panel" radius="xl" p={{ base: 'lg', md: 'xl' }} h="100%">
            <Stack gap="lg" h="100%">
              <Stack gap="sm">
                <Text tt="uppercase" fw={700} c="gold.3" style={{ letterSpacing: '0.18em' }}>
                  Google reviews
                </Text>
                <Title order={2}>{reviewContent.heading}</Title>
              </Stack>

              <Group justify="space-between" align="center" gap="lg">
                <Group gap="md" wrap="nowrap">
                  <ThemeIcon color="gold" variant="light" radius="xl" size={52}>
                    <IconStarFilled size={24} />
                  </ThemeIcon>
                  <Stack gap={0}>
                    <Text size="2.2rem" fw={700} ff="Georgia, Times New Roman, serif">
                      {reviewContent.googleRating}
                      <Text span size="lg" c="rgba(247, 241, 227, 0.72)">
                        {' '}
                        / 5
                      </Text>
                    </Text>
                    <Text c="rgba(247, 241, 227, 0.78)">
                      Average rating from {reviewContent.googleReviewCount} Google reviews
                    </Text>
                  </Stack>
                </Group>
                <Group gap={6}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <IconStarFilled key={index} size={20} color="#efcf7f" />
                  ))}
                </Group>
              </Group>

              <Box className="review-marquee">
                <Box className="review-marquee-track">
                  {marqueeReviews.map((review, index) => (
                    <Paper
                      key={`${index}-${review}`}
                      radius="lg"
                      p="lg"
                      mr="md"
                      style={{
                        minWidth: 320,
                        maxWidth: 320,
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(239, 207, 127, 0.14)',
                      }}
                    >
                      <Stack gap="md">
                        <Group gap={4}>
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <IconStarFilled key={starIndex} size={16} color="#efcf7f" />
                          ))}
                        </Group>
                        <Text c="rgba(247, 241, 227, 0.84)" lh={1.6}>
                          "{review}"
                        </Text>
                      </Stack>
                    </Paper>
                  ))}
                </Box>
              </Box>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>

      <Paper className="gold-panel" radius="xl" p={{ base: 'lg', md: 'xl' }} mt="xl">
        <Group justify="space-between" gap="lg" align="center">
          <Stack gap="xs">
            <Title order={3}>Stay connected</Title>
            <Text c="rgba(247, 241, 227, 0.78)" maw={520}>
              Visit the salon, call ahead, or keep up with updates on Facebook.
            </Text>
          </Stack>
          <Group gap="md" align="center">
            <Button
              component="a"
              href={salonInfo.mapHref}
              target="_blank"
              rel="noreferrer"
              variant="subtle"
              color="gold"
              size="lg"
              styles={{
                root: {
                  minHeight: 58,
                },
                inner: {
                  alignItems: 'center',
                },
                label: {
                  fontSize: '1rem',
                  fontWeight: 600,
                },
              }}
              leftSection={
                <ThemeIcon color="gold" variant="light" radius="xl">
                  <IconMapPin size={16} />
                </ThemeIcon>
              }
            >
              {salonInfo.address}
            </Button>
            <Button
              component="a"
              href={salonInfo.facebookHref}
              target="_blank"
              rel="noreferrer"
              variant="subtle"
              color="gold"
              size="lg"
              styles={{
                root: {
                  minHeight: 58,
                },
                inner: {
                  alignItems: 'center',
                },
                label: {
                  fontSize: '1rem',
                  fontWeight: 600,
                },
              }}
              leftSection={
                <ThemeIcon color="gold" variant="light" radius="xl">
                  <IconBrandFacebook size={16} />
                </ThemeIcon>
              }
            >
              Facebook
            </Button>
          </Group>
        </Group>
      </Paper>
    </Container>
  </Box>
);

export default About;
