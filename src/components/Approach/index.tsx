import type { ReactNode } from 'react';
import styles from './styles.module.css';

interface Step {
  number: number;
  name: string;
  subheadline: string;
  body: string;
  bullets: string[];
}

const STEPS: Step[] = [
  {
    number: 1,
    name: 'Connect',
    subheadline: 'Integrate Anywhere',
    body: 'Connect to your CI/CD, GitHub Actions, and cloud billing APIs.',
    bullets: [
      'CI/CD pipelines',
      'GitHub / GitLab / Jenkins',
      'AWS Cost Explorer + GCP Billing',
      'On-premise or cloud',
    ],
  },
  {
    number: 2,
    name: 'Scan',
    subheadline: 'Detect Everything',
    body: 'Scan your LLM code for 135+ cost regression patterns.',
    bullets: [
      'Static analysis of prompts and configs',
      'Token limit violations',
      'Missing cost controls',
      'Model selection anti-patterns',
    ],
  },
  {
    number: 3,
    name: 'Fix',
    subheadline: 'Close the Loop',
    body: 'Get cost findings directly in pull requests.',
    bullets: [
      'Cost findings in PRs',
      'Estimated monthly impact per issue',
      'Track fixes across teams',
      'Continuous monitoring',
    ],
  },
];

function ApproachCard({ step }: { step: Step }): ReactNode {
  return (
    <div className={styles.card}>
      <div className={styles.cardNumber}>{step.number}</div>
      <div className={styles.cardContent}>
        <div className={styles.cardNameRow}>
          <span className={styles.cardName}>{step.name}</span>
          <span className={styles.cardSubheadline}>{step.subheadline}</span>
        </div>
        <p className={styles.cardBody}>{step.body}</p>
        <ul className={styles.cardBullets}>
          {step.bullets.map((bullet, i) => (
            <li key={i} className={styles.bulletItem}>
              <span className={styles.bulletIcon} aria-hidden="true">✓</span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Approach(): ReactNode {
  return (
    <section className={styles.approach}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>THE REPLACEME APPROACH</p>
          <h2 className={styles.headline}>
            Cost intelligence built into your<br />development workflow
          </h2>
          <p className={styles.subhead}>
            From first commit to production, REPLACEME meets you wherever you're building.
          </p>
        </div>
        <div className={styles.stepsGrid}>
          {STEPS.map((step) => (
            <ApproachCard key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
