import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import store from './redux/store';
import RootNavigator from './RootNavigator';

const App = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);

export default App;
