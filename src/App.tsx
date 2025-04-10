import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFound";
// import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

function App() {
    return (
        <Routes>
            <Route path="/privacy" element={<Privacy />} />
            {/* <Route path="/terms" element={<Terms />} /> */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;
