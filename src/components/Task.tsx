import React from 'react';

interface TaskProps {
  id: number;
  task: string;
}

const Task: React.FC<TaskProps> = ({ id, task }) => {
  return (
    <div>
      <p>Task {id}: {task}</p>
    </div>
  );
};

export default Task; 