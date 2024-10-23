import React from 'react';
import { TaskProps } from "./types"


const Task: React.FC<TaskProps> = ({ id, task, date, style }) => {
  return (
      <div className="task" style={style}>
          <p>Task {id}: {task}</p>
          <p>Date: {date.toISOString()}</p>
      </div>
  );
};

export default Task; 