import type { ReactNode } from 'react';
import Stats from '../Stats';
import PersonaTabs from '../PersonaTabs';
import CTAStrip from '../CTAStrip';
import SiteFooter from '../SiteFooter';

/** HomepageBottom — composition wrapper for the lower half of the homepage (Stats, PersonaTabs, CTAStrip, SiteFooter). */
export default function HomepageBottom(): ReactNode {
  return (
    <>
      <Stats />
      <PersonaTabs />
      <CTAStrip />
      <SiteFooter />
    </>
  );
}
