import './App.css';

import React from 'react';

import DataGrid from './DataGrid/DataGrid';

const dataGridProps = {
  columns: [
    { key: 'column', name: 'Column 1' },
    { key: 'column2', name: 'Column 2' },
  ],
  data: [
    { column: 1, column2: 2, id: 1 },
    { column: 12, column2: 22, id: 2 },
  ],
  rowKey: 'id',
};

const App: React.FC = () => {
  return (
    <div className='App'>
      <DataGrid {...dataGridProps} />
    </div>
  );
};

export default App;
