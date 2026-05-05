import React from 'react';
import Stats from './Stats';
import PersonaTabs from './PersonaTabs';
import CTAStrip from './CTAStrip';
import SiteFooter from './SiteFooter';

export default function HomepageBottom(): JSX.Element {
  return (
    <>
      <Stats />
      <PersonaTabs />
      <CTAStrip />
      <SiteFooter />
    </>
  );
}
