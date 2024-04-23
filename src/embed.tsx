import React from 'react';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import { AppContext, ErrorBoundary } from '@edx/frontend-platform/react';
import { Provider } from 'react-redux';

import messages from './i18n';
import configureStore from './data/configureStore';

import AppRoutes from './routes/AppRoutes';
import Head from './head/Head';
import './index.scss';

export const ProfileApp = () => {

  const { locale } = React.useContext(AppContext);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <ErrorBoundary>
        <Provider store={configureStore()}>
          <Head/>
          <AppRoutes />
        </Provider>
      </ErrorBoundary>
    </IntlProvider>
  );
};

export default ProfileApp;
