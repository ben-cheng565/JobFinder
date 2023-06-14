import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';

import styles from 'src/components/jobdetails/footer/footer.style';
import { ICONS } from 'src/constants';

const Footer = ({ url }) => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn} onPress={() => setLiked(!liked)}>
        <Image
          source={liked ? ICONS.heart : ICONS.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}>
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
