import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Hero from '@site/src/components/Hero';
import TrustBar from '@site/src/components/TrustBar';
import Approach from '@site/src/components/Approach';
import ProductTabs from '@site/src/components/ProductTabs';
import HomepageBottom from '@site/src/components/HomepageBottom';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Catch cloud cost waste before it ships. Automated cost regression detection for LLM applications."
    >
      <Hero />
      <TrustBar />
      <Approach />
      <ProductTabs />
      <HomepageBottom />
    </Layout>
  );
}
