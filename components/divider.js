import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider, useTheme } from '@rneui/themed';
import { ScrollView } from 'react-native';

export function Dividers() {
  const { theme } = useTheme();
  return (
    <ScrollView>
      <Text style={styles.Header}>Horizontal Dividers</Text>
      <View style={styles.hr}>
        <Text style={styles.hrTxt}>Horizontal Divider</Text>
        <Divider />
        <Text style={styles.hrTxt}>
          Horizontal Divider with width and color
        </Text>
        <Divider width={5} color={theme?.colors?.primary} />
      </View>
      <Text style={styles.Header}>Horizontal Divider with Inset</Text>
      <View style={styles.hr}>
        <Text style={styles.hrTxt}>
          Horizontal Divider with left inset
        </Text>
        <Divider inset={true} />
        <Text style={styles.hrTxt}>
          Horizontal Divider with right inset
        </Text>
        <Divider inset={true} insetType="right" />
        <Text style={styles.hrTxt}>
          Horizontal Divider with middle inset
        </Text>
        <Divider inset={true} insetType="middle" />
        <Text style={styles.hrTxt}>Welcome to RNE App</Text>
      </View>
      <Text style={styles.Header}>Vertical Dividers</Text>
      <View style={styles.ver}>
        <Text>Left text</Text>
        <Divider orientation="vertical" />
        <Text>Right text</Text>
      </View>
      <View style={styles.ver}>
        <Text>Left text</Text>
        <Divider orientation="vertical" width={5} />
        <Text>Right text</Text>
      </View>
      <Text style={styles.Header}>Dividers with SubHeader</Text>
      <View style={styles.hr}>
        <Text style={styles.hrTxt}>Left text</Text>
        <Divider
          Header="Divider"
          inset={true}
          subHeaderStyle={{ color: theme?.colors?.primary }}
        />
        <Text style={styles.hrTxt}>Right text</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "#2222b2",
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 10
  },
  hr: {
    marginBottom: 10,
  },
  hrTxt: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  ver: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
