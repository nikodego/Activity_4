import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, ActivityIndicator, StyleSheet, Text, View, } from 'react-native';

async function getItems() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return ['Luffy', 'Zoro', 'Nami', 'Usopp','Sanji', 'Chopper', 'Robin','Franky', 'Brook','Jimbei'];
}

function Item({ name }) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{name}</Text>
    </View>
  );
}

function LoadingAnimation() {
  return (
    <View style={styles.indicatorWrapper}>
      <ActivityIndicator size="large"/>
      <Text style={styles.indicatorText}>Pirates is on a Journey</Text>
    </View>
  );
}

export function Spinner() {
  const [items, setItems] = useState(['Luffy', 'Zoro', 'Nami']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItems().then((items) => {
      setItems(items);
      setLoading(false);
    });
  }, []);

  const renderItem = ({ item }) => (
    <Item name={item}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
      />
      { loading && <LoadingAnimation/> }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#2222b2',
    padding: 12,
    marginBottom: 12,
    marginLeft: 8,
    marginRight: 8,
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
  },
  indicatorWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(100, 100, 100, 0.6)',
  },
  indicatorText: {
    fontSize: 18,
    marginTop: 12,
    textAlign:'center'
  },
});