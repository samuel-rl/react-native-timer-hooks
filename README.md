<p align="center">
  <a href="https://github.com/samuel3105" aria-label="Follow Samuel3105 on Github" target="_blank">
    <img alt="Github: samuel3105" src="https://img.shields.io/github/followers/samuel3105.svg?label=Follow&style=for-the-badge&logo=github&logoColor=FFFFFF&labelColor=24292e&logoWidth=20&color=lightgray" target="_blank" />
  </a>
</p>


## [Install](https://www.npmjs.com/package/react-native-timer-hooks)

```bash
npm install react-native-timer-hooks
```

---


## Example


<div align="center">
  <img align="center" src="https://github.com/samuel3105/react-native-timer-hooks/blob/master/example/gifs/example.gif?raw=true" alt="image" />
</div>


---


## Import

```jsx
import { useClock } from 'react-native-timer-hooks';
```


---


## Usage

```jsx
import React from "react";
import { StyleSheet, View, Text, Button } from 'react-native';
import { useClock } from 'react-native-timer-hooks';

const Example = () => {
   const [counter, start, pause, reset, isRunning] = useClock(0, 1000, false);

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
};
```

<br>

The `useClock` hooks has the following parameters:

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Explanation</th>
    <th>Required</th>
    <th>Default Value</th>
  </td>
  <tr>
    <td><code>from</code></td>
    <td><code>number</code></td>
    <td>The initial value of counter.</td>
    <td>✅</td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>ms</code></td>
    <td><code>number</code></td>
    <td>The number of millisecond between.
      <br> 
      <code>1000</code>ms for 1 second.
    </td>
    <td>❌</td>
    <td><code>1000</code></td>
  </tr>
  <tr>
    <td><code>down</code></td>
     <td><code>boolean</code></td>
    <td>Counter value should decrease or increase.</td>
    <td>❌</td>
    <td><code>false</code></td>
  </tr>
</table>

<br>

The `useClock` hooks has the following returns values:


<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Explanation</th>
    <th>Parameters</th>
  </td>
  <tr>
    <td><code>counter</code></td>
    <td><code>number</code></td>
    <td>The initial value of counter.</td>
    <td></td>
  </tr>
  <tr>
    <td><code>start</code></td>
    <td><code>function</code></td>
    <td>Start the counter.</td>
    <td></td>
  </tr>
  <tr>
    <td><code>pause</code></td>
    <td><code>function</code></td>
    <td>Pause the counter.</td>
    <td></td>
  </tr>
  <tr>
    <td><code>reset</code></td>
    <td><code>function</code></td>
    <td>Reset the counter. There is an optional parameter to set the <code>from</code> value</td>
    <td><code>from</code>:<code>number</code> = the restart value of the counter.</td>
  </tr>
    <tr>
    <td><code>isRunning</code></td>
    <td><code>boolean</code></td>
    <td>Return <code>true</code> if the counter is running, <code>false</code> if not.</td>
    <td></td>
  </tr>
</table>


---


## License

MIT
