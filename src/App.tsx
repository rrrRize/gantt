import React from 'react';
import Theme from './components/Theme'
import ThemeList from "./components/ThemeList"


const App: React.FC = () => {
  const theme1 = {
    themeData: {
      index: 1,
      theme: "My Theme 1",
      taskList: [
        { id: 1, task: "Install package" },
        { id: 2, task: "Start project" },
        { id: 3, task: "Write code" }
      ]
    }
  };

  const theme2 = {
    themeData: {
      index: 2,
      theme: "My Theme 2",
      taskList: [
        { id: 4, task: "Write documentation" },
        { id: 5, task: "Prepare release" }
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
