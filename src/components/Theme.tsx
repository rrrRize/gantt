import React from 'react';
import Task from './Task'; // Taskコンポーネントをインポート
import { ThemeProps } from "./types"


const Theme: React.FC<ThemeProps> = ({ themeData }) => {
    return (
        <div>
            
            <h2>{themeData.theme}</h2>
            {
                themeData.taskList.map(task => (
                    <Task key={task.id} id={task.id} task={task.task} date={task.date}/>
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