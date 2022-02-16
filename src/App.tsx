import React from 'react';
import {NativeBaseProvider} from 'native-base';

import {store} from './store/store';
import {Provider} from 'react-redux';

import {CustomTheme} from './theme';
import * as Demo from './Demo';

export default function App() {
  return (
    <NativeBaseProvider theme={CustomTheme}>
      <Provider store={store}>
        <Demo.Demo2 />
      </Provider>
    </NativeBaseProvider>
  );
}
