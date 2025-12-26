import { v4 as uuidv4 } from 'uuid';

export const createDefaultHeroSection = (variant = 'split') => ({
  id: uuidv4(),
  type: 'hero',
  variant,
  name: 'Hero Section',
  visible: true,
  locked: false,
  styles: {
    backgroundColor: '#0f172a',
    backgroundGradient:
      variant === 'gradient'
        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
        : 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    padding: variant === 'minimal' ? '60px 0' : '120px 0',
    minHeight: variant === 'minimal' ? '60vh' : '90vh',
  },
  content: {
    headline: 'Build Beautiful Websites Without Code',
    subheadline:
      'Drag, drop, and design your dream website with our intuitive builder. No coding required.',
    ctaText: 'Get Started Free',
    ctaSecondaryText: 'Watch Demo',
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  components: [],
});

export const createDefaultFeaturesSection = (variant = 'grid') => ({
  id: uuidv4(),
  type: 'features',
  variant,
  name: 'Features Section',
  visible: true,
  locked: false,
  styles: {
    backgroundColor: '#ffffff',
    padding: '100px 0',
  },
  content: {
    headline: 'Powerful Features',
    subheadline: 'Everything you need to build stunning websites',
    features: [
      {
        id: uuidv4(),
        icon: 'Layers',
        title: 'Drag & Drop Builder',
        description:
          'Intuitive drag and drop interface that makes building websites a breeze.',
      },
      {
        id: uuidv4(),
        icon: 'Palette',
        title: 'Beautiful Templates',
        description:
          'Start with professionally designed templates and customize them to your needs.',
      },
      {
        id: uuidv4(),
        icon: 'Smartphone',
        title: 'Fully Responsive',
        description:
          'Your website looks perfect on any device, from desktop to mobile.',
      },
      {
        id: uuidv4(),
        icon: 'Zap',
        title: 'Lightning Fast',
        description:
          'Optimized for speed to ensure your visitors have the best experience.',
      },
      {
        id: uuidv4(),
        icon: 'Shield',
        title: 'Secure & Reliable',
        description:
          'Enterprise-grade security to keep your website and data safe.',
      },
      {
        id: uuidv4(),
        icon: 'BarChart',
        title: 'Analytics Built-in',
        description:
          'Track your website performance with integrated analytics tools.',
      },
    ],
  },
  components: [],
});

export const createDefaultServicesSection = () => ({
  id: uuidv4(),
  type: 'services',
  name: 'Services Section',
  visible: true,
  locked: false,
  styles: {
    backgroundColor: '#f8fafc',
    padding: '100px 0',
  },
  content: {
    headline: 'Our Services',
    subheadline: 'Comprehensive solutions for your digital presence',
    services: [
      {
        id: uuidv4(),
        imageUrl:
          'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
        title: 'Web Design',
        description:
          'Beautiful, custom designs that capture your brand identity and engage your audience.',
        link: '#',
      },
      {
        id: uuidv4(),
        imageUrl:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
        title: 'Development',
        description:
          'Robust, scalable web applications built with modern technologies.',
        link: '#',
      },
      {
        id: uuidv4(),
        imageUrl:
          'https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&q=80',
        title: 'SEO Optimization',
        description:
          'Improve your search rankings and drive organic traffic to your website.',
        link: '#',
      },
    ],
  },
  components: [],
});

export const createDefaultCTASection = (variant = 'simple') => ({
  id: uuidv4(),
  type: 'cta',
  variant,
  name: 'Call to Action',
  visible: true,
  locked: false,
  styles: {
    backgroundGradient:
      variant === 'banner'
        ? 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)'
        : 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    padding: variant === 'floating' ? '40px 0' : '80px 0',
  },
  content: {
    headline: 'Ready to Get Started?',
    subheadline:
      'Join thousands of creators who are already building amazing websites.',
    ctaText: 'Start Building Now',
    ctaSecondaryText: 'Contact Sales',
  },
  components: [],
});

export const createDefaultLogoCloudSection = () => ({
  id: uuidv4(),
  type: 'logocloud',
  name: 'Logo Cloud',
  visible: true,
  locked: false,
  styles: {
    backgroundColor: '#ffffff',
    padding: '60px 0',
  },
  content: {
    headline: 'Trusted by leading companies',
    logos: [
      {
        id: uuidv4(),
        name: 'Google',
        url:
          'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      },
      {
        id: uuidv4(),
        name: 'Microsoft',
        url:
          'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
      },
      {
        id: uuidv4(),
        name: 'Amazon',
        url:
          'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      },
      {
        id: uuidv4(),
        name: 'Meta',
        url:
          'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
      },
      {
        id: uuidv4(),
        name: 'Apple',
        url:
          'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      },
    ],
  },
  components: [],
});

export const createDefaultNavbar = () => ({
  id: uuidv4(),
  style: 'minimal',
  logo: { text: 'SiteBuilder' },
  links: [
    { id: uuidv4(), label: 'Features', href: '#features' },
    { id: uuidv4(), label: 'Services', href: '#services' },
    { id: uuidv4(), label: 'Pricing', href: '#pricing' },
    { id: uuidv4(), label: 'Contact', href: '#contact' },
    {
      id: uuidv4(),
      label: 'Get Started',
      href: '#start',
      isButton: true,
    },
  ],
  styles: {
    backgroundColor: 'transparent',
    textColor: '#ffffff',
    sticky: true,
  },
});

export const createDefaultFooter = () => ({
  id: uuidv4(),
  style: 'columns',
  logo: { text: 'SiteBuilder' },
  columns: [
    {
      id: uuidv4(),
      title: 'Product',
      links: [
        { id: uuidv4(), label: 'Features', href: '#' },
        { id: uuidv4(), label: 'Pricing', href: '#' },
        { id: uuidv4(), label: 'Templates', href: '#' },
      ],
    },
    {
      id: uuidv4(),
      title: 'Company',
      links: [
        { id: uuidv4(), label: 'About', href: '#' },
        { id: uuidv4(), label: 'Blog', href: '#' },
        { id: uuidv4(), label: 'Careers', href: '#' },
      ],
    },
    {
      id: uuidv4(),
      title: 'Support',
      links: [
        { id: uuidv4(), label: 'Help Center', href: '#' },
        { id: uuidv4(), label: 'Contact', href: '#' },
        { id: uuidv4(), label: 'Status', href: '#' },
      ],
    },
  ],
  socialLinks: [
    { id: uuidv4(), platform: 'twitter', href: '#' },
    { id: uuidv4(), platform: 'facebook', href: '#' },
    { id: uuidv4(), platform: 'instagram', href: '#' },
    { id: uuidv4(), platform: 'linkedin', href: '#' },
  ],
  copyright: '© 2024 SiteBuilder. All rights reserved.',
  styles: {
    backgroundColor: '#0f172a',
    textColor: '#94a3b8',
  },
});

export const getDefaultPage = () => ({
  id: uuidv4(),
  name: 'Home',
  slug: '/',
  meta: {
    title: 'My Website - Built with SiteBuilder',
    description:
      'A beautiful website created with the no-code website builder.',
  },
  navbar: createDefaultNavbar(),
  sections: [
    createDefaultHeroSection(),
    createDefaultFeaturesSection(),
    createDefaultServicesSection(),
    createDefaultCTASection(),
  ],
  footer: createDefaultFooter(),
  globalStyles: {
    fontFamily: 'Inter, system-ui, sans-serif',
    primaryColor: '#3b82f6',
    secondaryColor: '#8b5cf6',
    backgroundColor: '#ffffff',
  },
});
