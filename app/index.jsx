import { Link, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInLeft,
  SlideInRight,
  SlideOutLeft,
} from "react-native-reanimated";

const Home = () => {
  const router = useRouter();
  return (
    <Animated.View
      // entering={SlideInRight.duration(500)}
      // exiting={SlideOutLeft.duration(500)}
      entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(500)}
      className="flex-1  items-center justify-center bg-white"
    >
      <Text className="text-3xl font-bold text-blue">Home</Text>
      {/* <Link asChild href={"/about"} className="text-3xl font-bold text-blue">
        <Pressable className="bg-blue-600 rounded-md p-4">
          <Text className="text-white text-center">About</Text>
        </Pressable>
      </Link> */}

      <Pressable
        onPress={() => router.push("/about")}
        className="bg-blue-600 rounded-md p-4"
      >
        <Text className="text-white text-center">Go to about</Text>
      </Pressable>

      <Pressable
        onPress={() => router.push("/tabs")}
        className="bg-green-600 rounded-md p-4"
      >
        <Text className="text-white text-center">Go to tab screen</Text>
      </Pressable>
    </Animated.View>
  );
};

export default Home;
