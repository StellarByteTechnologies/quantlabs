import { Agency, AppIcon, Coworking, Crypto, Marketing, PortFolio, SassClassic, SassModern, Software, Startup } from './svgIcons';

const MENU_ITEMS = [
  // {
  //   key: 'home',
  //   label: 'Home',
  //   url: '/home',
  //   isTitle: false
  // },
  {
    key: 'landing',
    label: 'Landing',
    isTitle: false,
    children: [
      // All child links are commented
      // { key: 'app', label: 'App', url: '/landing/app', parentKey: 'landing' },
      // ...
    ]
  },
  {
    key: 'pages',
    label: 'Pages',
    isTitle: false,
    children: [
      // { key: 'company', label: 'Company', url: '/pages/company', parentKey: 'pages' },
      // ...
    ]
  },
  {
    key: 'portfolio',
    label: 'Portfolio',
    isTitle: false,
    children: [
      // { key: 'portfolio-grid', label: 'Portfolio Grid', url: '/pages/portfolio/grid', parentKey: 'portfolio' },
      // ...
    ]
  },
  {
    key: 'blogs',
    label: 'Blog',
    parentKey: 'Pages',
    isDivider: false,
    children: [
      // { key: 'blog-page', label: 'Blog', url: '/pages/blogs/list', parentKey: 'blogs' },
      // ...
    ]
  },
  {
    key: 'auth',
    label: 'Account',
    isTitle: false,
    children: [
      // { key: 'auth-login', label: 'Login', url: '/auth/login', parentKey: 'auth' },
      // ...
    ]
  },
  // {
  //   key: 'contact-us',
  //   label: 'Contact us',
  //   url: '/contact-us',
  //   isTitle: false
  // }
];

const HORIZONTAL_MENU_ITEMS = [
  // {
  //   key: 'home',
  //   label: 'Home',
  //   url: '/',
  //   isTitle: true
  // },
  {
    key: 'landing',
    label: 'Landings',
    isTitle: true,
    children: [
      // { key: 'landing-app', label: 'App', icon: <AppIcon />, url: '/landing/app', ... },
      // ...
    ]
  },
  {
    key: 'pages',
    label: 'Pages',
    isTitle: true,
    children: [
      {
        key: 'pages-auth',
        label: 'Account',
        parentKey: 'pages',
        children: [
          // { key: 'auth-login', label: 'Login', url: '/auth/login', parentKey: 'pages-auth' },
          // ...
        ]
      },
      {
        key: 'pages-blogs',
        label: 'Blog',
        parentKey: 'pages',
        isDivider: true,
        children: [
          // { key: 'blog', label: 'Blog', url: '/pages/blogs/list', parentKey: 'pages-blogs' },
          // ...
        ]
      },
      // { key: 'pages-company', label: 'Company', url: '/pages/company', parentKey: 'pages' },
      // ...
    ]
  },
  {
    key: 'docs',
    label: 'Docs',
    isTitle: true,
    children: [
      // { key: 'colors', label: 'Colors', url: '/docs/colors', parentKey: 'docs' },
      // ...
    ]
  }
];

export { HORIZONTAL_MENU_ITEMS, MENU_ITEMS };
