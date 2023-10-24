import React from 'react';
import {Avatar} from 'react-native-elements';
import { View, Button,Text } from 'react-native';

function BackButton() {
  const navigation = useNavigation();
  return (
    <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}

export function Avatars(){
  return( 
  <View>
    <Text style={{textAlign:'center',fontWeight:'bold',fontSize:30,padding:20}}>IMAGE AVATAR</Text>
    <View style={{flex:1,alignItems:'center',flexDirection:'row',justifyContent:'space-evenly',padding:20}}>
      <Avatar 
        size={60}
        rounded
        title="Luffy"
        source={{ uri: "https://preview.redd.it/yc40cow4tr691.png?auto=webp&s=0634e4b596dec75e35a2e138eac1ee075ffdd910" }}
      />
      <Avatar 
        size={60}
        rounded
        title="Buggy"
        source={{ uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8ddfe70-0b23-4aef-8d58-769268414fcb/dfc7qsv-b8c6e1b2-3597-4322-87d3-1bc7b780bd0e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q4ZGRmZTcwLTBiMjMtNGFlZi04ZDU4LTc2OTI2ODQxNGZjYlwvZGZjN3Fzdi1iOGM2ZTFiMi0zNTk3LTQzMjItODdkMy0xYmM3Yjc4MGJkMGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SHVoq23uUwuKLF0KXvGUTUMoG-xPwot0QS2K0yVcTGQ" }}
      />
      <Avatar 
        size={60}
        rounded
        title="Shanks"
        source={{ uri: "https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/3/the-wanted-piece-shanks-devyn-auer.jpg" }}
      />
      <Avatar 
        size={60}
        rounded
        title="Kurohige"
        source={{ uri: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/kurohige-bounty-wanted-poster-one-piece-shiro-vexel.jpg" }}
      />
    </View>
</View>
  );
}
