import type { ReactNode } from 'react';
import Layout from '@theme/Layout';

export default function Contact(): ReactNode {
  return (
    <Layout title="Book a Demo" description="Book a demo with the REPLACEME team.">
      <main style={{ padding: '4rem 2rem', textAlign: 'center', color: '#e2e8f0' }}>
        <h1>Book a Demo</h1>
        <p>Coming soon. Reach out at <a href="mailto:hello@replaceme.dev">hello@replaceme.dev</a></p>
      </main>
    </Layout>
  );
}
