import React from 'react';
import Task from './Task'; // Taskコンポーネントをインポート

interface Task {
    id:number;
    task:string;
}
interface ThemeProps {
    themeData:{
        index: number;
        theme: string;
        taskList: Task[]; // Taskオブジェクトの配列
    };
    
}

const Theme: React.FC<ThemeProps> = ({ themeData }) => {
    return (
        <div>
            
            <h2>{themeData.theme}</h2>
            {
                themeData.taskList.map(task => (
                    <Task key={task.id} id={task.id} task={task.task} />
                ))
            }
        </div>
    );
};

export default Theme;
/*
theme = {
    index:1,
    theme:"create typesript code",
    //taskList
    {
        {
            id:1,
            task:"install package"
        },
        {
            id:2,
            task:"npm start!"
        }
    }

} */