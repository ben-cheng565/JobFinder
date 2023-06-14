import { View, Text, TouchableOpacity } from "react-native";

import styles from "src/components/home/nearby/nearbyjobs.style";
import NearbyJobCard from "src/components/common/cards/nearby/NearbyJobCard";

const Nearbyjobs = ({ jobs }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {jobs?.map((job) => (
          <NearbyJobCard job={job} key={`nearby-${job?.job_id}`} />
        ))}
      </View>
    </View>
  );
};

export default Nearbyjobs;
