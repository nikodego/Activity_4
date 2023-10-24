import React, { useState } from 'react';
import { Button ,Dialog, CheckBox, ListItem, Avatar } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export function Dialogs() {
const [visible1, setVisible1] = useState(false);
const [visible2, setVisible2] = useState(false);
const [visible3, setVisible3] = useState(false);
const [visible4, setVisible4] = useState(false);
const [checked, setChecked] = useState(1);

const toggleDialog1 = () => {
  setVisible1(!visible1);
};
const toggleDialog2 = () => {
  setVisible2(!visible2);
};
const toggleDialog3 = () => {
  setVisible3(!visible3);
};
const toggleDialog4 = () => {
  setVisible4(!visible4);
};


return (
  <View>
    <View style={styles.buttonContainer}>
      <Button
        title="Simple Dialog"
        onPress={toggleDialog1}
        buttonStyle={styles.button}
      />
      <Button
        title="Action Dialog"
        onPress={toggleDialog2}
        buttonStyle={styles.button}
      />
      <Button
        title="Loading Dialog"
        onPress={toggleDialog3}
        buttonStyle={styles.button}
      />
      <Button
        title="Custom Dialog "
        onPress={toggleDialog4}
        buttonStyle={styles.button}
      />
    </View>
    <Dialog
      isVisible={visible1}
      onBackdropPress={toggleDialog1}
    >
      <Dialog.Title title="Saranggola"/>
      <Text>Buto't Balat Lumilipad</Text>
    </Dialog>
    <Dialog
      isVisible={visible2}
      onBackdropPress={toggleDialog2}
    >
      <Dialog.Title title="Carrer"/>
      <Text>Be a Pirate</Text>
      <Dialog.Actions>
        <Dialog.Button title="YES" onPress={() => console.log('Primary Action Clicked!')}/>
        <Dialog.Button title="NO" onPress={() => console.log('Secondary Action Clicked!')}/>
      </Dialog.Actions>
    </Dialog>
    <Dialog isVisible={visible3} onBackdropPress={toggleDialog3}>
      <Dialog.Loading />
    </Dialog>
    <Dialog
      isVisible={visible4}
      onBackdropPress={toggleDialog4}
    >
      <Dialog.Title title="Choose Your Favorite Captain"/>
      {['Monkey D. Luffy', 'Trafalgar D. Water Law', 'Captain Kid', 'Shanks', 'Black Beard'].map((l, i) => (
        <CheckBox
          key={i}
          title={l}
          containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
          checkedIcon={
            <FontAwesome
            name="dot-circle-o"
            type="font-awesome"
            size={18}
        />}
          uncheckedIcon={
            <FontAwesome
            name="circle-o"
            type="font-awesome"
            size={18}
        />}
          checked={checked === i + 1}
          onPress={() => setChecked(i + 1)}
        />
      ))}

      <Dialog.Actions>
        <Dialog.Button title="CANCEL" onPress={toggleDialog4} />
        <Dialog.Button
          title="CHOOSE"
          onPress={() => {
            console.log(`Option ${checked} was selected!`);
            toggleDialog4();
          }}
        />
      </Dialog.Actions>
    </Dialog>
  </View>
);
};

const styles = StyleSheet.create({
button: {
  borderRadius: 6,
  width: 220,
  margin: 20,
  backgroundColor:'#2222b2'
},
buttonContainer: {
  margin: 20,
  justifyContent: 'center',
  alignItems: 'center',
},
});
