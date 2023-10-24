import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text,View ,Button } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/FontAwesome';

export function Collapse() {
  const [active, setActive] = useState([]);
  const sect = [
    {
      title: 'Luffy',
      content: (
        <Text style={styles.textSmall}>
          The Staw Hat's Captain.
        </Text>
      ),
    },
    {
      title: 'Zoro',
      content: (
        <Text style={styles.textSmall}>
          The Straw Hat's Swordsman.
        </Text>
      ),
    },
    {
        title: 'Nami',
        content: (
          <Text style={styles.textSmall}>
            The Straw Hat's Navigator.
          </Text>
        ),
      },
      {
        title: 'Usopp',
        content: (
          <Text style={styles.textSmall}>
            The Straw Hat's Sniper.
          </Text>
        ),
      },
      {
        title: 'Sanji',
        content: (
          <Text style={styles.textSmall}>
            The Straw Hat's Cook.
          </Text>
        ),
      },
      {
        title: 'Chopper',
        content: (
          <Text style={styles.textSmall}>
            The Straw Hat's Doctor.
          </Text>
        ),
      }, 
      {
        title: 'Robin',
        content: (
          <Text style={styles.textSmall}>
            The Straw Hat's Archeologist.
          </Text>
        ),
      }, 
      {
        title: 'Franky',
        content: (
          <Text style={styles.textSmall}>
            The Straw Hat's Shipwright.
          </Text>
        ),
      }, 
      {
        title: 'Brook',
        content: (
          <Text style={styles.textSmall}>
            The Straw Hat's Musician.
          </Text>
        ),
      }, 
      {
        title: 'Jimbei',
        content: (
          <Text style={styles.textSmall}>
            The Straw Hat's Helmsman.
          </Text>
        ),
      },
      {
        title: 'Going Merry',
        content: (
          <Text style={styles.textSmall}>
            The Straw Hat's First Ship.
          </Text>
        ),
      },   
      {
      title: 'Thousand Sunny',
      content: (
          <Text style={styles.textSmall}>
            The Straw Hat's current Ship.
          </Text>
        ),
      },
  ];

  function renderHeader(section, _, isActive) {
    return (
      <View style={styles.Header}>
        <Text style={styles.Title}>{section.title}</Text>
        <Icon
          name={isActive ? 'chevron-up' : 'chevron-down'}
          size={20}
          color="#bbb"
        />
      </View>
    );
  }

  function renderContent(section, _, isActive) {
    return (
      <View style={styles.Body}>{section.content}</View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}
      >
        <Accordion
          align="bottom"
          sections={sect}
          activeSections={active}
          renderHeader={renderHeader}
          renderContent={renderContent}
          onChange={(sections) => setActive(sections)}
          sectionContainerStyle={styles.accordContainer}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  accordContainer: {
    paddingBottom: 4,
  },
  Header: {
    padding: 12,
    backgroundColor: '#2222b2',
    color: 'green',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Title: {
    fontSize: 20,
    fontWeight:'bold',  
    color:'white'
  },
  Body: {
    padding: 12,
  },
  textSmall: {
    fontSize: 16,
  },
  seperator: {
    height: 12,
  },
});






