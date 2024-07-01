import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import Animated, {
  SlideInDown
} from 'react-native-reanimated';
import styles from "./footer.style";
import { icons } from "../../../constants";

const Footer = ({ url }) => {
  return (
    <Animated.View style={styles.container} entering={SlideInDown.delay(1000)}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Footer;
