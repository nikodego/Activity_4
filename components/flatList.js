import React from 'react';
import { View, FlatList, Image, StyleSheet, Text } from 'react-native';

const data = [
    { id: '1', title: 'Captain', imageUrl: 'https://lh3.googleusercontent.com/Ryg5ih-fOWbpEGDpbJYJz5RTq3_28Tvo2h3JQRCdiz16lw5ghitDMN6hcWA57g0d6_8VOqQYcCemRBOfZGQA64ZKkFOn71zuF1LDsXwCh4ywF-_z6VqxbBqmbQvK_-PWfZcztxDd1WDTEEUHX6GdP60' },
    { id: '2', title: 'Swordsman', imageUrl: 'https://beebom.com/wp-content/uploads/2023/05/zoro-family-mother-and-father-name-one-piece.jpg' },
    { id: '3', title: 'Navigator', imageUrl: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/09/One-Piece-Nami.jpg' },
    { id: '4', title: 'Archeologist', imageUrl: 'https://staticg.sportskeeda.com/editor/2022/03/669db-16477247716001-1920.jpg' },
    { id: '5', title: 'Helmsman', imageUrl: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Jimbei-One-Piece.jpg' },
    { id: '6', title: 'Sniper', imageUrl: 'https://sportshub.cbsistatic.com/i/2021/03/18/08081697-cdac-4e36-91b5-10df6a5d9015/one-piece-usopp-wano-opening-23-1231730.jpg' },
    { id: '7', title: 'Cook', imageUrl: 'https://staticg.sportskeeda.com/editor/2023/05/425f5-16829548801476-1920.jpg' },
    { id: '8', title: 'Doctor', imageUrl: 'https://i.pinimg.com/474x/c0/c7/1b/c0c71bcadc86be5ea1c9193e71e3b05a.jpg' },
    { id: '9', title: 'Shipwright', imageUrl: 'https://staticg.sportskeeda.com/editor/2022/09/97a63-16643246280216-1920.jpg' },
    { id: '10', title: 'Musician', imageUrl: 'https://lh4.googleusercontent.com/nL6FEg_LjLIp7uLl-aeN26JOsMkPCL9NiggwQRpBprGV-I5Uu6otVFLZNf45GOX7lUdP2I-bQJvZL8tJ6mu3kHbaIV-ucscUiEUo_Lir22Jwzf-uzIasdfQjWVmlYVkU2C7pKtosNA-v2oQwqGjl0co' },
  ];

  const ItemList = ({ data }) => {
    const renderItem = ({ item }) => (
      <View style={styles.item}>
        <Image style={styles.image} source={{ uri: item.imageUrl }} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  };
  
  export function fList() {
    return (
      <View style={styles.container}>
        <ItemList data={data} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    item: {
      padding:20,
    },
    image: {
      width: 350,
      height: 350,
    },
    title: {
      fontSize: 18,
      fontWeight:'bold'
    },
  });