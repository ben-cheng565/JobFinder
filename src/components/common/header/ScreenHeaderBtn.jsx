import { Image, TouchableOpacity } from "react-native";

import styles from "src/components/common/header/screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, size, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} resizeMode="cover" style={styles.btnImg(size)} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
