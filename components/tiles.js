import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Tile } from '@rneui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export function Tiled() {
return (
  <>
    <View style={{ alignItems: 'center' }}>
      <ScrollView style={{ paddingVertical: 10 }}>
        <Text style={styles.header}>First Tile</Text>
        <Tile
          imageSrc={{
            uri: 'https://api.duniagames.co.id/api/content/upload/file/18492357991572865448.jpg',
          }}
          title='"Giving Up Is The Least Logical Cause Of Action."'
          titleStyle={{ fontSize: 15 }}
          featured
          caption="-Dr. Stone"
          activeOpacity={1}
          width={310}
        />
        <Text style={styles.header}>Second Tile</Text>
          <Tile
            imageSrc={{
              uri: 'https://i.pinimg.com/736x/dc/ed/34/dced3411fd5b21cea111f3de061c5996.jpg',
            }}
            width={310}
          />
        <Text style={styles.header}>Third Tile</Text>
          <Tile
            imageSrc={{
              uri: 'https://i.pinimg.com/736x/d3/da/55/d3da5511b6937d1e62e03a3670fa91f8.jpg',
            }}
            titleStyle={{ fontSize: 20, textAlign: 'center', paddingBottom: 5 }}
            activeOpacity={1}
            width={310}
          >
          </Tile>
      </ScrollView>
    </View>
  </>
);
};

const styles = StyleSheet.create({
header: {
  backgroundColor : "#2222b2",
  color : "white",
  textAlign : "center",
  paddingVertical : 5,
  marginBottom : 10,
  marginTop : 20
}
});