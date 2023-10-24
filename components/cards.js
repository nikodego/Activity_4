import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

const users = [
  {
    name: 'Luffy',
    avatar: 'https://lh3.googleusercontent.com/Ryg5ih-fOWbpEGDpbJYJz5RTq3_28Tvo2h3JQRCdiz16lw5ghitDMN6hcWA57g0d6_8VOqQYcCemRBOfZGQA64ZKkFOn71zuF1LDsXwCh4ywF-_z6VqxbBqmbQvK_-PWfZcztxDd1WDTEEUHX6GdP60',
  },
  {
    name: 'Zoro',
    avatar:
      'https://beebom.com/wp-content/uploads/2023/05/zoro-family-mother-and-father-name-one-piece.jpg',
  },
  {
    name: 'Nami',
    avatar: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/09/One-Piece-Nami.jpg',
  },
  {
    name: 'Usopp',
    avatar: 'https://sportshub.cbsistatic.com/i/2021/03/18/08081697-cdac-4e36-91b5-10df6a5d9015/one-piece-usopp-wano-opening-23-1231730.jpg',
  },
  {
    name: 'Sanji',
    avatar:
      'https://staticg.sportskeeda.com/editor/2023/05/425f5-16829548801476-1920.jpg',
  },
  {
    name: 'Chopper',
    avatar:
      'https://i.pinimg.com/474x/c0/c7/1b/c0c71bcadc86be5ea1c9193e71e3b05a.jpg',
  },
  {
    name: 'Robin',
    avatar:
      'https://staticg.sportskeeda.com/editor/2022/03/669db-16477247716001-1920.jpg',
  },
  {
    name: 'Franky',
    avatar:
      'https://staticg.sportskeeda.com/editor/2022/09/97a63-16643246280216-1920.jpg',
  },
  {
    name: 'Brook',
    avatar:
      'https://lh4.googleusercontent.com/nL6FEg_LjLIp7uLl-aeN26JOsMkPCL9NiggwQRpBprGV-I5Uu6otVFLZNf45GOX7lUdP2I-bQJvZL8tJ6mu3kHbaIV-ucscUiEUo_Lir22Jwzf-uzIasdfQjWVmlYVkU2C7pKtosNA-v2oQwqGjl0co',
  },
  {
    name: 'Jimbei',
    avatar:
      'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Jimbei-One-Piece.jpg',
  },
];

export function Cards() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Card.Title>CARD WITH DIVIDER</Card.Title>
          <Card.Divider />
          {users.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: u.avatar }}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
            );
          })}
        </Card>
        <Card>
          <Card.Title>Straw Hat Pirates</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://w0.peakpx.com/wallpaper/639/672/HD-wallpaper-one-piece-logo-straw-hat-pirates-black.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            The Greatest Pirate of the World
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              backgroundColor:'green',
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});
