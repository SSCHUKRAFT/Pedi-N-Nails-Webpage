import {
  IconBrandFacebook,
  IconHome,
  IconInfoCircle,
  IconPhoto,
  IconSparkles,
  IconTag,
} from '@tabler/icons-react';
import logo from './assets/pedi_logo.png';
import heroImage from './assets/home-bg.jpg';
import aboutImage from './assets/about-nail.jpg';
import serviceImage from './assets/services-bg.jpg';
import specialsImage from './assets/specials-bg.jpg';
import nail1 from './assets/Nail1.jpg';
import nail2 from './assets/Nail2.jpg';
import nail3 from './assets/Nail3.jpg';
import nail4 from './assets/Nail4.jpg';
import nail5 from './assets/Nail5.jpg';
import nail6 from './assets/Nail6.jpg';
import nail7 from './assets/Nail7.jpg';
import nail8 from './assets/Nail8.jpg';

export const navigationLinks = [
  { label: 'Home', path: '/', icon: IconHome },
  { label: 'About', path: '/about', icon: IconInfoCircle },
  { label: 'Gallery', path: '/gallery', icon: IconPhoto },
  { label: 'Services', path: '/services', icon: IconSparkles },
  { label: 'Specials', path: '/specials', icon: IconTag },
];

export const salonInfo = {
  name: 'Pedi N. Nails',
  logo,
  phoneDisplay: '(585) 671-2740',
  phoneHref: 'tel:585-671-2740',
  address: '2186 Empire Boulevard, Webster, NY 14580',
  mapHref: 'https://goo.gl/maps/4mRBnnfCaq5zUNYd8',
  facebookHref: 'https://www.facebook.com/PEDI-n-Nails-Webster-108709141728138',
  facebookIcon: IconBrandFacebook,
  tagline: 'Elegant nail care with a warm neighborhood touch.',
};

export const heroContent = {
  logo,
  image: heroImage,
  eyebrow: 'Webster, New York',
  title: 'The premier nail salon for the pampering you deserve.',
  description:
    'Modern manicures, indulgent pedicures, and careful finishing touches for every appointment.',
};

export const aboutContent = {
  image: aboutImage,
  heading: 'About Us',
  paragraphs: [
    'Here at Pedi N. Nails, we strive to offer our clients the best results and customer service possible. With our affordable services, you can enjoy a polished, pampered experience without overdoing the cost.',
    'We offer everything from classic manicures to luxury pedicures, and we are proud to serve Webster with attentive service, quality products, and a welcoming atmosphere.',
  ],
};

export const reviewContent = {
  googleRating: '4.7',
  googleReviewCount: '466',
  googleProfileHref:
    'https://www.google.com/maps/place/Pedi+N+Nails+Webster/@43.2014783,-77.4961466,17z/data=!4m16!1m9!3m8!1s0x89d6c914fd28a71f:0x7e896ffa600fb6f1!2sPedi+N+Nails+Webster!8m2!3d43.2014783!4d-77.4961466!9m1!1b1!16s%2Fg%2F11b73t_7nw!3m5!1s0x89d6c914fd28a71f:0x7e896ffa600fb6f1!8m2!3d43.2014783!4d-77.4961466!16s%2Fg%2F11b73t_7nw?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D',
  heading: "Don't take it from us, read these happy customer reviews!",
  reviews: [
    "Love this place! I don't live in Rochester but I always try to go when I'm in town. Their customer service is awesome...",
    'I highly recommend Pedi N Nails! This was my fist time there for a pedicure. The salon is cheerful and everyone there was very nice, and professional.',
    'I had a lovely experience. The staff was very kind and professional. My nails look amazing and lasted several weeks.',
    'Brian at Pedi and Nail Salon is amazing! He is incredibly skilled and attentive to detail. My nails have never looked better, and the whole experience was so relaxing.',
    "Extremely satisfied with my first service here! Came for my best friends bridal appointment and was blown away, I understand why it's her favorite spot!",
  ],
};

export const servicesContent = {
  image: serviceImage,
  eyebrow: 'Service Menu',
};

export const specialsContent = {
  image: specialsImage,
  title: 'Specials',
  message:
    'We do not have any active specials right now, but we would still love to welcome you in for a relaxing visit. Check back soon for seasonal offers.',
};

export const galleryImages = [
  { src: nail1, alt: 'Pink and glitter nail design' },
  { src: nail2, alt: 'Soft glossy manicure' },
  { src: nail3, alt: 'Detailed nail art close-up' },
  { src: nail4, alt: 'Neutral nail set' },
  { src: nail5, alt: 'Bold manicure design' },
  { src: nail6, alt: 'Classic polished nails' },
  { src: nail7, alt: 'Elegant sculpted nail set' },
  { src: nail8, alt: 'Decorative salon nail art' },
];

export const serviceData = {
  Manicures: [
    ['Classic Manicure', '$20'],
    ['Deluxe Manicure', '$28'],
    ['Gel Manicure', '$30'],
    ['Regular Fill', '$25'],
    ['Gel Fill', '$35'],
    ["Ombre' Fill", '$40'],
    ['Pink & White Fill', '$40'],
    ['Standard Full Set', '$35'],
    ['Gel Full Set', '$45'],
    ['White/Clear Tips Full Set', '$40'],
    ['Pink/White Full Set', '$50'],
    ["Ombre' Full Set", '$55'],
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
