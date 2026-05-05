import React, { useState } from 'react';
import styles from './styles.module.css';

interface PersonaTab {
  id: string;
  label: string;
  subtitle: string;
  description: string;
  bullets: string[];
}

const tabs: PersonaTab[] = [
  {
    id: 'finops',
    label: 'For FinOps Directors',
    subtitle: 'Visibility & Control',
    description:
      'You need cost visibility into LLM workloads before they blow your budget. REPLACEME gives you shift-left cost intelligence without requiring engineering changes.',
    bullets: [
      'Catch regressions before production — not after the bill arrives',
      'Application-level cost attribution (not just cloud billing)',
      'Continuous monitoring in CI/CD pipelines',
      'Actionable findings, not raw metrics',
    ],
  },
  {
    id: 'platform',
    label: 'For Platform Engineers',
    subtitle: 'Automation & Scale',
    description:
      'You need guardrails that run in CI/CD without slowing down your teams. REPLACEME integrates in minutes and runs silently until something breaks.',
    bullets: [
      'Drop-in GitHub Action — 5-minute setup',
      '135+ rules, zero config required',
      'PR comments with cost impact estimates',
      'Works with any LLM provider',
    ],
  },
  {
    id: 'developers',
    label: 'For Developers',
    subtitle: 'Speed & Feedback',
    description:
      'You want to ship fast without accidentally introducing a $10k/month token explosion. REPLACEME catches it in your PR so you never get paged for it.',
    bullets: [
      'Cost feedback in the PR, not post-incident',
      'Specific line-level findings',
      'Fix suggestions included',
      'No new tools to learn — just your existing workflow',
    ],
  },
];

export default function PersonaTabs(): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>('finops');

  const activePersona = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>SOLUTIONS FOR EVERY TEAM</p>
          <h2 className={styles.headline}>Cost intelligence that works for everyone</h2>
          <p className={styles.subtitle}>
            Whether you&apos;re managing cloud budgets or writing LLM code, REPLACEME meets you
            where you are.
          </p>
        </div>

        <div className={styles.tabBar}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${activeTab === tab.id ? styles.tabButtonActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.tabContent}>
          <div className={styles.personaBadge}>{activePersona.subtitle}</div>
          <p className={styles.personaDescription}>{activePersona.description}</p>

          <div className={styles.whatYouGet}>
            <h3 className={styles.whatYouGetTitle}>What You Get:</h3>
            <ul className={styles.bulletList}>
              {activePersona.bullets.map((bullet) => (
                <li key={bullet} className={styles.bulletItem}>
                  <span className={styles.bulletIcon}>✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.tabCTA}>
            <a href="/docs/intro" className={styles.ctaButton}>
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
