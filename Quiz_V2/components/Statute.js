import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

const Statute = ({navigation}) => {
  const [statuteShown, setStatuteShown] = useState('no');
  const {getItem, setItem} = useAsyncStorage('@storage_key');

  const readItemFromStorage = async () => {
    const item = await getItem();
    setStatuteShown(item);
  };

  const writeItemToStorage = async newValue => {
    await setItem(newValue);
    setStatuteShown(newValue);
  };

  const moveToHomeScreen = () => {
    writeItemToStorage('yes');
    navigation.dispatch(
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Home',
          },
        ],
      }),
    );
  };
  useEffect(() => {
    readItemFromStorage();
  }, []);
  if (statuteShown === 'yes') {
    navigation.dispatch(
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Home',
          },
        ],
      }),
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headline}>
        <Text>Just Be Nice :)</Text>
        <TouchableOpacity
          onPress={() => moveToHomeScreen()}
          style={styles.button}>
          <Text>Im understand!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

let styles = StyleSheet.create({
  container: {
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  headline: {
    textAlign: 'center', // <-- the magic
  },
});

export default Statute;
