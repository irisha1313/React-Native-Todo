import { store } from '@/store/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Navigation } from '@/Navigation/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <Navigation />
        {/* </PersistGate> */}
      </Provider>
    </GestureHandlerRootView>
  );
}
//git commit -m "organized the components. added the filtration functionality by date  "
