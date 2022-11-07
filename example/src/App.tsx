/* eslint-disable react-native/no-inline-styles */
import React, { useCallback } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useClock } from 'react-native-timer-hooks';

export default function App() {
  const [counter, start, pause, reset, isRunning] = useClock({
    from: 60,
    to: 0,
    ms: 10,
    stopOnFinish: true,
    down: true,
  });

  const [
    counterChrono,
    startChrono,
    pauseChrono,
    resetChrono,
    isRunningChrono,
  ] = useClock({
    from: 0,
  });

  const isCountdownFinish = useCallback(() => {
    return !isRunning && counter === 0;
  }, [isRunning, counter]);

  const formatTime = useCallback((time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.part}>
        <Text>Countdown: {counter}</Text>
        <Text
          style={{
            color: isCountdownFinish() ? 'green' : 'red',
          }}
        >
          Countdown finished: {isCountdownFinish() ? 'true' : 'false'}
        </Text>
        <Button
          onPress={() => {
            isRunning ? pause() : start();
          }}
          title={isRunning ? 'Pause' : 'Start'}
        />
        <Button onPress={() => reset()} title={'Reset'} />
      </View>
      <View style={styles.part}>
        <Text>Chrono: {formatTime(counterChrono)}</Text>
        <Button
          onPress={() => {
            isRunningChrono ? pauseChrono() : startChrono();
          }}
          title={isRunningChrono ? 'Pause chrono' : 'Start chrono'}
        />
        <Button onPress={() => resetChrono()} title={'Reset chrono'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  part: {
    alignItems: 'center',
  },
});
