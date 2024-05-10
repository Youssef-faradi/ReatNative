import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { AppProvider } from "./context";
import { AppNavigation } from "./app/navigation";

export default function App() {
  return (
    <AppProvider>
      <AppNavigation />
      <ExpoStatusBar style="inverted" />
    </AppProvider>
  );
}



// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import Modal from 'react-native-modal'; // import modal

// export default function App() {


//   const [note, setNote] = useState('')
//   const [notes, setNotes] = useState([]);
//   const [change, setChange] = useState(false);

//   const takeInput = (input) => {
//     setNote(input)
//   }
//   const addNote = () => {
//     setNotes([...notes, { text: note, checked: false }])
//     setNote('')
//   }

//   const check = (index) => {
//     const some = [...notes]
//     some[index].checked = !some[index].checked
//     setNotes(some)
//   }


//   const [isModalVisible, setModalVisible] = useState(false); // state to show modal or hide it 
//   return (

//     // <View className="min-h-screen pt-[5vh]">
//     //   <View className="flex-row justify-between px-[5vw]">
//     //     <TextInput value={note} onChangeText={takeInput} placeholder='input' className="border w-[80%] rounded-lg px-2"/>
//     //     <TouchableOpacity onPress={addNote} className="bg-green-500 p-2 rounded-lg"><Text>ADD note</Text></TouchableOpacity>
//     //   </View>
//     //   <View className="flex-wrap pt-4 px-5 ">
//     //     {
//     //       notes.map((item, index )=>(
//     //         <View className="justify-between rounded-xl flex-row py-4  border w-full mt-5 px-5" key={index}>
//     //         <Text className={`${item.checked ? "line-through" : ""}`}>{item.text}</Text>
//     //         <TouchableOpacity onPress={()=>check(index)} className={`border p-2 ${item.checked  ? "bg-green-900" : "bg-white"} `}></TouchableOpacity>
//     //         </View>
//     //       ))
//     //     }
//     //   </View>

//     //   {/* <StatusBar  /> */}
//     // </View>

//     <View className="h-screen pt-[5vh]">
//       <TouchableOpacity onPress={() => { setModalVisible(!isModalVisible) }} className="bg-red-900 flex-row  justify-center">
//         <Text className="bg-green-900 p-2 w-[10%]">Click</Text>
//       </TouchableOpacity>

//       {/* Main modal */}
//       <Modal animationOutTiming={500} onBackButtonPress={() => { setModalVisible(!isModalVisible) }} className="" isVisible={isModalVisible} onBackdropPress={() => { setModalVisible(!isModalVisible) }} >
//         <View className="bg-white h-[50vh] justify-center items-center rounded-xl" >
//           <TextInput value={note} onChangeText={takeInput} placeholder='input' className="border w-[80%] rounded-lg px-2" />
//           <TouchableOpacity onPress={addNote} className="bg-green-500 p-2 rounded-lg"><Text>ADD note</Text></TouchableOpacity>       
//         </View>
//       </Modal>
//       <View>
//         {
//           notes.map((item, index) => (
//             <View className="justify-between rounded-xl flex-row py-4  border w-full mt-5 px-5" key={index}>
//               <Text className={`${item.checked ? "line-through" : ""}`}>{item.text}</Text>
//               <TouchableOpacity onPress={() => check(index)} className={`border p-2 ${item.checked ? "bg-green-900" : "bg-white"} `}></TouchableOpacity>
//             </View>
//           ))
//         }
//       </View>
//     </View>
//   );
// }





