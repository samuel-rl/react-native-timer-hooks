import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { useClock } from 'react-native-timer-hooks';

export default function App() {
  const [counter, start, pause, reset, isRunning] = useClock(0, 10);

  return (
    <View style={styles.container}>
      <Text>Seconds: {counter}</Text>
      <Button
        onPress={() => {
          isRunning ? pause() : start();
        }}
        title={isRunning ? 'Pause' : 'Start'}
      />
      <Button onPress={() => reset()} title={'reset'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
