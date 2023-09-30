
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';

// const Form = () => {
 

 

//   return (
//     <View>
//       <Text style={{ color: 'orange', textAlign: 'center', fontSize: 22 , marginBottom:10}}>To do app !</Text>
//       <TextInput   style={{
//           borderWidth: 1,
//           borderColor: 'gray',
//           marginBottom: 10,
//           padding: 8,
//           fontSize: 12, 
//           borderRadius: 15, 
          
//         }}
//         placeholder="to do title"
       
//       />
//       <TextInput   style={{
//           borderWidth: 1,
//           borderColor: 'gray',
//           marginBottom: 10,
//           padding: 8,
          
//           fontSize: 12, 
//           borderRadius: 15, 
//         }}
//         placeholder="to do description"
        
        
       
//       />
//       <TouchableOpacity  style={{ backgroundColor: 'orange', padding: 10, borderRadius: 15 }}
//        >
//         <Text  style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>press here</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Form;
import React from 'react'
import CompletedTask from '../../pages/CompletedTask'
import {
  View
 
} from 'react-native';

const Form = ({completedTasks}) => {
  return (
    <View>
    <CompletedTask completedTasks={completedTasks} />
    </View>
  )
}

export default Form