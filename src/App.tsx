import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';

import AuthContext from './contexts/AuthContext';
import Routes from './routes';
import { TableProvider } from './hooks/Table';



const App: React.FC = () => {
  return (
    <Router>
      <AuthContext.Provider value={{ name: ''}}>
        <TableProvider>
          <Routes></Routes>
        </TableProvider>
      </AuthContext.Provider>
      <GlobalStyle />
    </Router>
  )
}

export default App;
