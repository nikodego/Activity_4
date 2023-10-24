import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Slider, Text, Icon } from '@rneui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export function Sliders() {
const [value, setValue] = useState(0);
const [vertValue, setVertValue] = useState(0);

const interpolate = (start, end) => {
  let k = (value - 0) / 10;
  return Math.ceil((1 - k) * start + k * end) % 256;
};

const color = () => {
  let r = interpolate(255, 0);
  let g = interpolate(0, 255);
  let b = interpolate(0, 0);
  return `rgb(${r},${g},${b})`;
};

return (
  <>
    <Text style={styles.subHeader}>Horizontal</Text>
    <FontAwesome/>
    <View style={[styles.contentView]}>
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={10}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 5, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="circle"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color={color()}
            />
          ),
        }}
      />
      <Text style={{ paddingTop: 20, fontWeight:'bold' }}>Satisfaction: {value}</Text>
    </View>
    <Text style={styles.subHeader}>Vertical</Text>
    <View style={styles.verticalContent}>
      <Slider
        value={vertValue}
        onValueChange={setVertValue}
        maximumValue={50}
        minimumValue={20}
        step={1}
        orientation="vertical"
        thumbStyle={{ height: 20, width: 16, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="circle"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="black"
            />
          ),
        }}
      />
    </View>
    <Text style={{ paddingLeft: 25, fontWeight:'bold' }}>Satisfaction: {vertValue}</Text>
  </>
);
};

const styles = StyleSheet.create({
contentView: {
  padding: 20,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'stretch',
},
verticalContent: {
  padding: 20,
  flex: 1,
  flexDirection: 'row',
  height: 500,
  justifyContent: 'center',
  alignItems: 'stretch',
},
subHeader: {
  backgroundColor : "#2222b2",
  color : "white",
  textAlign : "center",
  paddingVertical : 5,
  marginBottom : 10
}
});