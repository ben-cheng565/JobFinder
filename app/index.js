import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, Route, useRouter } from "expo-router";

import { COLORS, ICONS, IMAGES, SIZES } from "../constants";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
