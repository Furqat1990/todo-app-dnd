import { useDrop } from "react-dnd";

import ShowTask from "./ShowTask";

const Task = ({ tasks, info, moveTask, updateTask }) => {
   const [{ isOver }, drop] = useDrop(() => ({
      accept: "task",
      drop: item => addItemToSection(item.id, info.status),
      collect: (monitor) => ({
         isOver: !!monitor.isOver()
      })
   }))

   const filteredTasks = tasks.filter(task => task.status === info.status);

   const removeHandler = id => moveTask(id);

   function  addItemToSection(id, status) {
      updateTask(id, status);
   }

   return (
      <div ref={drop} className={`${isOver ? "bg-secondary opacity-25 rounded" : ""} mt-5`}>
         <div style={{width:"350px"}} className={`${info.bgcolor} mb-5 fs-4 text-uppercase text-white p-3 text-center rounded`}>
            {info.status}
            <span className="badge text-bg-light ms-4 rounded-pill">{filteredTasks.length}</span>               
         </div>
         {
            filteredTasks.map(task => (
               <ShowTask key={task.id} task={task} removeHandler={removeHandler} />
            ))
         }
      </div>
   )
}

export default Task