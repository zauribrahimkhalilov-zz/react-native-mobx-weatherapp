import React from 'react';
import WeatherInfo from './container/WeatherInfo';

import { Provider } from 'mobx-react';
import store from './store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <WeatherInfo />
    </Provider>
  );
};

export default App;