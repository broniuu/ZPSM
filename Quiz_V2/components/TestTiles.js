import TestTile from './TestTile';
import _ from 'lodash';

const TestTiles = ({tiles, navigation}) => {
  let numberOfTiles = tiles.length;
  return _.map(tiles, tile => (
    <TestTile
      text={tile.text}
      numberOfTiles={numberOfTiles}
      navigation={navigation}
    />
  ));
};

export default TestTiles;
