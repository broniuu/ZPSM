import React, {useCallback, useState} from 'react';
import {Image, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Image source={'./images/pepe.png'} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'center',
  },
});

export default SplashScreen;
