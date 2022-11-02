import { nanoid } from 'nanoid';
import {
  facebook,
  icon_1,
  icon_2,
  icon_3,
  instagram,
  pinterest,
  twitter,
} from '../assets';

export const stats = [
  {
    id: nanoid(),
    icon: icon_1,
    heading: 'Brand Recognition',
    paragraph:
      'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
  },
  {
    id: nanoid(),
    icon: icon_2,
    heading: 'Detailed Records',
    paragraph:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions',
  },
  {
    id: nanoid(),
    icon: icon_3,
    heading: 'Fully Customizable',
    paragraph:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement',
  },
];

export const socials = [
  {
    id: nanoid(),
    icon: facebook,
    name: 'facebook',
  },
  {
    id: nanoid(),
    icon: twitter,
    name: 'twitter',
  },
  {
    id: nanoid(),
    icon: instagram,
    name: 'instagram',
  },
  {
    id: nanoid(),
    icon: pinterest,
    name: 'pinterest',
  },
];

export const footerLinks = [
  {
    id: nanoid(),
    heading: 'Features',
    subLinks: [
      {
        id: nanoid(),
        link: 'Link Shortening',
      },
      {
        id: nanoid(),
        link: 'Branded Links',
      },
      {
        id: nanoid(),
        link: 'Analytics',
      },
    ],
  },
  {
    id: nanoid(),
    heading: 'Resources',
    subLinks: [
      {
        id: nanoid(),
        link: 'Blog',
      },
      {
        id: nanoid(),
        link: 'Developers',
      },
      {
        id: nanoid(),
        link: 'Support',
      },
    ],
  },
  {
    id: nanoid(),
    heading: 'Company',
    subLinks: [
      {
        id: nanoid(),
        link: 'About',
      },
      {
        id: nanoid(),
        link: 'Our Team',
      },
      {
        id: nanoid(),
        link: 'Careers',
      },
      {
        id: nanoid(),
        link: 'Contact',
      },
    ],
  },
];
