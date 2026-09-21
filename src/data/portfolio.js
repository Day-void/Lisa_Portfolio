/**
 * Single source of truth for everything on the page.
 * Components stay dumb: they receive slices of this through props.
 */

export const profile = {
  firstName: 'Lisa',
  lastName: 'Mazhambe',
  role: 'Graphic & product designer',
  location: 'Harare, Zimbabwe',
  tagline: 'Creating ideas that connect, inspire and communicate.',
  portrait: '/images/portrait-hero.png',
  portraitAlt:
    'Ink illustration of a woman in headphones, her hair drawn as swirling patterns',
  intro: [
    'I turn ideas into visual design that is simple, creative and meaningful — work you can read at a glance and still enjoy on the second look.',
    'I care about branding, visual design and digital experiences: exploring ideas, solving design problems, and making things that are useful as well as beautiful.',
    'Good design is more than making things look good. It is understanding people, solving problems and communicating clearly. I am still learning, experimenting and sharpening my craft.',
  ],
}

export const contact = {
  email: 'lisamazhambe45@gmail.com',
  phone: '+263 78 553 1295',
  linkedin: 'lisa Mazhambe',
  linkedinUrl:
    'https://www.linkedin.com/in/lisa-mazhambe-6048143b1?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  portrait: '/images/portrait-contact.png',
  portraitAlt:
    'Ink illustration of a head in headphones filled with a city skyline and music notes',
  note: 'Open to new opportunities and collaborations — brand identity, print, and product work.',
}

export const skillGroups = [
  {
    id: 'design',
    title: 'Design',
    items: [
      'Brand identity',
      'Logo design',
      'Typography',
      'Poster design',
      'Print design',
      'Layout design',
      'Social media design',
      'UI/UX design',
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    items: [
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Figma',
      'Affinity',
      'Canva',
      'ChatGPT',
      'Gemini',
      'Claude',
    ],
  },
]

export const approach = [
  {
    step: 'Understand',
    detail: 'Learn the business, the people it serves, and the problem underneath the request.',
  },
  {
    step: 'Explore',
    detail: 'Sketch widely. Test type, colour and layout before committing to a direction.',
  },
  {
    step: 'Design',
    detail: 'Build the chosen route properly — a system, not a one-off picture.',
  },
  {
    step: 'Refine',
    detail: 'Review, cut, tighten, and prepare files that survive print and screen.',
  },
]

export const credentials = [
  { issuer: 'Uxcel', title: 'Fundamentals of UI/UX design', status: 'Completed' },
  { issuer: 'Uxcel', title: 'Introduction to design', status: 'Completed' },
  { issuer: 'Coursera', title: 'Graphic design', status: 'In progress' },
]

export const projects = [
  {
    id: 'innerlight',
    number: '01',
    name: 'InnerLight',
    kind: 'Meditation & therapy',
    role: 'Brand identity, print and social design',
    accent: 'plum',
    lede: 'Where you find yourself, peace and strength.',
    body: [
      'InnerLight is a mental wellness app built as a safe, simple space where people can reflect, write down what they are carrying, and look after their well-being.',
      'The identity had to feel supportive rather than clinical — a lotus-and-figure mark, deep plum, and brass, carried across cards, letterhead and social posts so the calm holds wherever the brand appears.',
    ],
    tags: ['Logo design', 'Stationery', 'Social media', 'UI/UX'],
    media: [
      {
        src: '/images/innerlight-cards-a.jpg',
        alt: 'InnerLight business cards in plum and brass on a wooden surface',
        caption: 'Business card, front and back',
        span: 'half',
      },
      {
        src: '/images/innerlight-cards-b.jpg',
        alt: 'InnerLight letterhead and compliment slip mockup',
        caption: 'Letterhead and welcome letter',
        span: 'half',
      },
      {
        src: '/images/innerlight-social-1.jpg',
        alt: 'Psychological therapy social post with consultation offer',
        caption: 'Service announcement post',
        span: 'half',
      },
      {
        src: '/images/innerlight-social-2.jpg',
        alt: 'Social post reading know what works for you, over a meditation photograph',
        caption: 'Awareness post',
        span: 'half',
      },
    ],
  },
  {
    id: 'addict',
    number: '02',
    name: 'Addict',
    kind: 'Hair, piercing & beauty salon',
    role: 'Brand redesign, in a team of three',
    accent: 'brass',
    lede: 'Beauty you’ll crave.',
    body: [
      'Addict already had customers and a sign on the street — what it did not have was an identity that looked as good as the work inside.',
      'Working as a team of three, we redrew the logo around a linked A and S monogram, fixed the hierarchy on every poster, and rebuilt the signage and cards so the salon reads as professional from across the road.',
    ],
    tags: ['Rebrand', 'Signage', 'Poster design', 'Print'],
    beforeAfter: {
      before: '/images/addict-sign-before.jpg',
      after: '/images/addict-sign-after.jpg',
      beforeAlt: 'Original Addict salon sign with a purple wordmark and face icon',
      afterAlt: 'Redesigned Addict sign with a serif wordmark and gold monogram',
      caption: 'Street signage — drag to compare the original and the redesign',
    },
    media: [
      {
        src: '/images/addict-card.jpg',
        alt: 'Black Addict business cards with gold detail',
        caption: 'Business cards',
        span: 'half',
      },
      {
        src: '/images/addict-lightbox.jpg',
        alt: 'Addict logo on a wall-mounted light box',
        caption: 'Wall-mounted light box',
        span: 'half',
      },
      {
        src: '/images/addict-poster-1.jpg',
        alt: 'Barbering poster for Addict salon',
        caption: 'Barbering services',
        span: 'third',
      },
      {
        src: '/images/addict-poster-2.jpg',
        alt: 'Poster listing hair services offered by Addict salon',
        caption: 'Hair services',
        span: 'third',
      },
      {
        src: '/images/addict-poster-3.jpg',
        alt: 'Poster listing the full service menu for Addict salon',
        caption: 'Full service menu',
        span: 'third',
      },
    ],
  },
  {
    id: 'posters',
    number: '03',
    name: 'Posters & campaigns',
    kind: 'Type studies and retail work',
    role: 'Concept, art direction and layout',
    accent: 'ink',
    lede: 'Type doing the talking.',
    body: [
      'A set of one-off pieces where the message had to carry the whole composition: two typographic studies, a Black Friday sneaker drop, and a gym campaign.',
      'Each one is an exercise in hierarchy — deciding what a person reads first, second and last, then spending contrast only where it earns attention.',
    ],
    tags: ['Typography', 'Campaign', 'Retail', 'Layout'],
    media: [
      {
        src: '/images/type-poster-1.jpg',
        alt: 'Typographic poster reading it has to be design, or the voice of reason',
        caption: 'Type study, no. 1',
        span: 'half',
      },
      {
        src: '/images/type-poster-2.jpg',
        alt: 'Black poster reading are you looking for graphic design',
        caption: 'Type study, no. 2',
        span: 'half',
      },
      {
        src: '/images/black-friday.jpg',
        alt: 'Black Friday sneaker sale post in black and green',
        caption: 'Black Friday sneaker drop',
        span: 'half',
      },
      {
        src: '/images/gym-poster.jpg',
        alt: 'Gym and fitness poster in blue and black',
        caption: 'Gym & fitness campaign',
        span: 'half',
      },
    ],
  },
]

export const sections = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
