import React from 'react';
import { ScrollView } from 'react-native';
import { PricingCard } from '@rneui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export function Pricings () {
return (
  <>
  <FontAwesome/>
    <ScrollView>
      <PricingCard
        color={'#d9d216'}
        title="Mythic"
        price="₱13000"
        info={[ 'Maxed Emblems', 'Unlocked 45% Hero Skins', 'Unlocked 45% Sacred Statue', 'Unlocked 45% Painted Skins', 'Unlocked 45% Elimination Effect', 'Unlocked 45% Recall Animation', 'Unlocked 45% Borders']}
        button={{ title: ' GET STARTED', icon: {name:"check", type:'font-awesome', color:'white'} }}
      />
      <PricingCard
        color={'purple'}
        title="Mythical Glory"
        price="₱27000"
        info={['Maxed Emblems', 'Unlocked 75% Hero Skins', 'Unlocked 75% Sacred Statue', 'Unlocked 75% Painted Skins', 'Unlocked 75% Elimination Effect', 'Unlocked 75% Recall Animation', 'Unlocked 75% Borders']}
        button={{ title: ' GET STARTED', icon: {name:"check", type:'font-awesome', color:'white'} }}
      />
      <PricingCard
        color={'#f08deb'}
        title="Mythical Immortal"
        price="₱35000"
        info={['Maxed Emblems', 'Unlocked All Hero Skins', 'Unlocked All Sacred Statue', 'Unlocked All Painted Skins', 'Unlocked All Elimination Effects', 'Unlocked All Recall Animation', 'Unlocked All Borders']}
        button={{ title: ' GET STARTED', icon: {name:"check", type:'font-awesome', color:'white'}}}
      />
    </ScrollView>
  </>
);
};
