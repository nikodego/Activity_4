import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Tab, Text, TabView } from '@rneui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

export function Tabs() {
const [index, setIndex] = React.useState(0);
return (
  <>
  <FontAwesome/>
  <Entypo/>
    <Tab
      value={index}
      onChange={(q) => setIndex(q)}
      indicatorStyle={{
        backgroundColor: 'white',
        height: 3,
      }}
      variant="primary"
    >
      <Tab.Item
        title="Recent"
        titleStyle={{ fontSize: 12, backgroundColor: 'red' }}
        icon={{
            name: 'back-in-time',
            type: 'entypo',
            size: 20,
            color: 'white',   
          }}
      />
      <Tab.Item
        title="Favorite"
        titleStyle={{ fontSize: 12, backgroundColor: 'green' }}
        icon={{
            name: 'heart',
            type: 'font-awesome',
            size: 20,
            color: 'white',   
          }}
      />
      <Tab.Item
        title="Cart"
        titleStyle={{ fontSize: 12, backgroundColor: 'blue' }}
        icon={{
            name: 'shopping-cart',
            type: 'font-awesome',
            size: 20,
            color: 'white',   
          }}
      />
    </Tab>

    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
        <View style={styles.cont}>
            <Text style={styles.label}>RECENT</Text>
        </View>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
      <View style={styles.cont}>
            <Text style={styles.label}>FAVORITE</Text>
        </View>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
      <View style={styles.cont}>
            <Text style={styles.label}>CART</Text>
        </View>
      </TabView.Item>
    </TabView>
  </>
);
};

const styles = StyleSheet.create({
    cont:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    label:{
        color:'white',
        fontSize: 90,
    }
    });