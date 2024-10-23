import React from 'react';
import Theme from "./Theme"


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