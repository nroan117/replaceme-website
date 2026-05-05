import React from 'react';
import styles from './styles.module.css';

interface StatCardProps {
  number: string;
  label: string;
  description: string;
}

function StatCard({ number, label, description }: StatCardProps): JSX.Element {
  return (
    <div className={styles.statCard}>
      <div className={styles.statNumber}>{number}</div>
      <div className={styles.statLabel}>{label}</div>
      <div className={styles.statDescription}>{description}</div>
    </div>
  );
}

const stats: StatCardProps[] = [
  {
    number: '135+',
    label: 'Cost Rules',
    description: 'Covering token limits, retry loops, model waste, and more',
  },
  {
    number: '3,600+',
    label: 'Repos Scanned',
    description: 'Open source repos analyzed to validate rule accuracy',
  },
  {
    number: '16k+',
    label: 'Findings Detected',
    description: 'Cost regression patterns found across the corpus',
  },
];

export default function Stats(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>TRUSTED AT SCALE</p>
          <h2 className={styles.headline}>Built by engineers who&apos;ve seen the waste</h2>
          <p className={styles.subtitle}>Real cost intelligence from real production systems.</p>
        </div>
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
