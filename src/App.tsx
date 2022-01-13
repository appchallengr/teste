import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';

import AuthContext from './contexts/AuthContext';
import Routes from './routes';
import { TableProvider } from './hooks/Table';
import NavBar from './components/NavBar';
import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    background-color: #FFF;
    width: 90%;
    background-color: #FFF;
    position: relative;
    margin: 0 auto;
    margin-top: -21px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    -webkit-box-shadow: 0px 3px 10px 3px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 3px 10px 3px rgba(0,0,0,0.1);
    box-shadow: 0px 3px 10px 3px rgba(0,0,0,0.1);
`;



const App: React.FC = () => {
  return (
    <Router>
      <AuthContext.Provider value={{ name: ''}}>
        <TableProvider>
          <NavBar></NavBar>
          <Container>
            <Routes></Routes>
          </Container>     
        </TableProvider>
      </AuthContext.Provider>
      <GlobalStyle />
    </Router>
  )
}

export default App;
