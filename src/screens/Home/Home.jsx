import Header from "../../components/Header/Header";
import Stories from "../../components/Stories/Stories";
import Posts from "../../components/Posts/Posts";
import { View } from "react-native";

const Home = () => {
  return (
    <View>
      <Header />
      <Stories />
      <Posts />
    </View>
  );
};

export default Home;
