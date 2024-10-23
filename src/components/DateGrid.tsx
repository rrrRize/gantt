import React from 'react';
import Task from './Task'; // Taskコンポーネントをインポート
import { TaskListProps } from './types';


const DateGrid: React.FC<TaskListProps> = ({ taskDataList, startDate }) => {
    const interval = 330; // タスクの間隔（ピクセル）

    return (
        <div className="DateGrid" style={{ position: 'relative'}}>
            {taskDataList.map(task => {
                // startDate とタスクの date の差を計算
                const dateDiff = Math.floor((task.date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
                // 横位置を計算
                const leftPosition = dateDiff * interval;

                return (
                    <Task 
                        key={task.id} 
                        id={task.id} 
                        task={task.task} 
                        date={task.date} 
                        style={{ position: 'absolute', left: `${leftPosition}px`}} // スタイルを適用
                    />
                );
            })}
        </div>
    );
};
export default DateGrid;