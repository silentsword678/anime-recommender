import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AnimeList from "../src/components/AnimeList";
import RandomAnime from "../src/components/RandomAnime/RandomAnime";
import WhatsHot from "../src/components/WhatsHot/WhatsHot";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator 
        screenOptions={{
            tabBarStyle: {
                backgroundColor: "black" 
            },
            headerStyle: {
                backgroundColor: "black"
            },
            headerTitleStyle: {
                color: "white"
            },
            tabBarLabelStyle: {
                color: "white"
            }
        }
        }
        >
      {/* planning redesign */}
      {/* <Tab.Screen name="Home" component={AnimeList} /> */}
      <Tab.Screen name="Hot Right Now" component={WhatsHot} />
      <Tab.Screen name="All time" component={AnimeList} />

      {/* This is a difficult component to implement when you don't know the size you're quering from...*/}
      {/* <Tab.Screen name="Random" component={RandomAnime} /> */}
    </Tab.Navigator>
  );
};

export default Tabs;
