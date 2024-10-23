import React from 'react';
import ThemeList from "./components/ThemeList"


const App: React.FC = () => {
  const theme1 = {
    themeData: {
      index: 1,
      theme: "My Theme 1",
      taskList: [
        { id: 1, task: "Install package", date:new Date("2024/10/23") },
        { id: 2, task: "Start project", date:new Date("2024/10/24") },
        { id: 3, task: "Write code", date:new Date("2024/10/25") }
      ]
    }
  };

  const theme2 = {
    themeData: {
      index: 2,
      theme: "My Theme 2",
      taskList: [
        { id: 4, task: "Write documentation", date:new Date("2024/10/26") },
        { id: 5, task: "Prepare release", date:new Date("2024/10/27") }
      ]
    }
  };
  const List = [
    theme1,
    theme2
  ]
    

  return (
    <div>

      <ThemeList themeLists={List} />
    </div>
    
  )
}

export default App;
