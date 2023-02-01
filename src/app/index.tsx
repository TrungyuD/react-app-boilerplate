
import { Helmet } from 'react-helmet-async';
import { BrowserRouter} from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import Layout from './layout/container';
import RootRoute from './layout/router';

export default function AppContainer() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Layout>
        <RootRoute />
      </Layout>
    </BrowserRouter>
  );
}
