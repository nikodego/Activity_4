import React from 'react';
import { Text, View, Button, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Badge, withBadge } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';

function BackButton() {
    const navigation = useNavigation();
    return (
      <Button
        title="BACK"
        onPress={() => {
          navigation.goBack();
        }}
      />
    );
  }

const BadgedIcon = withBadge(90)(Ionicons);

export function Badges(){
  return (
    <View>
    <ScrollView>
      <Text style={styles.subHeader}>Notification Badge</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
          marginBottom: 40,
        }}
      >
        <Badge value="10" status="success" />
        <Badge value="20" status="error" />
        <Badge value="30" status="primary" />
        <Badge value="40" status="warning" />
      </View>
      <Text style={styles.subHeader}>Status Badge</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
          marginBottom: 40,
        }}
      >
        <Badge status="success" />
        <Badge status="error" />
        <Badge status="primary" />
        <Badge status="warning" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 20,
        }}
      >
        <Text style={{ color: 'green', paddingVertical: 10 }}>Success</Text>
        <Text style={{ color: 'red', paddingVertical: 10 }}>Error</Text>
        <Text style={{ color: 'blue', paddingVertical: 10 }}>Primary</Text>
        <Text style={{ color: '#e1ad01', paddingVertical: 10 }}>Warning</Text>
      </View>

      <Text style={styles.subHeader}>Badge as Indicator</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
          marginBottom: 40,
        }}
      >
        <View>
          <Avatar
            rounded
            source={{
              uri: 'https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/377509727_1691410958025302_7420817497247925771_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFjW3gqOypkEatsCj_Pt_mTjPuF8ekagWeM-4Xx6RqBZ2Lv8yo_Vg2L2OEIjrqSqcGc6KPmi1Mhstoq09z5Tae0&_nc_ohc=vawBcxqGdVIAX97-tGq&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&oh=00_AfA5dyFb0ojU1np8ijG4mKbfFPEdNYjoXTYu0krb4ilThA&oe=653B9D20',
            }}
            size="medium"
          />
          <Badge
            status="success"
            containerStyle={{ position: 'absolute', top: 5, left: 40 }}
          />
        </View>
        <BadgedIcon 
            type="ionicon" 
            name="chatbubble-ellipses-outline"
            size={40} />
        <View>
          <Avatar
            rounded
            source={{
              uri: 'https://voicefilm.com/wp-content/uploads/2022/08/Does-Luffy-Find-the-One-Piece-When-00.jpg',
            }}
            size="large"
          />
          <Badge
            status="primary"
            value={10}
            containerStyle={{ position: 'absolute', top: 5, left: 60 }}
          />
        </View>
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    backgroundColor: '#2222b2',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    padding: 6,
    height: 60,
    justifyContent:'center',
    display: 'flex',
    alignItems: 'center' 
  },
});
