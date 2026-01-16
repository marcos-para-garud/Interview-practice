import React from 'react';
import EmployeeDatabaseManagement from './Pages/EmployeeDatabaseManagement';
import Counter from './Pages/Counter';
import Folder from './Pages/FolderStructure';
import FileExplorer from './Pages/FolderStructure';


function App() {
  return (
   <div>
    {/* <EmployeeDatabaseManagement/> */}
    {/* <Counter/> */}
    <FileExplorer/>
    <Folder/>
   </div>
  );
}

export default App;
