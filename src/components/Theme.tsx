import React from 'react';
import { ThemeProps } from "./types"
import  DateGrid from './DateGrid'


const Theme: React.FC<ThemeProps> = ({ themeData }) => {
    return (
        <div className="theme-container">
            <h2>{themeData.theme}</h2>
            <DateGrid taskDataList={themeData.taskList} startDate={new Date("2024/10/23")}/>
        </div>
    );
};

export default Theme;
