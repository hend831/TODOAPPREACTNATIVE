
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import { useRoute } from '@react-navigation/native';

// const CompletedTaskList = ({ completedTasks }) => {
//   return (
//     <View>
//       {completedTasks && completedTasks.length !== 0 && (
//         <>
//           <Text style={{ fontSize: 23, textAlign: 'center' }}>Completed Tasks</Text>
//           <Text>Completed Tasks:</Text>
//           {completedTasks.map((completedTask) => (
//             <Text key={completedTask.id}>
//               {completedTask.title}
//             </Text>
//           ))}
//         </>
//       )}
//       {!completedTasks || completedTasks.length === 0 && (
//         <Text style={{ fontSize: 23, textAlign: 'center' }}>No completed tasks</Text>
//       )}
//     </View>
//   );
// }

// const CompletedTask = () => {
//   const route = useRoute();
//   const params = route.params || {};

//   // State for completed tasks
//   const [completedTasks, setCompletedTasks] = useState([]);

//   useEffect(() => {
//     // Set completedTasks when params.completedTasks changes
//     if (params.completedTasks) {
//       setCompletedTasks(params.completedTasks);
//     }
//   }, [params.completedTasks]);

//   return <CompletedTaskList completedTasks={completedTasks} />;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     paddingTop: 50,
//     backgroundColor: '#211d18',
//   },
//   text: {
//     minHeight: 60,
//     padding: 15,
//     alignItems: 'flex-start',
//     backgroundColor: '#f5ce9a',
//     marginBottom: 10,
//     fontSize: 25,
//     borderRadius: 5,
//     width: 300,
//     color: 'red',
//   },
//   noTasksText: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginTop: 20,
//     color: 'gray',
//   },
// });

// export default CompletedTask;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CompletedTask = () => {
  return (
    <View style={{ backgroundColor:'#211d18'  ,paddingTop: 50 ,flex: 1}}>
      <Text style={{ fontSize: 23, textAlign: 'center', color:'white' }}>Completed Tasks</Text>
      <Text style={{ fontSize: 15, textAlign: 'center', color:'gray',paddingTop: 30,paddingBottom:700}}>No completed tasks</Text>
    </View>
  );
};


export default CompletedTask;
