import React from 'react';
import { View, ScrollView, Button, Platform } from 'react-native';
import { AirbnbRating } from '@rneui/themed';
import { Rating } from '@rneui/themed';

export function Ratings () {
  const ratingCompleted = (rating) => {
    console.log('Rating is: ' + rating);
  };
  return (
    <View>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
          }}
        >
          <AirbnbRating />
          <AirbnbRating
            count={5}
            reviews={[
              'Very Disatisfied',
              'Disatisfied',
              'Neutral',
              'Satisfied',
              'Very Satisfied',
            ]}
            defaultRating={5}
            size={20}
          />
        </View>
    </ScrollView>
    </View>
  );
};

