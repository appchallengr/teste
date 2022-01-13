import React from 'react';
import {
    Routes,
    Route
  } from "react-router-dom";
  
import CurrencyPosition from '../pages/CurrencyPosition';
import CurrencyPositionDetails from '../pages/CurrencyPositionDetails';
import Home from '../pages/Home';

const RoutesList: React.FC = () => (
    <Routes>
        <Route path="/" element={<CurrencyPosition />} />
        <Route path="posicoes-cambiais" element={<CurrencyPosition />} />
        <Route path="posicoes-cambiais/detalhes/:id" element={<CurrencyPositionDetails />} />
    </Routes>
)

export default RoutesList;