import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'

const SLIDER_WIDTH = Dimensions.get('window').width + 80
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const data = [
    {
      title: "Luffy",
      body: "Will find the One Piece and will become the Pirate King.",
      imgUrl: "https://lh3.googleusercontent.com/Ryg5ih-fOWbpEGDpbJYJz5RTq3_28Tvo2h3JQRCdiz16lw5ghitDMN6hcWA57g0d6_8VOqQYcCemRBOfZGQA64ZKkFOn71zuF1LDsXwCh4ywF-_z6VqxbBqmbQvK_-PWfZcztxDd1WDTEEUHX6GdP60",
    },
    {
      title: "Zoro",
      body: "Will defeat Mihawk and will become the Greatest Swordsman.",
      imgUrl: "https://beebom.com/wp-content/uploads/2023/05/zoro-family-mother-and-father-name-one-piece.jpg",
    },
    {
      title: "Nami",
      body: "Will create a World Map and will become the Greatest Navigator/Thief.",
      imgUrl: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/09/One-Piece-Nami.jpg",
    },
    {
      title: "Usopp",
      body: "Will become the Bravest Man.",
      imgUrl: "https://sportshub.cbsistatic.com/i/2021/03/18/08081697-cdac-4e36-91b5-10df6a5d9015/one-piece-usopp-wano-opening-23-1231730.jpg",
    },
    {
      title: "Sanji",
      body: "Will find the All Blue and will become the Greatest Chef",
      imgUrl: "https://staticg.sportskeeda.com/editor/2023/05/425f5-16829548801476-1920.jpg",
    },
  ];

  const CarouselItems = ({ item, index }) => {
    return (
      <View style={styles.containerItem} key={index}>
        <Image
          source={{ uri: item.imgUrl }}
          style={styles.image}
        />
        <Text style={styles.header}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    )
  }

const CarouselCards = () => {
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
    
    return (
      <View>
        <Carousel
          layout="default"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselItems}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={(index) => setIndex(index)}
          useScrollView={true}
        />
        <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
      </View>
    )
  }
export function Carousels() {
  return (
    <SafeAreaView style={styles.container}>
      <CarouselCards />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: ITEM_WIDTH,
    height: 330,    
  },
  header: {
    color: "#222",
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 10,
  },
  containerItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    height: 530,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop:5
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
});