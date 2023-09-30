// import React,{useEffect} from 'react'
// import { View,Text } from 'react-native';
// import { useRoute } from '@react-navigation/native';

// const TodoDetails = (route) => {
//     const params =useRoute().params;
//   return (
//     <View
    
//     style={{
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'flex-start',
//       paddingTop: 50,
//       backgroundColor: '#211d18',
//     }}
//     >
//     {params && (
//       <>
//         <Text style={{
//           minHeight:60, 
//           padding:15 , 
//           alignItems: 'flex-start' ,
//           backgroundColor: '#f5ce9a' ,
//           marginBottom: 10 ,
          
//           fontSize:25,
//           borderRadius : 5,
//           width:300
//         }}>{params.title}</Text>
//         <Text style={{   minHeight:60, 
//           padding:15 , 
//           alignItems: 'flex-start' ,
//           backgroundColor: '#f5ce9a' ,
//           marginBottom: 10 ,
          
//           fontSize:25,
//           borderRadius : 5,
//           width:300}}>{params.description}</Text>
//       </>
//     )}
   
    
  
//     </View>
//   )
// }

// export default TodoDetails
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const TodoDetails = (route) => {
  const params = useRoute().params;
  return (
    <View
      style={styles.container}
    >
      {params && (
        <>
          <Text style={styles.text}>{params.title}</Text>
          <Text style={styles.text}>{params.description}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    backgroundColor: '#211d18',
  },
  text: {
    minHeight: 60,
    padding: 15,
    alignItems: 'flex-start',
    backgroundColor: '#f5ce9a',
    marginBottom: 10,
    fontSize: 25,
    borderRadius: 5,
    width: 300,
  },
});

export default TodoDetails;
