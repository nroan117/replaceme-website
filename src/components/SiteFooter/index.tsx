import type { ReactNode } from 'react';
import styles from './styles.module.css';

/** A single footer navigation link. */
interface FooterLink {
  label: string;
  href: string;
}

/** A single footer column with a title and list of links. */
interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const columns: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { label: 'Cost Scanning', href: '/docs/cost-scanning' },
      { label: 'CI/CD Integration', href: '/docs/cicd' },
      { label: 'Cost Reports', href: '/docs/reports' },
      { label: 'Rule Engine', href: '/docs/rules' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'For FinOps Directors', href: '/solutions/finops' },
      { label: 'For Platform Engineers', href: '/solutions/platform' },
      { label: 'For Developers', href: '/solutions/developers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs/intro' },
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'Blog', href: '/blog' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

/** SiteFooter — 4-column site footer with product links, resources, company info, and copyright. */
export default function SiteFooter(): ReactNode {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {columns.map((col) => (
            <div key={col.title} className={styles.column}>
              <h3 className={styles.columnTitle}>{col.title}</h3>
              <ul className={styles.linkList}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={styles.link}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>© 2026 REPLACEME. All rights reserved.</p>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
