import React, { useState } from 'react';
import { Switch } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';


export function Switches () {
  const [checked, setChecked] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('red');

  const toggleSwitch = () => {
    setChecked(!checked);
    setBackgroundColor(checked ? 'red' : 'green');
  };

  return (
    <View style={[styles.view, { backgroundColor }]}>
      <Switch
        value={checked}
        onValueChange={(value) => toggleSwitch(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
    padding: 10,
  },
});
