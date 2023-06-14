import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { COLORS } from 'src/constants';

const Spinner = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </Text>
    </View>
  );
};

export default Spinner;
