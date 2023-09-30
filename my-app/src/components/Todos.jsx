


import React from 'react'
import { View } from 'react-native';
import Todo from './Todo';


const Todos = ({todos , onToggleDone, addCompletedTask}) => {
  return (
    <View>
    {todos.map(todo =>(
       <Todo todo={todo} key={todo.id} onToggleDone={onToggleDone} addCompletedTask={addCompletedTask}/>
    ))}
    
    </View>
  )
}

export default Todos