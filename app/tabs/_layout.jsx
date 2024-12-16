import { View, Text, useWindowDimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import FirstTab from "./firstTab";
import SecondTab from "./secondTab";
import { useState } from "react";

const TabsLayout = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const routes = [
    {
      key: "first",
      title: "First Tab",
      icon: "home",
    },
    {
      key: "second",
      title: "Second Tab",
      icon: "information-circle",
    },
  ];
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={SceneMap({
        first: FirstTab,
        second: SecondTab,
      })}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      tabBarPosition="bottom"
      renderTabBar={(props) => (
        <TabBar
          {...props}
          tabStyle={{ backgroundColor: "#ccc" }}
          inactiveColor="black"
          activeColor="green"
          renderIcon={({ route }) => (
            <Ionicons
              name={route.icon}
              size={24}
              color={
                index === routes.findIndex((r) => r.key === route.key)
                  ? "green"
                  : "gray"
              }
            />
          )}
          style={{
            backgroundColor: "white",
            borderTopWidth: 1,
            borderTopColor: "gray",
          }}
        />
      )}
    />
  );
};

export default TabsLayout;
