import React, { useState } from 'react';
import { BottomSheet, Button, ListItem } from 'react-native-elements';
import { View } from 'react-native';

export function Bottomsheet() {
const [isVisible, setIsVisible] = useState(false);
const list = [
  { title: 'Lorem Ipsum 1' },
  { title: 'Lorem Ipsum 2' },
  { title: 'Lorem Ipsum 3' },
  { title: 'Lorem Ipsum 4' },
  { title: 'Lorem Ipsum 5' },
  {
    title: 'Close',
    containerStyle: { backgroundColor: 'red' },
    titleStyle: { color: 'white' },
    onPress: () => setIsVisible(false),
  },
];
return (
  <View>
    <Button
      title="Open"
      onPress={() => setIsVisible(true)}
      buttonStyle={{margin: 50, backgroundColor:'green'}}
    />
    <BottomSheet modalProps={{}} isVisible={isVisible}>
      {list.map((n, b) => (
        <ListItem
          key={b}
          containerStyle={n.containerStyle}
          onPress={n.onPress}
        >
          <ListItem.Content>
            <ListItem.Title style={n.titleStyle}>{n.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </BottomSheet>
  </View>
);
};
