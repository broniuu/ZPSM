import React, {useState} from 'react';
import {StyleSheet, Text, Dimensions, View} from 'react-native';

import Portrait from './_components/Portrait';
import Landscape from './_components/Landscape';

const App: () => Node = () => {
  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  const [portrait, setPortrait] = useState(isPortrait());

  // Event Listener for orientation changes
  Dimensions.addEventListener('change', () => {
    setPortrait(isPortrait());
  });
  return isPortrait() === true ? <Portrait /> : <Landscape />;
};

export default App;
