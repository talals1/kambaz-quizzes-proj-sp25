import { Provider } from 'react-redux';
import './App.css'
import Kambaz from './Kambaz';
import Labs from './Labs';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import store from './Kambaz/store';

export default function App() {
  return (
    <HashRouter>
      <Provider store={store}>
              <Routes>
              <Route path="/" element={<Navigate to="Kambaz" />} />
              <Route path="/Labs/*" element={<Labs />} />
              <Route path="/Kambaz/*" element={<Kambaz />} />
            </Routes>
      </Provider>
    </HashRouter>
);}

