import React from 'react';
import { Button, Image, Modal, Stack, Text, Title } from '@mantine/core';
import promoPoster from '../assets/2026 Easter Promo_page-0001.jpg';

const PromoModal = ({ opened, onClose }) => (
  <Modal
    opened={opened}
    onClose={onClose}
    centered
    size="auto"
    withCloseButton
    padding={0}
    radius="xl"
    overlayProps={{ backgroundOpacity: 0.72, blur: 5 }}
    styles={{
      content: {
        background:
          'linear-gradient(145deg, rgba(255, 215, 128, 0.1), rgba(255, 255, 255, 0.03)), rgba(13, 13, 13, 0.98)',
        border: '1px solid rgba(239, 207, 127, 0.2)',
        boxShadow: '0 24px 70px rgba(0, 0, 0, 0.48)',
        maxWidth: 'min(92vw, 720px)',
      },
      header: {
        background: 'transparent',
        padding: '0.35rem 0.35rem 0 0.35rem',
        minHeight: 0,
      },
      body: {
        padding: '0.1rem 1rem 1rem',
      },
      close: {
        color: '#efcf7f',
      },
    }}
  >
    <Stack gap="md">
      <Stack gap={6} px="xs">
        <Text tt="uppercase" fw={700} c="gold.3" style={{ letterSpacing: '0.18em' }}>
          Limited-time special
        </Text>
        <Title order={2}>2026 Easter Promo</Title>
      </Stack>

      <Image
        src={promoPoster}
        alt="2026 Easter promotional poster for Pedi N. Nails"
        radius="lg"
        fit="contain"
        mah="78vh"
      />

      <Button color="gold" radius="xl" onClick={onClose}>
        Close
      </Button>
    </Stack>
  </Modal>
);

export default PromoModal;
