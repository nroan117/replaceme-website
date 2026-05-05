import type { ReactNode } from 'react';
import styles from './styles.module.css';

const MARQUEE_ITEMS = [
  'Top cloud-native fintech',
  'Global SaaS platform',
  'Top 3 US streaming service',
  'Leading AI infrastructure company',
  'Enterprise DevOps platform',
  'Top 5 e-commerce company',
  'Fortune 500 cloud team',
  'High-growth ML startup',
];

export default function TrustBar(): ReactNode {
  // Duplicate items for seamless infinite scroll
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className={styles.trustBar}>
      <div className={styles.anchorStat}>
        <p className={styles.anchorText}>
          Teams building on <span className={styles.highlight}>AWS</span>,{' '}
          <span className={styles.highlight}>GCP</span>, and{' '}
          <span className={styles.highlight}>Azure</span> trust REPLACEME
        </p>
      </div>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {items.map((item, i) => (
            <span key={i} className={styles.marqueeItem}>
              {item}
              <span className={styles.separator} aria-hidden="true">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
