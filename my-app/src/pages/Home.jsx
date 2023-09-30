
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Todos from '../components/Todos';
import CompletedTask from './CompletedTask';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
  Platform ,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const navigation = useNavigation();
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    // Load todos from AsyncStorage when the component mounts
    loadTodos();
  }, []);

  useEffect(() => {
    // Save todos to AsyncStorage whenever todos change
    saveTodos();
  }, [todos]);

  const toggleDone = (taskId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === taskId) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const addTodo = () => {
    if (title) {
      const isTaskAlreadyExist = todos.some(
        (todo) => todo.title === title && todo.description === description
      );

      if (isTaskAlreadyExist) {
        Alert.alert('Task Already Exists', 'This task is already in the list.');
      } else {
        const obj = {
          id: Date.now(),
          done: false,
          title,
          description,
        };
        const allTodos = [...todos, obj];
        setTodos(allTodos);
      }

      setTitle('');
      setDescription('');
    }
  };


  
  // Filter completed tasks
  const filteredCompletedTasks = Array.isArray(completedTasks) ? completedTasks.filter((task) => task.done) : [];

  // Load todos from AsyncStorage using async/await
  const loadTodos = async () => {
    try {
      const savedTodos = await AsyncStorage.getItem('todos');
      if (savedTodos !== null) {
        setTodos(JSON.parse(savedTodos));
      }
    } catch (error) {
      console.error('Error loading todos from AsyncStorage:', error);
    }
  };

  // Save todos to AsyncStorage using async/await
  const saveTodos = async () => {
    try {
      const todosToSave = JSON.stringify(todos);
      await AsyncStorage.setItem('todos', todosToSave);
    } catch (error) {
      console.error('Error saving todos to AsyncStorage:', error);
    }
  };
  const handleDelete = (updatedTodos) => {
    // Update the state with the updated todos
    setTodos(updatedTodos);
  };

  const touchableStyle = Platform.select({
    ios: {
      backgroundColor: '#074a03', // Set red background for iOS
    },
    android: {
      backgroundColor: 'yellow', // Set black background for Android
    },
  });
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}
         
        >
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingTop: 50,
              backgroundColor: '#211d18',
            }}
          >
            <Text style={styles.titlet}>
              T<Text style={styles.title}>
                o-<Text style={styles.titlet}>D</Text>o <Text style={styles.titlet}>A</Text>pp
              </Text>
            </Text>
            <TextInput
              onChangeText={(value) => setTitle(value)}
              style={styles.input}
              placeholder="Enter Your Todo"
              value={title}
            />
            <TextInput
              onChangeText={(value) => setDescription(value)}
              style={styles.input}
              placeholder="Description"
              value={description}
            />
            <TouchableOpacity style={[styles.button,touchableStyle]} onPress={addTodo}>
              <Text style={{ color: '#fff', fontSize: 20 }}    >Add</Text>
            </TouchableOpacity>
            {todos.length !== 0 && (
              <>
                <View style={styles.divider} />
                <Todos todos={todos} onToggleDone={toggleDone} addCompletedTask={setCompletedTasks} onDelete={handleDelete} />
              </>
            )}
    
            {/* Pass filteredCompletedTasks to the CompletedTask component */}
            {filteredCompletedTasks.length > 0 && (
              <>
                <View style={styles.divider} />
                <CompletedTask completedTasks={filteredCompletedTasks} />
              </>
            )}
          </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
    fontSize: 35,
    marginBottom: 15,
    color: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    backgroundColor: '#211d18',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#211d18',
  },
  titlet: {
    fontWeight: '700',
    fontSize: 35,
    marginBottom: 15,
    color: 'red',
  },
  input: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#f5ce9a',
    width: 300,
  },
  button: {
    backgroundColor: '#074a03',
    borderRadius: 5,
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 6,
  },
  divider: {
    width: '95%',
    height: 1,
    backgroundColor: 'white',
    marginVertical: 20,
  },
  completedTitle: {
    color: 'white',
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: 'red',
    fontSize: 20,
    marginBottom: 5,
  },
});

export default Home;
