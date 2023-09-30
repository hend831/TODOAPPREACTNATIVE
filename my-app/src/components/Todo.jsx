
// import React, { useState } from 'react';
// import { Text, TouchableOpacity, StyleSheet } from 'react-native';

// const Todo = ({ todo, onToggleDone, addCompletedTask }) => {
//   const [isDone, setIsDone] = useState(false);

//   const toggleDone = () => {
//     setIsDone(!isDone);
//     onToggleDone(todo.id);
//     if (!isDone) {
//       addCompletedTask(todo);
//     }
//   };

//   return (
//     <TouchableOpacity
//       onPress={toggleDone}
//       activeOpacity={0.8}
//       style={[
//         styles.container,
//         { textDecorationLine: isDone ? 'line-through' : 'none' },
//       ]}
//     >
//       <Text style={styles.text}>{todo.title}</Text>
//       <TouchableOpacity
//         onPress={toggleDone}
//         style={[
//           styles.doneButton,
//           { backgroundColor: isDone ? '#f5ce9a' : '#074a03' },
//         ]}
//       >
//         <Text style={styles.doneButtonText}>{isDone ? 'Undo' : 'Done'}</Text>
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     minHeight: 60,
//     padding: 15,
//     alignItems: 'flex-start',
//     backgroundColor: '#f5ce9a',
//     marginBottom: 10,
//     fontSize: 25,
//     borderRadius: 5,
//     width: 300,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   text: {
//     color: '#000',
//     flex: 1,
//     textDecorationLine: 'none',
//   },
//   doneButton: {
//     backgroundColor: '#074a03',
//     borderRadius: 5,
//     height: 50,
//     paddingHorizontal: 20,
//     paddingVertical: 11,
//     marginTop: 6,
//   },
//   doneButtonText: {
//     color: 'white',
//   },
// });

// export default Todo;
import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Todo = ({ todo, onToggleDone, addCompletedTask }) => {
  const [isDone, setIsDone] = useState(false);
  const navigation = useNavigation();

  const toggleDone = () => {
    setIsDone(!isDone);
    onToggleDone(todo.id);
    if (!isDone) {
      addCompletedTask(todo);
    }
  };

  const navigateToTodoDetails = () => {
    navigation.navigate('Todo-details', todo);
  };

  return (
    <TouchableOpacity
      onPress={navigateToTodoDetails}
      activeOpacity={0.8}
      style={[
        styles.container,
        { textDecorationLine: isDone ? 'line-through' : 'none' },
      ]}
    >
      <Text style={styles.text}>{todo.title}</Text>
      <TouchableOpacity
        onPress={toggleDone}
        style={[
          styles.doneButton,
          { backgroundColor: isDone ? '#f5ce9a' : '#074a03' },
        ]}
      >
        <Text style={styles.doneButtonText}>{isDone ? 'Undo' : 'Done'}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 60,
    padding: 15,
    alignItems: 'flex-start',
    backgroundColor: '#f5ce9a',
    marginBottom: 10,
    fontSize: 25,
    borderRadius: 5,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#000',
    flex: 1,
    textDecorationLine: 'none',
  },
  doneButton: {
    backgroundColor: '#074a03',
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 11,
    marginTop: 6,
  },
  doneButtonText: {
    color: 'white',
  },
});

export default Todo;
