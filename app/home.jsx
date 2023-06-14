import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';

import { COLORS, ICONS, SIZES, IMAGES } from 'src/constants';
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
  Spinner,
  Error,
} from 'src/components';
import useFetch from 'src/hook/useFetch';

const Home = () => {
  const [searchWord, setSearchWord] = useState('');

  const { data, loading, error } = useFetch('search', {
    query: 'React Native',
    num_pages: 1,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn iconUrl={ICONS.menu} size="60%" />,
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={IMAGES.profile} size="100%" />
          ),
          headerTitle: '',
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome searchTerm={searchWord} setSearchTerm={setSearchWord} />

          {loading ? (
            <Spinner />
          ) : error ? (
            <Error />
          ) : (
            <>
              <Popularjobs jobs={data} />
              <Nearbyjobs jobs={data} />
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
