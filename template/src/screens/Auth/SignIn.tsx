import React from 'react';
import {
  Text,
  StatusBar,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { signin } from 'src/redux/auth';
import { useTypedSelector } from 'src/redux/reducers';

export default function SignIn() {
  const dispatch = useDispatch();
  const { isLoading } = useTypedSelector((state) => state.auth);

  return (
    <SafeAreaView style={styles.home}>
      <StatusBar barStyle="dark-content" />
      <Text>Login screen</Text>

      {isLoading && <ActivityIndicator />}
      {!isLoading && (
        <Button
          title="SignIn"
          onPress={() => {
            dispatch(signin());
          }}
        />
      )}
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
