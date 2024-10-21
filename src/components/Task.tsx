import React from 'react';
import { TaskProps } from "./types"


const Task: React.FC<TaskProps> = ({ id, task }) => {
  return (
    <div>
      <p>Task {id}: {task}</p>
    </div>
  );
};

export default Task; 