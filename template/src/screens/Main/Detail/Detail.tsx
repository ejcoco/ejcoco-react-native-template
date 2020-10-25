import React from "react";
import { Text, StatusBar, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface IProps {
  signout: () => {};
  isLogged: boolean | null;
}

export default function Detail({ signout, isLogged }: IProps) {
  return (
    <SafeAreaView style={styles.home}>
      <StatusBar barStyle="dark-content" />
      <Text>Detail Screen</Text>
      <Text>{JSON.stringify(isLogged)}</Text>
      <Button
        onPress={() => {
          signout();
        }}
        title="Logout"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
