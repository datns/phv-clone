import React from 'react';
import { View } from 'react-native';
import CardJob from '@components/CardJob';
import { JobType } from '@src/types';

const mock: JobType = {
  id: 1,
  pickup: {
    name: 'Expo Hall 7',
    address: 'Expo Hall 7, Singapore',
  },
  destination: {
    name: 'Far East Plaza',
    address: '14, Scotts Road, Orchard, Singapore, Singapore, 228213',
  },
  price: 65,
  estimatedMillisecond: 180000,
};
const Ongoing: React.FC = () => {
  return (
    <View>
      <CardJob data={mock} />
    </View>
  );
};

export default Ongoing;
