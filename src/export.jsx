import { AppProvider } from '@edx/frontend-platform/react';
import configureStore from './data/configureStore';
import Header, { messages as headerMessages } from '@edx/frontend-component-header';
import { Route, Switch } from 'react-router-dom';
import { NotFoundPage, ProfilePage } from './profile';
import Footer, { messages as footerMessages } from '@edx/frontend-component-footer';
import { APP_READY, initialize, subscribe } from '@edx/frontend-platform';
import appMessages from './i18n';
import { useEffect, useState } from 'react';
import './index.scss';

export const App = () => {
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    setInitialized(true);
    subscribe(APP_READY, () => {
      setInitialized(true);
    });
  }, []);
  return initialized && (
    <AppProvider store={configureStore()}>
      <Header />
      <main>
        <Switch>
          <Route path="/u/:username" component={ProfilePage} />
          <Route path="/notfound" component={NotFoundPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
    </AppProvider>
  );
};

initialize({
  messages: [
    appMessages,
    headerMessages,
    footerMessages,
  ],
  requireAuthenticatedUser: true,
  hydrateAuthenticatedUser: true,
});

export default App;
