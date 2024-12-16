import { Link, useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInLeft,
  SlideInRight,
  SlideOutLeft,
} from "react-native-reanimated";

const About = () => {
  const router = useRouter();
  return (
    <Animated.View
      entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(500)}
      // entering={SlideInRight.duration(500)}
      // exiting={SlideOutLeft.duration(500)}
      className="flex-1  items-center justify-center bg-white"
    >
      <Text className="text-3xl font-bold text-blue">About</Text>
      {/* <Link asChild href={"/about"} className="text-3xl font-bold text-blue">
        <Pressable className="bg-blue-600 rounded-md p-4">
          <Text className="text-white text-center">About</Text>
        </Pressable>
      </Link> */}

      <Pressable
        onPress={() => router.push("/")}
        className="bg-red-600 rounded-md p-4"
      >
        <Text className="text-white text-center">Go to Home</Text>
      </Pressable>
    </Animated.View>
  );
};

export default About;
