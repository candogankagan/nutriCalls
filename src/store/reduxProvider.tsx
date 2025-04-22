import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './stores';
import {PersistGate} from 'redux-persist/integration/react';

interface ReduxProviderProps {
  children: React.ReactNode;
}

function ReduxProvider({children}: ReduxProviderProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default ReduxProvider;
