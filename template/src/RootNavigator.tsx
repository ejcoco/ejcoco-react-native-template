import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'src/redux/reducers';
import SignInNavigator from './screens/Auth/Navigator';
import MainNavigator from './screens/Main/Navigator';
import { checkAuth } from './redux/auth';

export default function RootNavigator() {
  const dispatch = useDispatch();
  const { isLogged } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <NavigationContainer>
      {isLogged ? <MainNavigator /> : <SignInNavigator />}
    </NavigationContainer>
  );
}
