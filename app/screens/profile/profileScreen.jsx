import { Image, Text, View } from "react-native";
import { useAppContext } from "../../../context";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import img from "../../../assets/img.png"
import { useState } from "react";
import { Feather } from '@expo/vector-icons';



export const ProfileScreen = () => {
  const { setRoute } = useAppContext();
  const [follow, setfollow] = useState(false);
  const followed = () => {
    setfollow(!follow)
  }

  return (
    <View className=" h-screen pt-[8%] bg-black">
      <View className="px-[5vw] w-full flex-row   items-center justify-between text-white">
        <Ionicons name="chevron-back-outline" size={24} color="white" />
        <Text className="text-white">Youssef_faradi</Text>
        <Entypo name="dots-three-horizontal" size={24} color="white" />
      </View>
      <View className="px-[5vw] pt-[5vh] pb-[2vh] flex-row items-center justify-between">
        <View className="rounded-[384px] bg-rose-400 p-1">
          <Image className=" w-[18vw] h-[10vh] rounded-full" source={img} />
        </View>
        <View className="flex-row justify-around w-[60%]">
          <View className="items-center">
            <Text className="font-extrabold text-white">
              11
            </Text>
            <Text className="font-extrabold text-white">
              posts
            </Text>
          </View>
          <View className="items-center">
            <Text className="font-extrabold text-white">
              1M
            </Text>
            <Text className="font-extrabold text-white">
              followers
            </Text>
          </View>
          <View className="items-center">
            <Text className="font-extrabold text-white">
              580
            </Text>
            <Text className="font-extrabold text-white">
              following
            </Text>
          </View>
        </View>
      </View>
      <View className="px-[5vw] gap-2 ">
        <Text className="  text-white">
          Youssef faradi | robyo
        </Text>
        <Text className="bg-slate-800 text-xs  p-1 w-[23vw] rounded-full text-white">
          @Youssef_faradi
        </Text>
        <View>
          <Text className="  text-white">
            🥷🏻 Youssef faradi | robyo
          </Text>
          <Text className="  text-white">
            🥷🏻 Youssef faradi | robyo
          </Text>
          <Text className="  text-white">
            🥷🏻 Youssef faradi | robyo
          </Text>
        </View>
      </View>
      <View className="px-[5vw] pt-2 flex-row gap-3 items-center">
        <View className="flex-row">
          <Image className="w-[6vw] h-[3vh] rounded-full" source={img} />
          <Image className="w-[6vw] h-[3vh] rounded-full" source={img} />
          <Image className="w-[6vw] h-[3vh] rounded-full" source={img} />
        </View>
        <Text className="text-white">
          followed by the whole world
        </Text>
      </View>
      <View className="px-[5vw] pt-2 flex-row gap-1 items-center">
        <Text
          className={`text-white px-2 py-1 text-center  rounded w-[45%] ${follow ? "bg-sky-500" : "bg-gray-500"}`}
          onPress={followed}>
          Follow
        </Text>
        <Text className="text-white bg-gray-500 px-2 py-1 text-center  rounded w-[45%] ">
          Message
        </Text>
        <Text className="text-white bg-gray-500 px-2 py-[6px] text-center  rounded  ">
            <Feather name={`${follow ? "user-plus" : "user-check"}`} size={14} color="white" />
        </Text>
      </View>
      <View className="px-[5vw] pt-4 flex-row justify-between">
        <View>
          <Image source={img} className="w-[14vw] h-[8vh] rounded-full" />
          <Text>Messi</Text>
        </View>
        <View>
          <Image source={img} className="w-[14vw] h-[8vh] rounded-full" />
          <Text>Messi</Text>
        </View>
        <View>
          <Image source={img} className="w-[14vw] h-[8vh] rounded-full" />
          <Text>Messi</Text>
        </View>
        <View>
          <Image source={img} className="w-[14vw] h-[8vh] rounded-full" />
          <Text>Messi</Text>
        </View>
        <View>
          <Image source={img} className="w-[14vw] h-[8vh] rounded-full" />
          <Text>Messi</Text>
        </View>
      </View>

    </View>
  );
};