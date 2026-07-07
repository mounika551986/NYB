import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from "./pages_07-07-2026/Components";
import Props from "./pages_07-07-2026/props_07-07-2026/Props";
import State from "./pages_07-07-2026/state_07-07-2026/State";
import Fragments from "./pages_07-07-2026/fragments_07-07-2026/Fragments";
import CallingFunction from "./pages_07-07-2026/callingfunction_07-07-2026/CallingFunction";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/components" element={<Components />} />
                <Route path="/props" element={<Props />} />
                                <Route path="/state" element={<State />} />
                                          <Route path="/fragments" element={<Fragments />} />

                <Route path="/callingfunctions" element={<CallingFunction />} />
                <Route path="/minitask" element={<Minitask/>} />

            </Routes>
        </BrowserRouter>
    );
  };

export default App;