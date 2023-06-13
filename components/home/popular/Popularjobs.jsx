import { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "./popularjobs.style";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = ({ jobs }) => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data={jobs}
          horizontal
          renderItem={({ item }) => (
            <PopularJobCard
              item={item}
              selectedJob={selectedJob}
              onPress={() => router.push(`/job/${item}`)}
            />
          )}
          keyExtractor={(item) => item?.job_id}
          showsHorizontalScrollIndicator={true}
        />
      </View>
    </View>
  );
};

export default Popularjobs;
