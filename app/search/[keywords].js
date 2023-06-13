import { SafeAreaView, FlatList } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";

import { COLORS, ICONS, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";
import { NearbyJobCard, ScreenHeaderBtn } from "../../components";
import Spinner from "../../components/common/Spinner";
import Error from "../../components/common/Error";

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
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />

      {loading ? (
        <Spinner />
      ) : error ? (
        <Error />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <NearbyJobCard job={item} />}
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
