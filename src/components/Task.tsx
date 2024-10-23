import React from 'react';
import { TaskProps } from "./types"


const Task: React.FC<TaskProps> = ({ id, task, date }) => {
  return (
    <div>
      <p>Task {id}: {task}</p>
      <p>date {date.toISOString()}</p>
    </div>
  );
};

export default Task; 