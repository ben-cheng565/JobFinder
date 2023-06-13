import { SafeAreaView, Text, FlatList, ActivityIndicator } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";

import { COLORS, ICONS, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";
import { NearbyJobCard, ScreenHeaderBtn } from "../../components";
import styles from "../../styles/search";

const JobSearch = () => {
  const router = useRouter();
  const params = useSearchParams();

  const { data, loading, error } = useFetch("search", {
    query: params.keywords,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={ICONS.left}
              size="60%"
              handleClick={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />

      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : error ? (
        <Text style={styles.errorText}>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <NearbyJobCard
              job={item}
              handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
            />
          )}
          keyExtractor={(item) => item.job_id}
          contentContainerStyle={{
            padding: SIZES.medium,
            rowGap: SIZES.medium,
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default JobSearch;
