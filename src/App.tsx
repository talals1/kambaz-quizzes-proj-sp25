import { Provider } from "react-redux";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import Kambaz from "./Kambaz";
import store from "./Kambaz/store";
import Labs from "./Labs";

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
    );
}
