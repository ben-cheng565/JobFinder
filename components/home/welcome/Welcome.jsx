import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { ICONS, SIZES } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({ searchTerm, setSearchTerm }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState(jobTypes[0]);

  const handleSearch = () => {
    if (searchTerm) router.push(`/search/${searchTerm}`);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Ben</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.nativeEvent.text)}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <Image
            source={ICONS.search}
            style={styles.searchBtnImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
        />
      </View>
    </View>
  );
};

export default Welcome;
