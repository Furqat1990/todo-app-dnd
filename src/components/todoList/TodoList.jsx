import Task from "../task/Task"

const ToDoList = ({ tasks, moveTask, updateTask }) => {
   const todoInfos = [
      { status: 'todo', bgcolor: 'bg-secondary'},
      { status: 'inprogress', bgcolor: 'bg-warning'},
      { status: 'done', bgcolor: 'bg-success'},
   ]

   return (
      <div className='d-flex justify-content-around'>
         { todoInfos.map((info, index) => (
            <Task key={index} tasks={tasks} info={info} moveTask={moveTask} updateTask={updateTask} />
         )) }
      </div>
   )
}

export default ToDoList;