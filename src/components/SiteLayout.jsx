import React from 'react';
import {
  AppShell,
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  Stack,
  Text,
  ThemeIcon,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMapPin, IconPhone } from '@tabler/icons-react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { navigationLinks, salonInfo } from '../siteData';

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#efcf7f' : '#f7f1e3',
  fontSize: '0.95rem',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
});

const SiteLayout = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const location = useLocation();

  React.useEffect(() => {
    close();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, close]);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="100%"
        padding="xl"
        title={salonInfo.name}
        styles={{
          content: {
            background:
              'linear-gradient(180deg, rgba(8,8,8,0.98), rgba(24,18,9,0.98))',
            color: '#f7f1e3',
          },
          header: {
            background: 'transparent',
            color: '#f7f1e3',
          },
        }}
      >
        <Stack gap="lg" pt="md">
          {navigationLinks.map(({ label, path, icon: Icon }) => (
            <NavLink key={path} to={path} onClick={close} style={navLinkStyles}>
              <Group gap="sm">
                <ThemeIcon variant="light" color="gold" radius="xl">
                  <Icon size={18} />
                </ThemeIcon>
                <span>{label}</span>
              </Group>
            </NavLink>
          ))}
          <Divider color="rgba(239, 207, 127, 0.22)" />
          <Button
            component="a"
            href={salonInfo.phoneHref}
            color="gold"
            radius="xl"
            size="md"
            leftSection={<IconPhone size={18} />}
          >
            {salonInfo.phoneDisplay}
          </Button>
          <Button
            component="a"
            href={salonInfo.mapHref}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            color="gold"
            radius="xl"
            size="md"
            leftSection={<IconMapPin size={18} />}
          >
            Get directions
          </Button>
        </Stack>
      </Drawer>

      <AppShell
        header={{ height: 76 }}
        padding={0}
        styles={{
          main: {
            background:
              'radial-gradient(circle at top, rgba(233,193,96,0.06), transparent 18%), #050505',
          },
        }}
      >
        <AppShell.Header
          style={{
            background: 'rgba(8, 8, 8, 0.88)',
            borderBottom: '1px solid rgba(239, 207, 127, 0.18)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <Group h="100%" px={{ base: 'md', md: 'xl' }} justify="space-between">
            <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <Box
                component="img"
                src={salonInfo.logo}
                alt={salonInfo.name}
                h={42}
                w="auto"
              />
              <Box visibleFrom="sm">
                <Text ff="Georgia, Times New Roman, serif" size="lg" fw={600} c="gold.3">
                  {salonInfo.name}
                </Text>
                <Text size="xs" c="dimmed" tt="uppercase" style={{ letterSpacing: '0.2em' }}>
                  Elegant salon care
                </Text>
              </Box>
            </NavLink>

            <Group gap="xl" visibleFrom="md">
              {navigationLinks.map(({ label, path }) => (
                <NavLink key={path} to={path} style={navLinkStyles}>
                  {label}
                </NavLink>
              ))}
            </Group>

            <Group gap="sm">
              <Button
                component="a"
                href={salonInfo.phoneHref}
                radius="xl"
                color="gold"
                visibleFrom="sm"
              >
                Book by phone
              </Button>
              <Burger
                opened={opened}
                onClick={opened ? close : open}
                hiddenFrom="md"
                color="#efcf7f"
                aria-label="Toggle navigation"
              />
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Main>
          <Outlet />
          <Box
            px={{ base: 'md', md: 'xl' }}
            py="xl"
            style={{
              borderTop: '1px solid rgba(239, 207, 127, 0.12)',
              background: 'rgba(7, 7, 7, 0.95)',
            }}
          >
            <Group justify="space-between" align="flex-start" gap="lg">
              <Box>
                <Text ff="Georgia, Times New Roman, serif" size="xl" c="gold.3">
                  {salonInfo.name}
                </Text>
                <Text c="dimmed" maw={420}>
                  {salonInfo.tagline}
                </Text>
              </Box>
              <Stack gap={4}>
                <Text component="a" href={salonInfo.phoneHref}>
                  {salonInfo.phoneDisplay}
                </Text>
                <Text component="a" href={salonInfo.mapHref} target="_blank" rel="noreferrer">
                  {salonInfo.address}
                </Text>
              </Stack>
            </Group>
          </Box>
        </AppShell.Main>
      </AppShell>
    </>
  );
};

export default SiteLayout;
