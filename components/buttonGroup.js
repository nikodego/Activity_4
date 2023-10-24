import React, {useState} from 'react'
import { ButtonGroup } from '@rneui/themed'
import { Text, StyleSheet } from 'react-native';

export function Buttongroups () {
const [selectedIndex, setSelectedIndex] = useState(0);
const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);
return (
  <>
    <ButtonGroup
      buttons={['SIMPLE', 'BUTTON', 'GROUP']}
      selectedIndex={selectedIndex}
      onPress={(value) => {
        setSelectedIndex(value);
      }}
      containerStyle={{ marginBottom: 20 }}
    />
    <ButtonGroup
      buttons={['Select', 'Multiple', 'Group', 'Button']}
      selectMultiple
      selectedIndexes={selectedIndexes}
      onPress={(value) => {
        setSelectedIndexes(value);
      }}
      containerStyle={{ marginBottom: 20 }}
    />
  </>
)
}

const styles = StyleSheet.create({
subHeader: {
  backgroundColor : "#2222b2",
  color : "white",
  textAlign : "center",
  paddingVertical : 5,
  marginBottom : 10
}
})