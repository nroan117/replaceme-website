import type { ReactNode } from 'react';
import { useState } from 'react';
import styles from './styles.module.css';

interface TabData {
  id: string;
  label: string;
  eyebrow: string;
  description: string;
  bullets: string[];
  codeBlock: string;
}

const TABS: TabData[] = [
  {
    id: 'cost-scanning',
    label: 'Cost Scanning',
    eyebrow: 'Automated cost regression scanning for AI workloads',
    description: 'Automated scanning that finds cost regressions in your LLM code',
    bullets: [
      'Missing token limits',
      'Unbounded retry loops',
      'Model selection waste',
      'Prompt caching gaps',
    ],
    codeBlock: `$ npx replaceme@latest scan

🔍 Scanning 47 files...

  ⚠ chat/completion.ts:42
    Rule: missing-max-tokens [HIGH]
    Impact: ~$1,240/mo uncapped
    Fix:  maxTokens: 512

  ⚠ utils/retry.ts:87
    Rule: unbounded-retry [MED]
    Impact: ~$340/mo worst-case
    Fix:  maxRetries: 3

  ⚠ classify/model.ts:14
    Rule: overpriced-model [LOW]
    Impact: ~$180/mo vs gpt-3.5
    Fix:  model: 'gpt-3.5-turbo'

Total: 3 regressions · $1,760/mo est.
Run 'replaceme fix' to auto-remediate.`,
  },
  {
    id: 'cicd-integration',
    label: 'CI/CD Integration',
    eyebrow: 'Catch regressions in every pull request automatically',
    description: 'Drop-in GitHub Actions integration — zero config for common setups',
    bullets: [
      'GitHub Actions native support',
      'GitLab CI / Jenkins plugins',
      'PR comments with cost delta',
      'Block merges on HIGH findings',
    ],
    codeBlock: `# .github/workflows/cost-check.yml

name: Cost Regression Check
on: [pull_request]

jobs:
  replaceme:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: replaceme/action@v1
        with:
          fail-on: HIGH
          comment-on-pr: true
          token: \${{ secrets.GITHUB_TOKEN }}

# PR Comment output:
# ─────────────────────────────────
# 🔍 REPLACEME Cost Check
# ✅ 0 HIGH · ⚠ 1 MED · ✓ 2 LOW
# Est. monthly impact: +$340
# Details → replaceme.dev/runs/abc123`,
  },
  {
    id: 'cost-reports',
    label: 'Cost Reports',
    eyebrow: 'Track cost posture across your entire codebase over time',
    description: 'Aggregate cost findings into team dashboards and trend reports',
    bullets: [
      'Per-repo and per-team cost scores',
      'Weekly cost regression trend',
      'Slack / PagerDuty alerts',
      'FinOps Foundation alignment',
    ],
    codeBlock: `$ replaceme report --format json

{
  "period": "2026-04-01 to 2026-05-01",
  "teams": {
    "platform": {
      "score": 94,
      "open_findings": 2,
      "resolved": 18,
      "est_savings": "$4,320/mo"
    },
    "ml-infra": {
      "score": 71,
      "open_findings": 9,
      "resolved": 4,
      "est_savings": "$1,100/mo"
    }
  },
  "total_est_savings": "$5,420/mo",
  "trend": "improving (+12pts MoM)"
}`,
  },
  {
    id: 'rule-engine',
    label: 'Rule Engine',
    eyebrow: 'Define and enforce cost guardrails as code',
    description: 'Write custom rules in YAML — ship them to every repo via policy-as-code',
    bullets: [
      '135+ built-in cost rules',
      'Custom YAML rule authoring',
      'Per-team rule overrides',
      'Semgrep-compatible patterns',
    ],
    codeBlock: `# replaceme-rules/token-limits.yaml

rules:
  - id: missing-max-tokens
    severity: HIGH
    pattern: |
      openai.chat.completions.create({
        ...,
        # no max_tokens key
      })
    message: >
      Missing max_tokens can cause runaway
      costs. Add max_tokens: 512 or lower.
    fix: "Add max_tokens: 512"
    tags: [openai, tokens, cost-critical]

  - id: gpt4-in-bulk-job
    severity: MED
    pattern: model == "gpt-4*"
    context: batch_job
    message: >
      GPT-4 in bulk jobs costs 20x GPT-3.5.
      Use gpt-3.5-turbo for classification.`,
  },
];

export default function ProductTabs(): ReactNode {
  const [activeId, setActiveId] = useState<string>(TABS[0].id);

  const activeTab = TABS.find((t) => t.id === activeId) ?? TABS[0];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>HOW IT WORKS</p>
          <h2 className={styles.headline}>Everything you need to stop cost regressions</h2>
        </div>

        {/* Tab Bar */}
        <div className={styles.tabBar} role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={tab.id === activeId}
              className={tab.id === activeId ? `${styles.tab} ${styles.tabActive}` : styles.tab}
              onClick={() => setActiveId(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={styles.tabContent}>
          <div className={styles.tabLeft}>
            <p className={styles.tabEyebrow}>{activeTab.eyebrow}</p>
            <p className={styles.tabDescription}>{activeTab.description}</p>
            <ul className={styles.tabBullets}>
              {activeTab.bullets.map((bullet, i) => (
                <li key={i} className={styles.tabBulletItem}>
                  <span className={styles.bulletIcon} aria-hidden="true">✓</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.tabRight}>
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <span className={styles.dot} style={{ background: '#ef4444' }} />
                <span className={styles.dot} style={{ background: '#f59e0b' }} />
                <span className={styles.dot} style={{ background: '#22c55e' }} />
              </div>
              <pre className={styles.code}>{activeTab.codeBlock}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
