import React from 'react';
import Theme from "./Theme"

import { TaskProps } from "./types"
import { ThemeProps } from "./types"
import { ThemeListProps } from "./types"


const ThemeList: React.FC<ThemeListProps> = ({themeLists}) => {
    return (
        <div>
            {themeLists.map(theme => (
                <Theme themeData={theme.themeData}/>
            ))}
        </div>
    );
};

export default ThemeList;