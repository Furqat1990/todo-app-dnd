import { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import CreateTask from './components/createTask/CreateTask';
import TodoList from './components/todoList/TodoList';
import { toastMsg } from './utils';

function App() {
   const [tasks, setTasks] = useState([]);
   const addTask = newTask => {
      setTasks(prevTasks => {
         const updatedTasks = [...prevTasks, newTask];
         localStorage.setItem('tasks', JSON.stringify(updatedTasks));
         return updatedTasks;
      });
      toastMsg('success', 'Task added successfully');
   }

   const moveTask = id => {
      setTasks(() => {
         const filteredTasks = tasks.filter(task => task.id !== id)
         localStorage.setItem('tasks', JSON.stringify(filteredTasks));
         return filteredTasks
      });
      toastMsg('success', 'Task deleted successfully');
   }

   const updateTask = (id, status) => {
      setTasks(prev => {
         const updatedTasks = prev.map(task => {
            if (task.id === id) {
               return {...task, status }
            }
            return task;
         });
         localStorage.setItem('tasks', JSON.stringify(updatedTasks));
         toastMsg('success', `Task status is changed to "${status.toUpperCase()}"`);
         return updatedTasks;
      });
   }

   useEffect(() => {
      setTasks(JSON.parse(localStorage.getItem('tasks')) || []);
   }, []);

   return (
      <DndProvider backend={HTML5Backend}>
         <div className='container'>
            <CreateTask addTask={addTask}/>
            <hr />
            <TodoList tasks={tasks} moveTask={moveTask} updateTask={updateTask}/>
         </div>
      </DndProvider>
   )
}
export default App