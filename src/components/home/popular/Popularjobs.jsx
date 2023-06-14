import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "components/home/popular/popularjobs.style";
import PopularJobCard from "components/common/cards/popular/PopularJobCard";

const Popularjobs = ({ jobs }) => {
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
              setSelectedJob={setSelectedJob}
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
