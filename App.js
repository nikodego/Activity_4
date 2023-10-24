import * as React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Avatars } from './components/avatar';
import { Bottomsheet } from './components/bottomSheet';
import { Ratings } from './components/rating';
import { Badges } from './components/badge';
import { Overlays } from './components/overlay';
import { Speeddial } from './components/speedDial';
import { Collapse } from './components/collapsible';
import { Spinner } from './components/spinner';
import { fList } from './components/flatList';
import { Form } from './components/foms';
import { Cards } from './components/cards';
import { Dialogs } from './components/dialog';
import { Dividers } from './components/divider';
import { Tiled } from './components/tiles';
import { Carousels } from './components/carousel';
import { Tabs } from './components/tab';
import { Sliders } from './components/slider';
import { Buttongroups } from './components/buttonGroup';
import { Pricings } from './components/pricing';
import { Switches } from './components/switch';


function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.intrologocont}>
      <Image
        style={styles.wew}
        source={require('./assets/rnlogo.gif')}
      />
      </View>
      <br/>
      <View style={styles.buttoncont}>
        <Button
          title="BROWSE"
          onPress={() => navigation.navigate('COMPONENTS')}
        /> 
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function HeaderLogo() {
  return (
    <View style={styles.headerlogocont}>
      <Image
        style={styles.logo}
        source={require('./assets/Straw-Hat-Symbol.png')}
      />
      <Text style={{color: 'white', padding: 5, fontSize: 22, marginLeft:'18px', fontWeight:'bold'}}>HOME</Text>
    </View>
  );
}


function Components({ navigation: { navigate }}) {
  return (
    <View style={styles.container}>
      <View style={styles.componentcont}>
        <View style={styles.button}>
          <Button style={{}}  title="Avatar" onPress={() => navigate('Avatar')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Badge" onPress={() => navigate('Badge')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Bottom Sheet" onPress={() => navigate('Bottom Sheet')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Button Group" onPress={() => navigate('Button Group')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Cards" onPress={() => navigate('Cards')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Carousel" onPress={() => navigate('Carousel')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Collapsible" onPress={() => navigate('Collapsible')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Dialogs" onPress={() => navigate('Dialogs')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Divider" onPress={() => navigate('Divider')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Flat List" onPress={() => navigate('Flat List')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Forms" onPress={() => navigate('Forms')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Overlay" onPress={() => navigate('Overlay')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Pricing" onPress={() => navigate('Pricing')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Rating" onPress={() => navigate('Rating')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Slider" onPress={() => navigate('Slider')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Speed Dial" onPress={() => navigate('Speed Dial')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Spinner" onPress={() => navigate('Spinner')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Switch" onPress={() => navigate('Switch')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Tab" onPress={() => navigate('Tab')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Tiles" onPress={() => navigate('Tiles')}/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerTitle: () => <HeaderLogo /> }}
          />
        <Stack.Screen name="COMPONENTS" component={Components}/>
        <Stack.Screen name="Avatar" component={Avatars}/>
        <Stack.Screen name="Bottom Sheet" component={Bottomsheet}/>
        <Stack.Screen name="Rating" component={Ratings}/>
        <Stack.Screen name="Badge" component={Badges}/>
        <Stack.Screen name="Overlay" component={Overlays}/>
        <Stack.Screen name="Speed Dial" component={Speeddial}/>
        <Stack.Screen name="Collapsible" component={Collapse}/>
        <Stack.Screen name="Spinner" component={Spinner}/>
        <Stack.Screen name="Flat List" component={fList}/>
        <Stack.Screen name="Forms" component={Form}/>
        <Stack.Screen name="Cards" component={Cards}/>
        <Stack.Screen name="Dialogs" component={Dialogs}/>
        <Stack.Screen name="Divider" component={Dividers}/>
        <Stack.Screen name="Tiles" component={Tiled}/>
        <Stack.Screen name="Carousel" component={Carousels}/>
        <Stack.Screen name="Tab" component={Tabs}/>
        <Stack.Screen name="Slider" component={Sliders}/>
        <Stack.Screen name="Button Group" component={Buttongroups}/>
        <Stack.Screen name="Pricing" component={Pricings}/>
        <Stack.Screen name="Switch" component={Switches}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerlogocont:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  logo:{
    width: 40,
    height: 40,
    flex: 1,
    justifyContent: 'flex-end'
  },
  wew:{
    marginTop:50,
    marginBotom:50,
    width: 380,
    height: 380,
  },
  buttoncont:{
    marginLeft:40,
    marginRight:40,
    marginTop:10,
  },
  intrologocont:{
    justifyContent:'center',
    alignItems:'center'
  },
  componentcont:{
    height:'auto',
    marginLeft:40,
    marginRight:40,
  },
  button:{
    margin:8,
    backgroundColor: 'green'
  },
});