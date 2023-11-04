import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Restaurants } from './api/Restaurants';
import Kartu from './components/Kartu';

export default function App() {

  const [restaurants, setRestaurants] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    Restaurants()
      .then(result => {
        setRestaurants(result.data.restaurants)
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const renderItem = ({ item }) => {
    return <Kartu
      name={item.name}
    ></Kartu>
  };

  return (
    <View style={styles.container}>
      {
        isLoading
          ?
          <Text>Loading..</Text>
          :
          <FlatList
            data={restaurants}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
