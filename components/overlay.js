import React, { useState } from 'react';
import { Button, Overlay } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export function Overlays () {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button
        title="Open"
        onPress={toggleOverlay}
        buttonStyle={styles.button}
      />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text style={styles.prim}>White Beard</Text>
        <Text style={styles.sec}>
          One Piece is real!
        </Text>
        <Button
          buttonStyle={styles.button}
          title="Start Journey"
          onPress={toggleOverlay}
        />
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 50,
    backgroundColor:'#2222b2'
  },
  prim: {
    margin: 20,
    textAlign: 'center',
    fontSize: 40,
  },
  sec: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 20,   
  },
});