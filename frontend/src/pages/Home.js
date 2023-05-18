import { Fragment } from 'react';
import PageContent from '../components/PageContent';

function HomePage() {
  return (
    <Fragment>
      <PageContent title="Welcome!">
        <p>Browse all our amazing events!</p>
      </PageContent>
    </Fragment>
  );
}

export default HomePage;
