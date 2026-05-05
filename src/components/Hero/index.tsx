import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Hero(): ReactNode {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Cloud Cost Optimization Platform</p>
          <h1 className={styles.headline}>
            Catch cloud cost waste<br />
            <span className={styles.accent}>before it ships</span>
          </h1>
          <p className={styles.subhead}>
            Automated cost regression detection for LLM applications. Catch expensive bugs in CI/CD before they reach production.
          </p>
          <div className={styles.ctas}>
            <Link className={styles.ctaPrimary} href="/contact">
              Book a Demo
            </Link>
            <Link className={styles.ctaSecondary} href="/docs/intro">
              Try Free
            </Link>
          </div>
          <p className={styles.trustStat}>
            135+ cost rules · Used in CI/CD pipelines
          </p>
        </div>
        <div className={styles.visual}>
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span className={styles.dot} style={{ background: '#ef4444' }} />
              <span className={styles.dot} style={{ background: '#f59e0b' }} />
              <span className={styles.dot} style={{ background: '#22c55e' }} />
              <span className={styles.terminalTitle}>replaceme scan</span>
            </div>
            <div className={styles.terminalBody}>
              <pre className={styles.terminalCode}>{`$ npx replaceme@latest scan

🔍 Scanning LLM code for cost regressions...

  ✓ Analyzing prompt configurations
  ✓ Checking token limits
  ✓ Reviewing model selections
  ✓ Auditing retry logic

⚠ FINDINGS (3 issues detected):

  [HIGH] Missing max_tokens in chat.ts:42
    Estimated impact: +$1,240/mo
    Fix: Add max_tokens: 512

  [MED]  Unbounded retry loop in api.ts:87
    Estimated impact: +$340/mo
    Fix: Add retry cap

  [LOW]  GPT-4 used for classification
    Estimated impact: +$180/mo
    Fix: Switch to GPT-3.5

✅ Scan complete — 3 regressions found
   Total estimated waste: $1,760/mo`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
