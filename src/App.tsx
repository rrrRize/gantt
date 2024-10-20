import React from 'react';
import Theme from './components/Theme'


const App: React.FC = () => {
  const theme = {
    index: 1,
    theme: "My Theme",
    taskList: [
      { id: 1, task: "Install package" },
      { id: 2, task: "Start project" },
      { id: 3, task: "Write code" }
    ]
  };
  return (
    <div>
      <Theme themeData={theme} />
    </div>
    
  )
}

export default App;
