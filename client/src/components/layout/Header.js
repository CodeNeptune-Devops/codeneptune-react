// src/components/layout/Header.jsx
import HeaderClient from './HeaderClient';

// Static arrays moved outside component so they are not re-created
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Solutions', href: '/about' },
  { name: 'Blog', href: '/blog' },
];

const servicesDropdown = [
  { name: 'Mobile App Development', href: '/mobile-app-development-company' },
  { name: 'Android App Development', href: '/android-app-development-company-in-chennai' },
  { name: 'Flutter App Development', href: '/flutter-app-development-company-in-india' },
  { name: 'Web Development', href: '/website-development-company' },
  { name: 'Ecommerce Web Development', href: '/ecommerce-website-development-company' },
  { name: 'Devops', href: '/devops-consulting-company' },
  { name: 'UI UX', href: '/ui-ux-design-services' },
];

// pre-sliced groups (stable references)
const appDevelopment = servicesDropdown.slice(0, 3);
const webDevelopment = servicesDropdown.slice(3, 5);
const creativeCloud = servicesDropdown.slice(5, 7);

export default function Header() {
  return (
    <HeaderClient
      navLinks={navLinks}
      appDevelopment={appDevelopment}
      webDevelopment={webDevelopment}
      creativeCloud={creativeCloud}
    />
  );
}
