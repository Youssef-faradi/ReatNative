import { HomeScreen, ProfileScreen } from "../screens";
import { useAppContext } from "../../context";
import { Image, Pressable, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import img from "../../assets/img.png";
export const AppNavigation = () => {
  const { Route, setRoute } = useAppContext();

  const screens = {
    Home: <HomeScreen />,
    Profile: <ProfileScreen />,

  };

  return <>
    {screens[Route]}
    <View className="bg-gray-900 absolute left-0 w-full h-[8vh] flex-row items-center justify-around  bottom-0">
      <AntDesign onPress={() => setRoute("Home")} name="home" size={30} color="white" />
      <AntDesign name="search1" size={30} color="white" />
      <FontAwesome6 name="plus-square" size={30} color="white" />
      <MaterialIcons name="ondemand-video" size={30} color="white" />
      <Pressable onPress={() => setRoute("Profile")} >
        <Image  source={img} className="w-[35px] h-[35px] rounded-full" />
      </Pressable>
    </View>
  </>;
};