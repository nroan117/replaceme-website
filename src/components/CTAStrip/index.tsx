import type { ReactNode } from 'react';
import styles from './styles.module.css';

/** CTAStrip — full-width bottom call-to-action section with headline and two buttons. */
export default function CTAStrip(): ReactNode {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.headline}>Ship Code, Not Cost Regressions</h2>
        <p className={styles.subtitle}>
          Join engineering teams catching LLM cost waste before it reaches production.
        </p>
        <div className={styles.buttons}>
          <a href="/contact" className={styles.primaryButton}>
            Book a Demo
          </a>
          <a href="/docs/intro" className={styles.secondaryButton}>
            Try Free
          </a>
        </div>
        <p className={styles.trustLine}>
          ✓ 135+ rules &nbsp;·&nbsp; ✓ CI/CD native &nbsp;·&nbsp; ✓ Open source core
        </p>
      </div>
    </section>
  );
}
