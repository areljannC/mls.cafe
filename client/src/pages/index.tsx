// EXTERNAL IMPORTS
import React, { FunctionComponent, Fragment, memo } from 'react';

// SHARED IMPORTS
import { HomeContainer } from '@containers';
import { SEO } from '@components';

// SEO
const seo = {
  title: 'mls.cafe',
  description: '🏠 A place to discuss and review real estate listings in Canada.',
  og: {
    siteName: 'mls.cafe',
    title: 'mls.cafe',
    description: '🏠 A place to discuss and review real estate listings in Canada.',
    url: 'mls.cafe'
  }
};

// Component
const HomePage: FunctionComponent = () => {
  return (
    <Fragment>
      <SEO seo={seo} />
      <HomeContainer />
    </Fragment>
  );
};

// Display Name
HomePage.displayName = 'HomePage';

export default memo(HomePage);
