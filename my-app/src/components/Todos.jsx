
import React from 'react'
import { View } from 'react-native';
import Todo from './Todo';


const Todos = ({todos , onToggleDone, addCompletedTask ,onDelete}) => {
  const handleDelete = (taskId) => {
    // Remove the task from the `todos` array
    const updatedTodos = todos.filter((todo) => todo.id !== taskId);
    
    // Call onDelete to update the state in the parent component
    onDelete(updatedTodos);
  };
  return (
    <View>
    {todos.map(todo =>(
       <Todo todo={todo} key={todo.id} onToggleDone={onToggleDone}
        addCompletedTask={addCompletedTask} onDelete={handleDelete}  />
    ))}
    
    </View>
  )
}

export default Todos