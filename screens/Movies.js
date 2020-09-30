import React from 'react';
import { View, Text, Button } from 'react-native';

const Movies = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      <Text>Movies</Text>
      <Button title="Movie" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};

export default Movies;
