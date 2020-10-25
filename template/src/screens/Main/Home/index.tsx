import React from 'react';
import { Text, StatusBar, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { signout } from 'src/redux/auth';
import { useTypedSelector } from 'src/redux/reducers';

export default function Home() {
  const dispatch = useDispatch();
  const { isLogged } = useTypedSelector((state) => state.auth);

  return (
    <SafeAreaView style={styles.home}>
      <StatusBar barStyle="dark-content" />
      <Text>Home Screen</Text>
      <Text>{JSON.stringify(isLogged)}</Text>
      <Button
        onPress={() => {
          dispatch(signout());
        }}
        title="Logout"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
